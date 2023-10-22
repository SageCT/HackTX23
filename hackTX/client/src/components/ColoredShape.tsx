import React from "react";

interface ShapeProps {
  type: string;
  color: string;
}

function ColoredShape(props: ShapeProps) {
  if (props.type === "circle") {
    return (
      <div
        className={
          "w-[67px] h-[67px] border-4 border-solid border-black rounded-full bg-shape" +
          props.color
        }
      ></div>
    );
  } else if (props.type === "square") {
    return (
      <div
        className={
          "w-[67px] h-[67px] border-4 border-solid border-black rounded-lg bg-black" +
          props.color
        }
      ></div>
    );
  }
}

export default ColoredShape;
