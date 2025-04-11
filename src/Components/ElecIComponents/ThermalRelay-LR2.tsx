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
            <ThermalRelayIcon height={180} />
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
                style={{ left: 94, top: 36 }}
                type="source"
                position={Position.Top}
                id="left-thr"
            />
            <Terminal
                style={{ left: 123, top: 36 }}
                type="source"
                position={Position.Top}
                id="center-thr"
            />
            <Terminal
                style={{ left: 154, top: 36 }}
                type="source"
                position={Position.Top}
                id="right-thr"
            />
            <Terminal
                style={{ left: 99, bottom: 57 }}
                type="target"
                position={Position.Bottom}
                id="right-thr"
            />
            <Terminal
                style={{ left: 105, bottom: 35 }}
                type="target"
                position={Position.Bottom}
                id="right-up-thr"
            />
            <Terminal
                style={{ left: 125, bottom: 57 }}
                type="target"
                position={Position.Bottom}
                id="right-center-thr"
            />
            <Terminal
                style={{ left: 135, bottom: 35 }}
                type="target"
                position={Position.Bottom}
                id="center-up-thr"
            />
            <Terminal
                style={{ left: 150, bottom: 57 }}
                type="target"
                position={Position.Bottom}
                id="left-center-thr"
            />
            <Terminal
                style={{ left: 165, bottom: 35 }}
                type="target"
                position={Position.Bottom}
                id="left-up-thr"
            />
            <Terminal
                style={{ left: 175, bottom: 57 }}
                type="target"
                position={Position.Bottom}
                id="left-thr"
            />
        </Box>
    )
}

export default ThermalRelayR2