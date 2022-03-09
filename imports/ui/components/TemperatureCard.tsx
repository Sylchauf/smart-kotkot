import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import TimelineIcon from "@mui/icons-material/Timeline";
import moment from "moment";
import React, { useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import Chart from "react-apexcharts";

import useMobile from "../hooks/useMobile";
import useTemperatureLogs from "../hooks/useTemperatureLogs";
import HomeCard from "./HomeCard";
import Temperature from "./Temperature";

const fr = require("apexcharts/dist/locales/fr.json");
const en = require("apexcharts/dist/locales/en.json");

const TemperatureCard: React.FC = () => {
  const [openChart, setOpenChart] = useState<boolean>(false);

  const { series, refetch } = useTemperatureLogs();
  const { formatMessage, locale } = useIntl();
  const { isMobile, isLandscape } = useMobile();

  const handleOpen = () => {
    refetch();
    setOpenChart(true);
  };

  const temperatureActions = [
    <IconButton size={"small"} key={"chart"} onClick={handleOpen}>
      <TimelineIcon />
    </IconButton>,
  ];

  return (
    <>
      <Dialog open={openChart} fullWidth fullScreen={isMobile || isLandscape}>
        <DialogTitle>
          <FormattedMessage
            id={"Temperature.Chart"}
            defaultMessage={"Temperature Logs"}
          />
        </DialogTitle>
        <DialogContent>
          <Chart
            options={{
              chart: {
                locales: [fr, en],
                defaultLocale: String(locale),
              },
              xaxis: {
                type: "datetime",
              },
              yaxis: [
                {
                  title: {
                    text: formatMessage({
                      id: "Temperature.Celsius",
                      defaultMessage: "Celsius (°)",
                    }),
                  },
                  min: -10,
                  max: 45,
                  labels: {
                    formatter: (val) => `${val}°`,
                  },
                },
                {
                  opposite: true,
                  title: {
                    text: formatMessage({
                      id: "Temperature.Percent",
                      defaultMessage: "Percent (%)",
                    }),
                  },
                  min: 0,
                  max: 100,
                  labels: {
                    formatter: (val) => `${val}%`,
                  },
                },
              ],
              tooltip: {
                x: {
                  formatter: (val) => moment(val).format("LLLL"),
                },
              },
            }}
            series={series}
            width="100%"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenChart(false)}>
            <FormattedMessage id={"Actions.Close"} defaultMessage={"Close"} />
          </Button>
        </DialogActions>
      </Dialog>
      <HomeCard
        title={
          <FormattedMessage
            id={"Home.Temperature"}
            defaultMessage={"Temperature"}
          />
        }
        content={<Temperature />}
        actions={temperatureActions}
      />
    </>
  );
};

export default TemperatureCard;
