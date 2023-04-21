import React, { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import { useConfirm } from "material-ui-confirm";

import { Button, CircularProgress } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SaveIcon from "@mui/icons-material/Save";

import GardenLayout from "./components/garden/GardenLayout";
import PlotEditor from "./components/garden/PlotEditor";
import SpaceEditor from "./components/garden/SpaceEditor";
import usePlot from "./hooks/usePlot";

const GardenEditor = () => {
  const [updatedPlot, setUpdatedPlot] = useState({});
  const [annotations, setAnnotations] = useState([]);
  const [selectedId, selectShape] = useState<string>(null);

  const { id } = useParams();
  const confirm = useConfirm();
  const navigate = useNavigate();

  const plot = usePlot(id);

  useEffect(() => {
    if (plot.data) {
      setUpdatedPlot({
        name: plot.data.name,
        width: plot.data.width,
        height: plot.data.height,
      });
      setAnnotations(plot.data.shapes);
    }
  }, [JSON.stringify(plot.data)]);

  const selectedShape = annotations.find((a) => a.id === selectedId);

  const handleChangeAttr = (key, value) => {
    const newAnnotations = annotations.filter((a) => a.id !== selectedId);

    const _shape = {
      ...annotations.find((a) => a.id === selectedId),
      [key]: value,
    };

    newAnnotations.push(_shape);

    setAnnotations(newAnnotations);
  };

  const handleAdd = () => {
    const newAnnotation = [
      ...annotations,
      {
        id: uuidv4(),
        name: `Espace ${annotations.length + 1}`,
        x: document.getElementById("konva-container").offsetWidth / 2 - 50,
        y: document.getElementById("konva-container").offsetHeight / 2 - 50,
        width: 100,
        height: 100,
      },
    ];
    setAnnotations(newAnnotation);
  };

  const handleDelete = async () => {
    if (selectedId) {
      await confirm();

      const newAnnotations = annotations.filter((a) => a.id !== selectedId);
      setAnnotations(newAnnotations);
      selectShape(null);
    }
  };

  const onMoveShape = (newAttr) => {
    const _annotations = annotations.filter((a) => a.id != newAttr.id);
    _annotations.push(newAttr);
    setAnnotations(_annotations);
  };

  const onSelectShape = (id) => {
    selectShape(id);
  };

  const handleSave = async () => {
    await confirm();

    try {
      await Meteor.promise(
        "plots.update",
        { _id: id },
        {
          name: updatedPlot.name,
          width: updatedPlot.width,
          height: updatedPlot.height,
          shapes: annotations,
        }
      );

      toast.success(
        <FormattedMessage
          id={"GardenEditor.successUpdate"}
          defaultMessage={"The plot has been updated"}
        />
      );

      navigate(`/garden/${id}`);
    } catch (e) {
      toast.error(e.reason);
    }
  };

  const generalActions = (
    <div>
      <Button color="success" startIcon={<SaveIcon />} onClick={handleSave}>
        Sauvegarder
      </Button>
      <Button
        color={"error"}
        startIcon={<CloseIcon />}
        onClick={() => navigate("/settings")}
      >
        Annuler
      </Button>
    </div>
  );

  if (plot.isLoading) return <CircularProgress />;

  const panel = (
    <div>
      {!selectedId && (
        <PlotEditor
          plot={updatedPlot}
          onChange={(key, value) =>
            setUpdatedPlot((oldValue) => ({ ...oldValue, [key]: value }))
          }
          shapes={annotations}
          onAdd={handleAdd}
          onSelect={(id) => selectShape(id)}
        />
      )}
      {!!selectedId && (
        <SpaceEditor
          selectedShape={selectedShape}
          onChange={handleChangeAttr}
          onDelete={handleDelete}
          onExit={() => selectShape(null)}
        />
      )}
    </div>
  );

  return (
    <GardenLayout
      plotId={plot._id}
      generalActions={generalActions}
      panel={panel}
      onSelectShape={onSelectShape}
      onMoveShape={onMoveShape}
      shapes={annotations}
      selectedShape={selectedShape}
      mode={"edit"}
    />
  );
};

export default GardenEditor;
