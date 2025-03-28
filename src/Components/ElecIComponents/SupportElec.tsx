import {Node, NodeProps, Position} from "@xyflow/react"
import { ElectricalComponentData, ElectricalComponentType } from "../../types"
import { Box, Text} from "@chakra-ui/react"
import { getUnit } from "../../utils"
import Terminal from "../Terminal"

import {default as SupportElecIcon} from "../../icons/ElecIcons/SupportElec"

type SupportElec_Node = Node<ElectricalComponentData, "string">

const SupportElec=({
    type,
    data: {value}
}:NodeProps<SupportElec_Node>)=>{
    const unit = getUnit(type as ElectricalComponentType)
    const top_x : number = 10

    return(
        <Box>
            <SupportElecIcon height={65} />
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
                style={{ left: 5 +  + 0* top_x, top: 8}}
                type="target"
                position={Position.Top}
                id="left-1-sprt"
            />
            <Terminal
                style={{ left: 5 + top_x, top: 8}}
                type="target"
                position={Position.Top}
                id="left-center-1-sprt"
            />
            <Terminal
                style={{ left: 5  + 2* top_x, top: 8}}
                type="target"
                position={Position.Top}
                id="right-center-1-sprt"
            />
            <Terminal
                style={{ left: 5  + 3* top_x, top: 8 }}
                type="target"
                position={Position.Top}
                id="right-1-sprt"
            />

            <Terminal
                style={{ left: 45 +  + 0* top_x, top: 8}}
                type="source"
                position={Position.Top}
                id="left-2-sprt"
            />
            <Terminal
                style={{ left: 45 + top_x, top: 8}}
                type="source"
                position={Position.Top}
                id="left-center-2-sprt"
            />
            <Terminal
                style={{ left: 45  + 2* top_x, top: 8}}
                type="source"
                position={Position.Top}
                id="right-center-2-sprt"
            />
            <Terminal
                style={{ left: 45  + 3* top_x, top: 8 }}
                type="source"
                position={Position.Top}
                id="right-2-sprt"
            />
        </Box>
    )
}

export default SupportElec