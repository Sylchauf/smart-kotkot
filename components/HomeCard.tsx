import { Card, CardContent } from "@material-ui/core";
import React from "react";
import styles from "../styles/HomeCard.module.css";

interface Props {
  title: React.ReactNode | string;
  content: React.ReactNode | string;
  actions?: React.ReactNode | string;
}

const HomeCard: React.FC<Props> = ({ content, title, actions }) => {
  return (
    <Card>
      <CardContent>
        <div className={styles.titleCard}>
          <div>{title}</div>
          <div>{actions}</div>
        </div>
        {content}
      </CardContent>
    </Card>
  );
};

export default HomeCard;
