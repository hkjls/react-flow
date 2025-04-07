import { Node, useReactFlow } from "@xyflow/react";
import React, { useState } from "react";
import { ElectricalComponentData, ElectricalComponentType } from "../types";
import {
  Box,
  Heading,
  Input,
  InputGroup,
  InputRightAddon,
} from "@chakra-ui/react";
import { getUnit } from "../utils";

export default function ComponentDetail({
  node,
}: {
  node: Node<ElectricalComponentData>;
}) {
  const nodeType = node?.data?.type || node?.type;
  const [value, setValue] = useState(`${node?.data?.value || 0}`);
  const { updateNodeData } = useReactFlow();
  const unit = getUnit(nodeType as ElectricalComponentType);

  return (
    <Box id="ComponentDetail">
      <div id="componentName" className="component">
        <h3>Nom du Composant : </h3>
        <div>{nodeType?.toUpperCase()}</div>
      </div>
      <div id="componentEdges" className="component">
        <h3>Nombre de Noeud :</h3>
        <ul>
          <li className="edge">Entrée : {node.data?.nEntry}</li>
          <li className="edge">Sortie : {node.data?.nOutput}</li>
        </ul>
      </div>
      <div id="componentDescription" className="component">
        <h3>Description :</h3>
        <textarea cols={60}>{node.data?.Desc}</textarea>
      </div>
      {/* {node?.data?.value && (
        <InputGroup size="sm" mt={2}>
          <Input
            value={value}
            onChange={(e) => {
              const newValue = e.target.value ? parseFloat(e.target.value) : 0;
              setValue(newValue.toString());
              updateNodeData(node.id, { value: newValue });
            }}
          />
          <InputRightAddon>{unit}</InputRightAddon>
        </InputGroup>
      )} */}
    </Box>
  );
}
