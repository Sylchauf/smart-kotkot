import "../styles/globals.css";

import type { AppProps } from "next/app";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Layout from "../components/Layout";

const queryClient = new QueryClient();

import "moment/locale/fr";
import LocaleConfigurator from "../components/LocaleConfigurator";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <LocaleConfigurator>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </LocaleConfigurator>
    </QueryClientProvider>
  );
}
export default MyApp;
