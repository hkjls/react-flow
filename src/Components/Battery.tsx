import { Handle, Node, NodeProps, Position } from "@xyflow/react";
import React from "react";
import { ElectricalComponentData, ElectricalComponentType } from "../types";
import { Box, Text } from "@chakra-ui/react";
import { default as BatteryIcon } from "../icons/Battery";
import { getUnit } from "../utils";
import Terminal from "./Terminal";
import { useDarkMode } from "../store";

type BatteryNode = Node<ElectricalComponentData, "string">;

export default function Battery({
  type,
  data: { value },
}: NodeProps<BatteryNode>) {
  const unit = getUnit(type as ElectricalComponentType);

  return (
    <Box>
      <BatteryIcon height={60} />
      <Text
        fontSize="xx-small"
        position={"absolute"}
        top={"22px"}
        left="14px"
        color="white"
        border="solid black"
      >
        {value} {unit}
      </Text>
      <Terminal
        style={{ left: 72, top: 2 }}
        type="target"
        position={Position.Top}
        id="right"
      />
      <Terminal
        style={{ left: 9, top: 2 }}
        type="source"
        position={Position.Top}
        id="left"
      />
      <Terminal
        style={{ left: 40, top: 50}}
        type="target"
        position={Position.Bottom}
        id="center"
      />
    </Box>
  );
}
