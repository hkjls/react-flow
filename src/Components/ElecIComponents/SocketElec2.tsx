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
            
        </Box>
    )
}

export default SocketElecII