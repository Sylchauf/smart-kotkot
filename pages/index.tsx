import { FormattedMessage } from "react-intl";

import { Grid } from "@material-ui/core";
import CameraCard from "../components/CameraCard";
import DoorCard from "../components/DoorCard";

import Header from "../components/Header";
import HomeCard from "../components/HomeCard";
import Light from "../components/Light";
import TemperatureCard from "../components/TemperatureCard";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />

      <Grid container spacing={4}>
        <Grid item xs={12} sm={9}>
          <CameraCard />
        </Grid>

        <Grid item xs={12} sm={3}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <DoorCard />
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
