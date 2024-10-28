import * as React from "react";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";
import { ConfirmProvider } from "material-ui-confirm";
import { FormattedMessage } from "react-intl";
import { useTracker } from "meteor/react-meteor-data";
import { Meteor } from "meteor/meteor";

import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import { LinkProps } from "@mui/material/Link";

import COLORS from "../../constants/colors";
import Header from "./Header";

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

  const user = useTracker(() => Meteor.user(), []);
  const theme = user?.profile.theme || "automatic";

  console.log(user);

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const getMode = () => {
    if (theme == "automatic") return prefersDarkMode ? "dark" : "light";

    return theme;
  };

  const LinkBehavior = React.forwardRef<
    HTMLAnchorElement,
    Omit<RouterLinkProps, "to"> & { href: RouterLinkProps["to"] }
  >((props, ref) => {
    const { href, ...other } = props;
    // Map href (MUI) -> to (react-router)
    return (
      <RouterLink data-testid="custom-link" ref={ref} to={href} {...other} />
    );
  });

  const themeMaterial = React.useMemo(
    () =>
      createTheme({
        palette: {
          primary: { main: COLORS.primary },
          mode: getMode(),
          background: {
            default: getMode() === "dark" ? "#121212" : "#f3f3f3",
            paper: getMode() === "dark" ? "rgb(18,18,18)" : "#fff",
          },
        },
        components: {
          MuiLink: {
            defaultProps: {
              component: LinkBehavior,
            } as LinkProps,
          },
          MuiButtonBase: {
            defaultProps: {
              LinkComponent: LinkBehavior,
            },
          },
        },
      }),
    [prefersDarkMode, theme]
  );

  return (
    <ThemeProvider theme={themeMaterial}>
      <ConfirmProvider defaultOptions={defaultOptions}>
        <CssBaseline />
        <main
          key={user?._id}
          style={{
            minHeight: "100vh",
          }}
        >
          <Container
            style={{
              minHeight: "100vh",
            }}
            maxWidth={"xl"}
          >
            {!!user && <Header />}
            {children}
          </Container>
        </main>
      </ConfirmProvider>
    </ThemeProvider>
  );
};

export default Layout;
