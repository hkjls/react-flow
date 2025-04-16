import {Node, NodeProps, Position} from "@xyflow/react"
import { ElectricalComponentData, ElectricalComponentType } from "../../types"
import { Box, Text} from "@chakra-ui/react"
import { getUnit } from "../../utils"
import Terminal from "../Terminal"

import {default as ButtonRed3Icon} from "../../icons/ElecIcons/ButtonRed3"

type ButtonRed3_Node = Node<ElectricalComponentData, "string">

const ButtonRed3=({
    type,
    data:{value}
}:NodeProps<ButtonRed3_Node>)=>{
    const unit = getUnit(type as ElectricalComponentType)
    const x : number = 20

    return(
        <Box style={{
            transform:"rotateZ(90deg)"
        }}>
            <ButtonRed3Icon height={90} />

            <Terminal
                style={{ left: 15, top: 25+ x}}
                type="target"
                position={Position.Top}
                id="up-red3"
            />
            <Terminal
                style={{ left: 15, top: 50 + x}}
                type="target"
                position={Position.Top}
                id="down-red3"
            />
        </Box>
    )}

export default ButtonRed3