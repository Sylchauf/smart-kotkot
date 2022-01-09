import { CircularProgress } from "@mui/material";
import moment from "moment";
import React from "react";
import { IntlProvider } from "react-intl";
import useConfig from "../hooks/useConfig";
import en from "../translations/en.json";
import fr from "../translations/fr.json";

const LocaleConfigurator: React.FC = ({ children }) => {
  const { config, isLoading } = useConfig();

  if (isLoading) return <CircularProgress />;

  moment.locale(config.locale);

  const message = config.locale === "fr" ? fr : en;

  return (
    <IntlProvider
      // @ts-ignore
      messages={message}
      locale={config.locale}
      defaultLocale="en"
    >
      {children}
    </IntlProvider>
  );
};

export default LocaleConfigurator;
