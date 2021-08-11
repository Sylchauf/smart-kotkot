import { FormattedMessage } from "react-intl";

import { Grid, IconButton } from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";

import Cameras from "../components/Cameras";
import Door from "../components/Door";
import Header from "../components/Header";
import HomeCard from "../components/HomeCard";
import Light from "../components/Light";
import TemperatureCard from "../components/TemperatureCard";
import styles from "../styles/Home.module.css";

export default function Home() {
  const doorActions = [
    <IconButton size={"small"} key={"settings"}>
      <SettingsIcon />
    </IconButton>,
  ];

  return (
    <div className={styles.container}>
      <Header />

      <Grid container spacing={4}>
        <Grid item xs={12} sm={9}>
          <HomeCard
            title={
              <FormattedMessage
                id={"Home.Cameras"}
                defaultMessage={"Cameras"}
              />
            }
            content={<Cameras />}
          />
        </Grid>

        <Grid item xs={12} sm={3}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <HomeCard
                title={
                  <FormattedMessage id={"Home.Door"} defaultMessage={"Door"} />
                }
                content={<Door />}
                actions={doorActions}
              />
            </Grid>
            <Grid item xs={12}>
              <HomeCard
                title={
                  <FormattedMessage
                    id={"Home.Light"}
                    defaultMessage={"Light"}
                  />
                }
                content={<Light />}
              />
            </Grid>

            <Grid item xs={12}>
              <TemperatureCard />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
