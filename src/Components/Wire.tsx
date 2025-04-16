import { 
  BaseEdge, 
  EdgeProps, 
  getSmoothStepPath,
  getStraightPath,
  getBezierPath,
  addEdge,
  Connection,
  Edge,
  useReactFlow,
  Position
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
  style
}: EdgeProps) {
  const [d] = getSmoothStepPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
    offset:27,
    borderRadius: 20
  });
  console.log(getSmoothStepPath)
  const isConnected = !!(source && target)
  // console.log(`wire connected : ${isConnected}`)
  const {deleteElements} = useReactFlow();
  
  const handleClick = () => {
    deleteElements({ edges: [{ id: `${source}-${target}` }] });
  };

  
  return (
    <>
      <BaseEdge
        style={{...style, zIndex: 3000, position:"absolute"}}
        markerEnd={markerEnd}
        path={d}
        interactionWidth={10}
        
      />
    </>
  );
}
