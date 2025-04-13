import {Node, NodeProps, Position} from "@xyflow/react"
import { ElectricalComponentData, ElectricalComponentType } from "../../types"
import { Box, Text} from "@chakra-ui/react"
import { getUnit } from "../../utils"
import Terminal from "../Terminal"

import {default as SupportElecIcon} from "../../icons/ElecIcons/SocketElec2"

type SocketElec_Node = Node<ElectricalComponentData, "string">

const SocketElecII=({
    type,
    data: {value}
}:NodeProps<SocketElec_Node>)=>{
    const unit =getUnit(type as ElectricalComponentType)
    const top_x : number = 10

    return(
        <Box>
            <SupportElecIcon height={130} width={350} />
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
                style={{ left: 34 + 0* top_x, top: 27}}
                type="target"
                position={Position.Top}
                id="left-1-sckt"
            />
            <Terminal
                style={{ left: 62 + top_x, top: 27}}
                type="target"
                position={Position.Top}
                id="left-2-sckt"
            />
            <Terminal
                style={{ left: 88 + 2*top_x, top: 27}}
                type="target"
                position={Position.Top}
                id="left-3-sckt"
            />
            <Terminal
                style={{ left: 117 + 3*top_x, top: 27}}
                type="target"
                position={Position.Top}
                id="left-4-sckt"
            />
            <Terminal
                style={{ left: 144 + 4*top_x, top: 27}}
                type="target"
                position={Position.Top}
                id="left-5-sckt"
            />
            <Terminal
                style={{ left: 172 + 5*top_x, top: 27}}
                type="target"
                position={Position.Top}
                id="left-6-sckt"
            />
            <Terminal
                style={{ left: 227 + 7*top_x, top: 27}}
                type="target"
                position={Position.Top}
                id="right-1-sckt"
            />
            <Terminal
                style={{ left: 254 + 8*top_x, top: 27}}
                type="target"
                position={Position.Top}
                id="right-2-sckt"
            />
            <Terminal
            style={{ left: 282 + 9*top_x, top: 27}}
            type="target"
            position={Position.Top}
            id="right-3-sckt"
        />
        </Box>
    )
}

export default SocketElecII