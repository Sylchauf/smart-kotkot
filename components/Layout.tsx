import {
  Container,
  createTheme,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { ConfirmProvider } from "material-ui-confirm";
import { FormattedMessage } from "react-intl";

import COLORS from "../constants/colors";
import useConfig from "../hooks/useConfig";

const Layout: React.FC = ({ children }) => {
  const { config } = useConfig();

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

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const getMode = () => {
    if (config.theme == "automatic" || !config.theme)
      return prefersDarkMode ? "dark" : "light";

    return config.theme;
  };

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          primary: { main: COLORS.primary },
          mode: getMode(),
        },
      }),
    [prefersDarkMode, config.theme]
  );

  return (
    <ThemeProvider theme={theme}>
      <ConfirmProvider defaultOptions={defaultOptions}>
        <main
          style={{
            background: theme.palette.background.paper,
            minHeight: "100vh",
          }}
        >
          <Container
            style={{
              background: theme.palette.background.default,
              minHeight: "100vh",
            }}
            maxWidth={"lg"}
          >
            {children}
          </Container>
        </main>
      </ConfirmProvider>
    </ThemeProvider>
  );
};

export default Layout;
