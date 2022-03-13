import { FormattedMessage } from "react-intl";
import React from "react";

import { Grid } from "@mui/material";
import CameraCard from "./components/CameraCard";
import DoorCard from "./components/DoorCard";
import EggsCard from "./components/eggs/EggsCard";

import HomeCard from "./components/HomeCard";
import Light from "./components/Light";
import TemperatureCard from "./components/TemperatureCard";

const Home: React.FC = () => {
  return (
    <div>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={9}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <CameraCard />
            </Grid>
            <Grid item xs={12}>
              <EggsCard />
            </Grid>
          </Grid>
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
};

export default Home;
