import { 
  BaseEdge, 
  EdgeProps, 
  getSmoothStepPath,
  addEdge,
  Connection,
  Edge
} from "@xyflow/react";
import React from "react";

export default function Wire({
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  markerEnd,
  source,
  target,
}: EdgeProps) {
  const [d] = getSmoothStepPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
  });

  const isConnected = !!(source && target)
  // console.log(`wire connected : ${isConnected}`)

  return (
    <>
      <BaseEdge
        style={{
          stroke: "green",
        }}
        markerEnd={markerEnd}
        path={d}
      />
      {/* <circle
        r="4"
        fill="green"
        style={{
          filter: "drop-shadow(0px 0px 2px rgb(0, 255, 55))",
        }}
      >
        <animateMotion dur="2s" repeatCount={"indefinite"} path={d} />
      </circle>
      <circle fill="transparent" stroke="green" strokeWidth={2}>
        <animate
          attributeName="r"
          values="2;6"
          dur="2s"
          repeatCount={"indefinite"}
        />
        <animate
          attributeName="opacity"
          values="1;0"
          dur="2s"
          repeatCount={"indefinite"}
        />
        <animateMotion dur="2s" repeatCount={"indefinite"} path={d} />
      </circle> */}
    </>
  );
}
