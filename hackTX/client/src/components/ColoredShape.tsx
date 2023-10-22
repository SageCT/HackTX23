import React from "react";

interface ShapeProps {
  type: string;
  color: string;
  optional?: string;
}

function ColoredShape(props: ShapeProps) {
  if (props.type === "circle") {
    return (
      <div
        className={
          "w-[67px] h-[67px] border-4 border-solid border-black rounded-full bg-shape" +
          props.color +
          " " +
          props.optional
        }
      ></div>
    );
  } else if (props.type === "square") {
    return (
      <div
        className={
          "w-[67px] h-[67px] border-4 border-solid border-black rounded-lg bg-black" +
          props.color +
          " " +
          props.optional
        }
      ></div>
    );
  }
}

export default ColoredShape;
