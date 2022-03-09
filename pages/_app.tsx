import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

import type { AppProps } from "next/app";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";

import AdapterMoment from "@mui/lab/AdapterMoment";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

import Layout from "../components/Layout";

const queryClient = new QueryClient();

import "moment/locale/fr";
import LocaleConfigurator from "../components/LocaleConfigurator";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <LocaleConfigurator>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <ToastContainer />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </LocalizationProvider>
      </LocaleConfigurator>
    </QueryClientProvider>
  );
}
export default MyApp;
