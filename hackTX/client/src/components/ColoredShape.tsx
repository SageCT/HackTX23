import React from "react";

interface ShapeProps {
  type: string;
  color: string;
}

function ColoredShape(props: ShapeProps) {
  if (props.type === "circle") {
    return (
      <div className={"w-[67px] h-[67px] rounded-full bg-" + props.color}></div>
    );
  } else if (props.type === "square") {
    return (
      <div className={"w-[67px] h-[67px] rounded-lg bg-" + props.color}></div>
    );
  }
}

export default ColoredShape;
