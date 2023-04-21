import React, { useRef } from "react";
import { useIntl } from "react-intl";
import { Group, Rect, Text, Transformer, Image } from "react-konva";
import useImage from "use-image";
import COLORS from "../../../constants/colors";

const IMAGE_SIZE = 48;
const ShowImage = ({ url, containerSize }) => {
  const [image] = useImage(url);

  return (
    <Image
      x={(containerSize.width - IMAGE_SIZE) / 2}
      y={(containerSize.height - IMAGE_SIZE + 12) / 2}
      width={IMAGE_SIZE}
      height={IMAGE_SIZE}
      image={image}
    />
  );
};

const Rectangle = ({
  shapeProps,
  isSelected,
  onSelect,
  onSelectPlan,
  onMove,
  onMovePlant,
  mode,
  plants,
  selectedPlant,
}) => {
  const shapeRef = React.useRef();
  const plantsRef = useRef({});
  const trRef = React.useRef();

  const { locale } = useIntl();

  React.useEffect(() => {
    if (isSelected && mode === "edit") {
      // we need to attach transformer manually
      trRef.current.nodes([shapeRef.current]);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  return (
    <>
      <Group
        {...shapeProps}
        onDragEnd={(e) => {
          if (onMove)
            onMove({
              ...shapeProps,
              x: e.target.x(),
              y: e.target.y(),
            });
        }}
        onTransform={(e) => {
          // transformer is changing scale of the node
          // and NOT its width or height
          // but in the store we have only width and height
          // to match the data better we will reset scale on transform end
          const node = shapeRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();

          // we will reset it back
          node.scaleX(1);
          node.scaleY(1);

          onMove({
            ...shapeProps,
            x: node.x(),
            y: node.y(),
            // set minimal value
            width: Math.max(5, node.width() * scaleX),
            height: Math.max(node.height() * scaleY),
          });
        }}
        onClick={(e) => {
          if (e.target.parent.attrs.name !== "plant") onSelect(shapeProps.id);
        }}
        onTap={() => onSelect(shapeProps.id)}
        ref={shapeRef}
        draggable={mode === "edit"}
      >
        <Rect
          width={shapeProps.width}
          height={shapeProps.height}
          fill="#846c5b"
          stroke={"#ffffff"}
          strokeWidth={mode === "edit" || isSelected ? 2 : 0}
          cornerRadius={4}
        />

        {plants.map((p) => {
          const _isSelected = selectedPlant === p._id;
          return (
            <Group
              ref={(el) => (plantsRef.current[p._id] = el)}
              name={"plant"}
              x={p.x}
              y={p.y}
              onClick={() => onSelectPlan(p._id)}
              onDragEnd={(e) => {
                onMovePlant({
                  ...p,
                  x: e.target.x(),
                  y: e.target.y(),
                });
              }}
              onDragMove={() => {
                const absPosBox = shapeRef.current.getAbsolutePosition();

                const box2 = plantsRef.current[p._id].getClientRect();
                const absPosPlant =
                  plantsRef.current[p._id].getAbsolutePosition();

                const newAbsPos = { ...absPosPlant };

                if (absPosPlant.x < absPosBox.x) newAbsPos.x = absPosBox.x;
                if (absPosPlant.x + box2.width > absPosBox.x + shapeProps.width)
                  newAbsPos.x = absPosBox.x + shapeProps.width - box2.width;
                if (absPosPlant.y < absPosBox.y) newAbsPos.y = absPosBox.y;
                if (
                  absPosPlant.y + box2.height >
                  absPosBox.y + shapeProps.height
                )
                  newAbsPos.y = absPosBox.y + shapeProps.height - box2.height;

                plantsRef.current[p._id].setAbsolutePosition(newAbsPos);
              }}
              draggable={_isSelected}
            >
              <Rect
                width={p.width}
                height={p.height}
                fill="#e5e5e5"
                stroke={COLORS.primary}
                strokeWidth={_isSelected ? 2 : 0}
                cornerRadius={4}
              />
              <ShowImage
                containerSize={{ width: p.width, height: p.height }}
                url={p?.vegetable?.imageUrl}
              />
              <Text
                x={(p.width - p?.vegetable?.name[locale].length * 6) / 2}
                y={6}
                fontSize={12}
                fill={"#000000"}
                text={p?.vegetable?.name[locale]}
              />
            </Group>
          );
        })}

        {mode === "edit" && (
          <Text
            x={4}
            y={4}
            fontSize={12}
            fill={"#ffffff"}
            text={`${(shapeProps.width / 100).toFixed(2)}m x ${(
              shapeProps.height / 100
            ).toFixed(2)}m`}
          />
        )}
        <Text
          x={(shapeProps.width - shapeProps.name.length * 6) / 2}
          y={shapeProps.height / 2}
          fontSize={12}
          fill={"#ffffff"}
          text={shapeProps.name}
        />
      </Group>
      {isSelected && mode === "edit" && (
        <Transformer
          ref={trRef}
          boundBoxFunc={(oldBox, newBox) => {
            // limit resize
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </>
  );
};

export default Rectangle;
