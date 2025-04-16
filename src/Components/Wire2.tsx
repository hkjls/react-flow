import { 
    BaseEdge, 
    EdgeProps, 
    getSmoothStepPath,
    addEdge,
    Connection,
    Edge,
    useReactFlow,
    Node
  } from "@xyflow/react";


  function isCrossingNode(
    sourceX: number,
    sourceY: number,
    targetX: number,
    targetY: number,
    nodes: Node[]
  ): boolean {
    return nodes.some((node) => {
      const { x, y } = node.position;
      const width = node.width ?? 0;
      const height = node.height ?? 0;
  
      const left = x;
      const right = x + width;
      const top = y;
      const bottom = y + height;
  
      const minX = Math.min(sourceX, targetX);
      const maxX = Math.max(sourceX, targetX);
      const minY = Math.min(sourceY, targetY);
      const maxY = Math.max(sourceY, targetY);
  
      // Vérifie s’il y a une intersection
      return (
        left < maxX &&
        right > minX &&
        top < maxY &&
        bottom > minY
      );
    });
  }

export default function Wire({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
    markerEnd,
    style
  }: EdgeProps) {
    const { getNodes } = useReactFlow();
    const nodes = getNodes();
    const shouldAvoid = isCrossingNode(sourceX, sourceY, targetX, targetY, nodes);
  
    const d = shouldAvoid
      ? `M ${sourceX},${sourceY} 
         L ${sourceX + 50},${sourceY} 
         L ${sourceX + 50},${targetY} 
         L ${targetX},${targetY}`
      : getSmoothStepPath({
          sourceX,
          sourceY,
          targetX,
          targetY,
          sourcePosition,
          targetPosition,
        })[0];
  
    return (
      <BaseEdge
        path={d}
        markerEnd={markerEnd}
        style={style}
        interactionWidth={10}
      />
    );
  }
  