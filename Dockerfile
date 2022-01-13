# Install dependencies only when needed
FROM node:16-alpine AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
# Install python (dependencies to build)
RUN apk --no-cache add libc6-compat g++ gcc libgcc libstdc++ linux-headers make python3
RUN npm config set fetch-retry-maxtimeout 60000 && npm install node-gyp -g

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM node:16-alpine AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN npm config set fetch-retry-maxtimeout 60000 && npm run build && npm ci --production --ignore-scripts

# Production image, copy all the files and run next
FROM node:16-alpine AS runner
WORKDIR /app

# Needed to build fswebcam
RUN apk add --no-cache git gcc g++ libgcc libstdc++ linux-headers libc6-compat gd-dev make libusb-compat

RUN git clone https://github.com/fsphil/fswebcam.git && cd fswebcam && ./configure --prefix=/usr && make && make install

ENV NODE_ENV production

COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/bin ./bin

EXPOSE 3000

ENV NEXT_TELEMETRY_DISABLED 1

CMD ["npm", "run", "start"]
