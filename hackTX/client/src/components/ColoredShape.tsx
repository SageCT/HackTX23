import React from "react";

interface ShapeProps {
  type: string;
  color: string;
  position: string;
}

function ColoredShape(props: ShapeProps) {
  if (props.type === "circle") {
    return (
      <div
        className={
          "w-[67px] h-[67px] border-4 border-solid border-black rounded-full " +
          props.color +
          " " +
          props.position
        }
      ></div>
    );
  } else if (props.type === "square") {
    return (
      <div
        className={
          "w-[67px] h-[67px] border-4 border-solid border-black " +
          props.color +
          " " +
          props.position
        }
      ></div>
    );
  }
}

export default ColoredShape;
