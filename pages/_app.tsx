import "../styles/globals.css";
import type { AppProps } from "next/app";
import { IntlProvider } from "react-intl";
import { QueryClient, QueryClientProvider } from "react-query";
import Layout from "../components/Layout";
import fr from "../translations/fr.json";
import en from "../translations/en.json";
import config from "../state/config.json";

const queryClient = new QueryClient();

const messages = config.locale === "fr" ? fr : en;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <IntlProvider
      // @ts-ignore
      messages={messages}
      locale={config.locale}
      defaultLocale="en"
    >
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </IntlProvider>
  );
}
export default MyApp;
