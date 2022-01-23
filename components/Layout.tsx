import { Container } from "@mui/material";
import Head from "next/head";
import React from "react";
import { ConfirmProvider } from "material-ui-confirm";
import { FormattedMessage } from "react-intl";

const Layout: React.FC = ({ children }) => {
  const defaultOptions = {
    title: (
      <FormattedMessage id={"Confirm.Sure"} defaultMessage={"Are you sure ?"} />
    ),
    confirmationText: (
      <FormattedMessage id={"Confirm.Yes"} defaultMessage={"Yes"} />
    ),
    cancellationText: (
      <FormattedMessage id={"Confirm.Cancel"} defaultMessage={"Cancel"} />
    ),
  };

  return (
    <ConfirmProvider defaultOptions={defaultOptions}>
      <main style={{ background: "#f3f3f3", minHeight: "100vh" }}>
        <Container
          style={{ background: "white", minHeight: "100vh" }}
          maxWidth={"lg"}
        >
          {children}
        </Container>
      </main>
    </ConfirmProvider>
  );
};

export default Layout;
