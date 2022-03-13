import { Meteor } from "meteor/meteor";
import moment from "moment";
import React from "react";
import { IntlProvider } from "react-intl";
import { useTracker } from "meteor/react-meteor-data";

import en from "../../translations/en.json";
import fr from "../../translations/fr.json";
import ScreenSplash from "./ScreenSplash";

const LocaleConfigurator: React.FC = ({ children }) => {
  const loggingIn = useTracker(() => Meteor.loggingIn(), []);
  const locale = useTracker(() => Meteor.user()?.profile?.locale || "en", []);

  if (loggingIn) return <ScreenSplash />;

  moment.locale(locale);

  const message = locale === "fr" ? fr : en;

  return (
    <IntlProvider
      // @ts-ignore
      messages={message}
      locale={locale}
      defaultLocale="en"
    >
      {children}
    </IntlProvider>
  );
};

export default LocaleConfigurator;
