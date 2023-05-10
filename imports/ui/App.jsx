import Inventory from '/imports/ui/pages/Inventory'
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import "react-toastify/dist/ReactToastify.css";
import Layout from "./components/Layout";
import LocaleConfigurator from "./components/LocaleConfigurator";
import Login from "./components/Login";
import GardenEditor from "./GardenEditor";

import Home from "./Home";
import Garden from "./pages/Garden";
import Settings from "./Settings";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <LocaleConfigurator>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <ToastContainer />
        <BrowserRouter>
          <Layout>
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
              <Route
                path="/settings"
                element={
                  <RequireAuth>
                    <Settings />
                  </RequireAuth>
                }
              />
              <Route
                path="/garden/:id/editor"
                element={
                  <RequireAuth>
                    <GardenEditor />
                  </RequireAuth>
                }
              />
              <Route
                path="/garden/:id"
                element={
                  <RequireAuth>
                    <Garden />
                  </RequireAuth>
                }
              />
              <Route
                path="/inventory/:id"
                element={
                  <RequireAuth>
                    <Inventory />
                  </RequireAuth>
                }
              />
            </Routes>
          </Layout>
        </BrowserRouter>
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
