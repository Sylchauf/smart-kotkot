# Install dependencies only when needed
FROM node:alpine AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat

# Install python (dependencies to build)
RUN apk --no-cache add g++ gcc libgcc libstdc++ linux-headers make python2
RUN npm install --quiet node-gyp -g


WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM node:alpine AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN npm run build && npm ci --production --ignore-scripts

# Production image, copy all the files and run next
FROM node:16-bullseye AS runner
WORKDIR /app

RUN apt update && apt install -y fswebcam libusb-dev

#RUN echo 'SUBSYSTEM=="usb", MODE="0660", GROUP="plugdev"' > /etc/udev/rules.d/00-usb-permissions.rules
#RUN udevadm control --reload-rules

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
