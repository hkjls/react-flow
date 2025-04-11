import { 
  BaseEdge, 
  EdgeProps, 
  getSmoothStepPath,
  addEdge,
  Connection,
  Edge,
  useReactFlow
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
  const {deleteElements} = useReactFlow();
  
  const handleClick = () => {
    deleteElements({ edges: [{ id: `${source}-${target}` }] });
  };
  
  return (
    <>
      <BaseEdge
        style={{
          stroke: "green",
          zIndex: 5000,
          cursor: "pointer"
        }}
        markerEnd={markerEnd}
        path={d}
        interactionWidth={10}
        
      />
    </>
  );
}
