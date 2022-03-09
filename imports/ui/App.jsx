import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import AdapterMoment from "@mui/lab/AdapterMoment";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

import "react-toastify/dist/ReactToastify.css";
import Layout from "./components/Layout";
import LocaleConfigurator from "./components/LocaleConfigurator";
import Login from "./components/Login";

import Home from "./Home";

const queryClient = new QueryClient();

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <LocaleConfigurator>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <ToastContainer />
        <Layout>
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route
                path="/"
                element={
                  <RequireAuth>
                    <Home />
                  </RequireAuth>
                }
              />
            </Routes>
          </BrowserRouter>
        </Layout>
      </LocalizationProvider>
    </LocaleConfigurator>
  </QueryClientProvider>
);

const RequireAuth = ({ children }) => {
  let user = Meteor.user();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};
