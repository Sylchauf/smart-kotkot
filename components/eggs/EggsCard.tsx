import { IconButton, Tooltip } from "@mui/material";
import React, { useState } from "react";
import { FormattedMessage } from "react-intl";

import TocIcon from "@mui/icons-material/Toc";
import AddIcon from "@mui/icons-material/Add";

import useEggs from "../../hooks/useEggs";
import AddEggs from "./AddEggs";
import Eggs from "./Eggs";
import HomeCard from "../HomeCard";
import ListEggs from "./ListEggs";

const EggsCard: React.FC = () => {
  const [openAddEggs, setOpenAddEggs] = useState<boolean>(false);
  const [openListEggs, setOpenListEggs] = useState<boolean>(false);

  const { list, addEggs, deleteEggs } = useEggs();

  const actions: any = [
    <Tooltip
      key={"add"}
      title={
        <FormattedMessage id={"EggsCard.Add"} defaultMessage={"Add eggs"} />
      }
    >
      <IconButton size={"small"} onClick={() => setOpenAddEggs(true)}>
        <AddIcon />
      </IconButton>
    </Tooltip>,
    <Tooltip
      key={"list"}
      title={
        <FormattedMessage
          id={"EggsCard.List"}
          defaultMessage={"List of picked up eggs"}
        />
      }
    >
      <IconButton size={"small"} onClick={() => setOpenListEggs(true)}>
        <TocIcon />
      </IconButton>
    </Tooltip>,
  ];

  return (
    <div>
      {openAddEggs && (
        <AddEggs onClose={() => setOpenAddEggs(false)} onAdd={addEggs} />
      )}
      {openListEggs && (
        <ListEggs
          list={list}
          onClose={() => setOpenListEggs(false)}
          onDelete={deleteEggs}
        />
      )}

      <HomeCard
        title={<FormattedMessage id={"Home.Eggs"} defaultMessage={"Eggs"} />}
        content={<Eggs list={list} isLoading={false} />}
        actions={actions}
      />
    </div>
  );
};

export default EggsCard;
