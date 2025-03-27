import {Node, NodeProps, Position} from "@xyflow/react"
import { ElectricalComponentData, ElectricalComponentType } from "../../types"
import { Box, Text} from "@chakra-ui/react"
import { getUnit } from "../../utils"
import Terminal from "../Terminal"

import {default as ThermalRelayIcon} from "../../icons/ElecIcons/ThermalRelay-LR2"

type ThermalRelayLR2_Node = Node<ElectricalComponentData, "string">;

const ThermalRelayR2 = ({
    type,
    data: {value}
}: NodeProps<ThermalRelayLR2_Node>) =>{
    const unit = getUnit(type as ElectricalComponentType)

    return (
        <Box>
            <ThermalRelayIcon height={60} />
            <Text
                fontSize="xx-small"
                position={"absolute"}
                bottom={"16px"}
                right="0px"
                color="black"
                background={"white"}
                width={15}
                textAlign={"center"}
                border="none"
            >
                {value} {unit}
            </Text>

            <Terminal
                style={{ left: 10, top: 7 }}
                type="source"
                position={Position.Top}
                id="left"
            />
            <Terminal
                style={{ left: 30, top: 7 }}
                type="source"
                position={Position.Top}
                id="center"
            />
            <Terminal
                style={{ left: 50, top: 7 }}
                type="source"
                position={Position.Top}
                id="right"
            />
            <Terminal
                style={{ left: 6, bottom: 6 }}
                type="target"
                position={Position.Bottom}
                id="right"
            />
            <Terminal
                style={{ left: 14, bottom: 12 }}
                type="target"
                position={Position.Bottom}
                id="right-up"
            />
            <Terminal
                style={{ left: 22, bottom: 6 }}
                type="target"
                position={Position.Bottom}
                id="right-center"
            />
            <Terminal
                style={{ left: 30, bottom: 12 }}
                type="target"
                position={Position.Bottom}
                id="center-up"
            />
            <Terminal
                style={{ left: 38, bottom: 6 }}
                type="target"
                position={Position.Bottom}
                id="left-center"
            />
            <Terminal
                style={{ left: 46, bottom: 12 }}
                type="target"
                position={Position.Bottom}
                id="left-up"
            />
            <Terminal
                style={{ left: 52, bottom: 6 }}
                type="target"
                position={Position.Bottom}
                id="left"
            />
        </Box>
    )
}

export default ThermalRelayR2