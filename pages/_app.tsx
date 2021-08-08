import "../styles/globals.css";
import type { AppProps } from "next/app";
import { IntlProvider } from "react-intl";
import { QueryClient, QueryClientProvider } from "react-query";
import Layout from "../components/Layout";
import fr from "../translations/fr.json";
import en from "../translations/en.json";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <IntlProvider
      // @ts-ignore
      messages={fr}
      locale={"fr"}
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
