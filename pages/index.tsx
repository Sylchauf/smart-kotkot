import { Card, CardContent } from "@material-ui/core";
import { FormattedMessage } from "react-intl";
import Door from "../components/Door";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      Cotcot
      <Card>
        <CardContent>
          <div className={styles.titleCard}>
            <FormattedMessage id={"Home.Door"} defaultMessage={"Door"} />
          </div>
          <Door />
        </CardContent>
      </Card>
    </div>
  );
}
