import React, { useState } from "react";
import { useIntl } from "react-intl";

import { Card, CardContent } from "@mui/material";

import useVegetable from "../../hooks/useVegetable";

const Plant = ({ plant, onClick }) => {
  const [isHover, setIsHover] = useState(false);

  const { data: vegetable } = useVegetable(plant.vegetableId);

  const { locale } = useIntl();

  return (
    <Card
      onClick={onClick}
      elevation={isHover ? 6 : 2}
      style={{ cursor: "pointer" }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <CardContent style={{ textAlign: "center", padding: 8 }}>
        {vegetable?.name[locale]}
        <br />
        <img src={vegetable?.imageUrl} height={48} />
      </CardContent>
    </Card>
  );
};

export default Plant;
