import {
  Handle,
  Node,
  NodeProps,
  Position,
  ReactFlowState,
  getOutgoers,
  useNodesData,
  useReactFlow,
  useStore,
} from "@xyflow/react";
import React, { useEffect, useState } from "react";
import { ElectricalComponentData, ElectricalComponentType } from "../types";
import { Box, Text } from "@chakra-ui/react";
import { default as BulbIcon } from "../icons/Bulb";
import { getUnit } from "../utils";
import Terminal from "./Terminal";
import { useDarkMode } from "../store";

type BulbNode = Node<ElectricalComponentData, "string">;

const storeSelector = (state: ReactFlowState) => ({
  edgesLength: state.edges.length || 0,
  nodesLength: state.nodes.length || 0,
});

export default function Bulb({
  type,
  data: { value },
  id,
}: NodeProps<BulbNode>) {
  const unit = getUnit(type as ElectricalComponentType);

  const [isOn, setIsOn] = useState(false);
  const [nodeIds, setNodeIds] = useState<string[]>([]);

  const componentsData = useNodesData(nodeIds);

  const { edgesLength, nodesLength } = useStore(storeSelector);

  const { isDark } = useDarkMode();

  let color = "black";
  if (isDark) color = "white";

  const { getNodes, getEdges } = useReactFlow();

  // const isCircuitComplete = (nodeId: string, targetId: string): boolean => {
  //   const nodes = getNodes();
  //   const edges = getEdges();
  //   const node = nodes.find((node) => node.id === nodeId);
  //   if (!node) return false;
  //   const outgoer = getOutgoers(node, nodes, edges)?.[0];

  //   if (outgoer?.id === targetId) return true;
  //   return isCircuitComplete(outgoer?.id, targetId);
  // };
  const isCircuitComplete = (
    nodeId: string,
    targetId: string,
    visited: Set<string> = new Set() // 🔹 Stocke les nœuds déjà visités
  ): boolean => {
    if (visited.has(nodeId)) return false; // 🔹 Empêche les boucles infinies
    visited.add(nodeId); // 🔹 Marque le nœud comme visité
  
    const nodes = getNodes();
    const edges = getEdges();
    const node = nodes.find((node) => node.id === nodeId);
    if (!node) return false;
  
    const outgoers = getOutgoers(node, nodes, edges);
  
    for (const outgoer of outgoers) {
      if (outgoer.id === targetId) return true; // 🔹 Circuit complet trouvé !
  
      if (isCircuitComplete(outgoer.id, targetId, visited)) {
        return true; // 🔹 Continue la recherche récursive
      }
    }
  
    return false; // 🔹 Si aucun chemin ne mène au `targetId`, le circuit est incomplet
  };
  

  // const isBatteryPresent = (nodeId: string, targetId: string): boolean => {
  //   const nodes = getNodes();
  //   const edges = getEdges();
  //   const node = nodes.find((node) => node.id === nodeId);
  //   if (!node) return false;
  //   const outgoer = getOutgoers(node, nodes, edges)?.[0];

  //   if (outgoer?.id === targetId) return false;
  //   if (outgoer?.type === ElectricalComponentType.Battery) return true;

  //   return isBatteryPresent(outgoer?.id, targetId);
  // };
  const isBatteryPresent = (
    nodeId: string,
    targetId: string,
    visited: Set<string> = new Set() // 🔹 Empêche de revisiter un nœud
  ): boolean => {
    if (visited.has(nodeId)) return false; // 🔹 Si déjà visité, stoppe la récursion
    visited.add(nodeId); // 🔹 Marque le nœud comme visité
  
    const nodes = getNodes();
    const edges = getEdges();
    const node = nodes.find((node) => node.id === nodeId);
    if (!node) return false;
  
    const outgoers = getOutgoers(node, nodes, edges);
  
    for (const outgoer of outgoers) {
      if (outgoer.id === targetId) return false; // 🔹 Arrête si on atteint `targetId`
      if (outgoer.type === ElectricalComponentType.Battery) return true; // 🔹 Batterie trouvée ✅
  
      if (isBatteryPresent(outgoer.id, targetId, visited)) {
        return true; // 🔹 Continue la recherche récursive
      }
    }
  
    return false; // 🔹 Si aucune batterie trouvée sur ce chemin
  };
  

  // const getCircuitResistors = (
  //   nodeId: string,
  //   targetId: string,
  //   components: Node[] = []
  // ): Node[] => {
  //   const nodes = getNodes();
  //   const edges = getEdges();
  //   const node = nodes.find((node) => node.id === nodeId);
  //   if (!node) return components;
  //   const outgoer = getOutgoers(node, nodes, edges)?.[0];

  //   if (outgoer?.id === targetId) return components;
  //   if (outgoer?.data?.type === ElectricalComponentType.Resistor)
  //     components.push(outgoer);

  //   return getCircuitResistors(outgoer?.id, targetId, components);
  // };
  const getCircuitResistors = (
    nodeId: string,
    targetId: string,
    components: Node[] = [],
    visited: Set<string> = new Set() // 🔹 Stocke les nœuds visités
  ): Node[] => {
    if (visited.has(nodeId)) return components; // 🔹 Évite la boucle infinie
    visited.add(nodeId); // 🔹 Marque le nœud comme visité
  
    const nodes = getNodes();
    const edges = getEdges();
    const node = nodes.find((node) => node.id === nodeId);
    if (!node) return components;
  
    const outgoers = getOutgoers(node, nodes, edges);
  
    for (const outgoer of outgoers) {
      if (outgoer?.id === targetId) return components; // 🔹 Condition d'arrêt
  
      if (outgoer?.data?.type === ElectricalComponentType.Resistor) {
        components.push(outgoer);
      }
  
      getCircuitResistors(outgoer?.id, targetId, components, visited); // 🔹 Appel récursif
    }
  
    return components;
  };
  

  useEffect(() => {
    const resistors = getCircuitResistors(id, id) || [];
    setNodeIds(resistors.map((resistor) => resistor.id));
  }, [nodesLength, edgesLength]);

  useEffect(() => {
    const circuitComplete = isCircuitComplete(id, id);
    const batteryPresent = isBatteryPresent(id, id);
    const totalValue = componentsData?.reduce((acc, resistor) => {
      return acc + ((resistor?.data?.value || 0) as number);
    }, 0);

    setIsOn(circuitComplete && batteryPresent && totalValue < 12);
  }, [id, edgesLength, nodesLength, componentsData]);

  return (
    <Box>
      <BulbIcon isOn={isOn} height={64} color={color} />
      <Text fontSize="xx-small" position={"absolute"} color={color}>
        {value} {unit}
      </Text>
      <Terminal
        style={{ top: 50, right: 22 }}
        type="target"
        position={Position.Right}
        id="right"
      />
      <Terminal
        style={{ top: 50, left: 22 }}
        type="source"
        position={Position.Left}
        id="left"
      />
    </Box>
  );
}
