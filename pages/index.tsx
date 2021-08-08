import { Card, CardContent, Grid } from "@material-ui/core";
import { FormattedMessage } from "react-intl";
import Cameras from "../components/Cameras";
import Door from "../components/Door";
import Header from "../components/Header";
import Light from "../components/Light";
import Temperature from "../components/Temperature";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />

      <Grid container spacing={4}>
        <Grid item xs={12} sm={9}>
          <Card>
            <CardContent>
              <div className={styles.titleCard}>
                <FormattedMessage
                  id={"Home.Cameras"}
                  defaultMessage={"Cameras"}
                />
              </div>
              <Cameras />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={3}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <div className={styles.titleCard}>
                    <FormattedMessage
                      id={"Home.Door"}
                      defaultMessage={"Door"}
                    />
                  </div>
                  <Door />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <div className={styles.titleCard}>
                    <FormattedMessage
                      id={"Home.Light"}
                      defaultMessage={"Light"}
                    />
                  </div>
                  <Light />
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <div className={styles.titleCard}>
                    <FormattedMessage
                      id={"Home.Temperature"}
                      defaultMessage={"Temperature"}
                    />
                  </div>
                  <Temperature />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
