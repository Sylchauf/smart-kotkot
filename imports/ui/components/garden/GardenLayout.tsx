import React, { useCallback, useEffect, useRef, useState } from "react";
import { Layer, Stage } from "react-konva";

import { Button, ButtonGroup, Card, CardContent } from "@mui/material";

import Rectangle from "./Rectangle";

const WIDTH_PANEL = 500;

type Props = {
  shapes: any;
  generalActions?: any;
  panel: any;
  onSelectShape: any;
  onMoveShape?: any;
  onMovePlant?: any;
  selectedShape: any;
  mode: "view" | "edit";
};

const GardenLayout: React.FC<Props> = ({
  shapes,
  plants = [],
  generalActions,
  panel,
  onSelectShape,
  onSelectPlan,
  onMoveShape,
  onMovePlant,
  selectedShape,
  selectedPlant,
  mode,
}) => {
  const [size, setSize] = useState<Record<string, number>>();

  const containerRef = useRef();
  const stageRef = useRef();

  useEffect(() => {
    window.addEventListener("resize", checkSize);

    checkSize();

    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, [containerRef.current]);

  const checkSize = useCallback(() => {
    const width = document.getElementById("konva-container").offsetWidth;
    const height = document.getElementById("konva-container").offsetHeight;

    setSize({ width, height });
  }, []);

  const handleMouseDown = (event) => {
    checkDeselect(event);
  };

  const checkDeselect = (e) => {
    // deselect when clicked on empty area
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      onSelectShape(null);
      onSelectPlan(null);
    }
  };

  const handleZoom = (value) => {
    const stage: any = stageRef.current;
    const oldScale = stage.scaleX();

    const center = {
      x: stage.width() / 2,
      y: stage.height() / 2,
    };

    const relatedTo = {
      x: (center.x - stage.x()) / oldScale,
      y: (center.y - stage.y()) / oldScale,
    };

    const newScale = oldScale + value;

    stage.scale({
      x: newScale,
      y: newScale,
    });

    const newPos = {
      x: center.x - relatedTo.x * newScale,
      y: center.y - relatedTo.y * newScale,
    };

    stage.position(newPos);
    stage.batchDraw();
  };

  const handleWheel = (e) => {
    e.evt.preventDefault();

    const scaleBy = 1.05;
    const stage = e.target.getStage();
    const oldScale = stage.scaleX();

    const mousePointTo = {
      x: stage.getPointerPosition().x / oldScale - stage.x() / oldScale,
      y: stage.getPointerPosition().y / oldScale - stage.y() / oldScale,
    };

    const newScale = e.evt.deltaY < 0 ? oldScale * scaleBy : oldScale / scaleBy;

    stage.scale({
      x: newScale,
      y: newScale,
    });

    stage.position({
      x: (stage.getPointerPosition().x / newScale - mousePointTo.x) * newScale,
      y: (stage.getPointerPosition().y / newScale - mousePointTo.y) * newScale,
    });
  };

  return (
    <div style={{ position: "relative" }}>
      {generalActions && (
        <Card style={{ marginBottom: 16 }}>
          <CardContent style={{ padding: 8 }}>{generalActions}</CardContent>
        </Card>
      )}

      <div style={{ display: "flex" }}>
        <div style={{ position: "absolute", right: 0, zIndex: 20 }}>
          <ButtonGroup
            variant="contained"
            orientation={"vertical"}
            color={"secondary"}
          >
            <Button onClick={() => handleZoom(0.25)}>+</Button>
            <Button onClick={() => handleZoom(-0.25)}>-</Button>
          </ButtonGroup>
        </div>
        <Card
          style={{
            marginRight: 16,
            minWidth: WIDTH_PANEL,
            maxWidth: WIDTH_PANEL,
          }}
        >
          <CardContent>{panel}</CardContent>
        </Card>
        <div
          id="konva-container"
          style={{
            width: `calc(100% - ${WIDTH_PANEL}px - 16px)`,
            height: "800px",
            background: "#a1c181",
            zIndex: 10,
          }}
          ref={containerRef}
        >
          <Stage
            ref={stageRef}
            onMouseDown={handleMouseDown}
            onDragMove={(e) => {
              console.log(e);
            }}
            onWheel={handleWheel}
            width={size?.width || 0}
            height={size?.height || 0}
          >
            <Layer>
              {shapes.map((rect) => {
                return (
                  <Rectangle
                    key={rect.id}
                    shapeProps={rect}
                    isSelected={rect.id === selectedShape?.id}
                    selectedPlant={selectedPlant}
                    onSelect={onSelectShape}
                    onSelectPlan={onSelectPlan}
                    onMove={onMoveShape}
                    onMovePlant={onMovePlant}
                    mode={mode}
                    plants={plants.filter(({ shapeId }) => shapeId === rect.id)}
                  />
                );
              })}
            </Layer>
          </Stage>
        </div>
      </div>
    </div>
  );
};

export default GardenLayout;
