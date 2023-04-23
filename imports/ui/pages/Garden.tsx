import { useConfirm } from "material-ui-confirm";
import React, { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import { useNavigate, useParams } from "react-router-dom";

import { CircularProgress, Grid, IconButton, Tooltip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SettingsIcon from "@mui/icons-material/Settings";

import GardenLayout from "../components/garden/GardenLayout";
import PlantEditor from "../components/garden/PlantEditor";
import HomeCard from "../components/HomeCard";
import AddPlant from "../components/plants/AddPlant";
import Plant from "../components/plants/Plant";
import usePlants from "../hooks/usePlants";
import usePlot from "../hooks/usePlot";
import useVegetables from "../hooks/useVegetables";

const Garden = () => {
  const [selectedId, selectShape] = useState<string>(null);
  const [selectedPlantId, selectPlant] = useState<string>(null);
  const [openAddPlant, setOpenAddPlant] = useState<boolean>(false);
  const [plants, setPlants] = useState([]);

  const { id } = useParams();
  const plot = usePlot(id);
  const {
    list: listPlants,
    isLoading: isLoadingPlants,
    deletePlant,
  } = usePlants();
  const { list: listVegetables, isLoading: isLoadingVegetables } =
    useVegetables();
  const confirm = useConfirm();
  const navigate = useNavigate();

  useEffect(() => {
    setPlants(
      listPlants.map((p) => {
        return {
          ...p,
          vegetable: listVegetables.find((v) => v._id === p.vegetableId),
        };
      })
    );
  }, [listVegetables, listPlants]);

  if (plot.isLoading || isLoadingPlants || isLoadingVegetables)
    return <CircularProgress />;

  const onMovePlant = (newAttr) => {
    handleChangePlant(newAttr._id, "x", newAttr.x);
    handleChangePlant(newAttr._id, "y", newAttr.y);
  };

  const handleDelete = async () => {
    await confirm();

    await deletePlant(selectedPlantId);

    selectPlant(null);
  };

  const handleChangePlant = (plantId, key, value) => {
    setPlants((oldPlants) => {
      const newPlants = [...oldPlants];

      const plantIndex = newPlants.findIndex((p) => p._id === plantId);

      newPlants[plantIndex][key] = value;

      return newPlants;
    });

    handleSave();
  };

  const handleSave = async () => {
    const plantToSave = plants.find((p) => p._id === selectedPlantId);

    Meteor.promise(
      "plants.update",
      { _id: plantToSave._id },
      {
        width: plantToSave.width,
        height: plantToSave.height,
        x: plantToSave.x,
        y: plantToSave.y,
        events: plantToSave.events,
      }
    );
  };

  const selectedShape = plot.data.shapes.find((a) => a.id === selectedId);

  const panel = (
    <div>
      {openAddPlant && (
        <AddPlant shapeId={selectedId} onClose={() => setOpenAddPlant(false)} />
      )}

      {!selectedPlantId && (
        <>
          <HomeCard
            title={plot.data.name}
            hideCard
            actions={
              <>
                <Tooltip
                  title={
                    <FormattedMessage
                      id={"Garden.AddPlant"}
                      defaultMessage={"Add a plant"}
                    />
                  }
                >
                  <IconButton onClick={() => setOpenAddPlant(true)}>
                    <AddIcon />
                  </IconButton>
                </Tooltip>

                <Tooltip
                  title={
                    <FormattedMessage
                      id={"Garden.EditPlot"}
                      defaultMessage={"Edit the plot"}
                    />
                  }
                >
                  <IconButton onClick={() => navigate(`/garden/${id}/editor`)}>
                    <SettingsIcon />
                  </IconButton>
                </Tooltip>
              </>
            }
          />

          <br />

          <Grid container spacing={2}>
            {plants.map((p) => (
              <Grid item xs={4}>
                <Plant
                  onClick={() => selectPlant(p._id)}
                  key={p._id}
                  plant={p}
                />
              </Grid>
            ))}
          </Grid>
        </>
      )}

      {!!selectedPlantId && (
        <PlantEditor
          selectedPlant={plants.find((p) => p._id === selectedPlantId)}
          onChange={handleChangePlant}
          onExit={() => selectPlant(null)}
          onDelete={handleDelete}
        />
      )}
    </div>
  );

  return (
    <div>
      <GardenLayout
        plotId={plot.data._id}
        initialPosition={plot.data.position}
        panel={panel}
        shapes={plot.data.shapes}
        plants={plants}
        onMovePlant={onMovePlant}
        selectedShape={selectedShape}
        selectedPlant={selectedPlantId}
        onSelectShape={selectShape}
        onSelectPlan={selectPlant}
        mode={"view"}
      />
    </div>
  );
};

export default Garden;
