import {Node, NodeProps, Position} from "@xyflow/react"
import { ElectricalComponentData, ElectricalComponentType } from "../../types"
import { Box, Text} from "@chakra-ui/react"
import { getUnit } from "../../utils"
import Terminal from "../Terminal"
import { useTest } from "../../Context/exo_type"

import {default as ButtonGreenIcon} from "../../icons/MotorTestComponents/ButtonGreen"

type ButtonGreen_Node = Node<ElectricalComponentData, "string">

const ButtonGreen=({
    type,
    data:{value}
}:NodeProps<ButtonGreen_Node>)=>{
    const unit = getUnit(type as ElectricalComponentType)
    const x:number = 4
    const {test_choice} = useTest()

    return(
        <Box>
            <ButtonGreenIcon height={90} />
            <Terminal
                style={{ left: 18, top: 25 + x}}
                type="target"
                position={Position.Top}
                id="up-btn-green"
            />
            <Terminal
                style={{ left: 18, top: 50 + x}}
                type="target"
                position={Position.Top}
                id="down-btn-green"
            />
            <Terminal
                style={{ left: 18, top: 25 + x}}
                type="source"
                position={Position.Top}
                id="up-btn-green"
            />
            <Terminal
                style={{ left: 18, top: 50 + x}}
                type="source"
                position={Position.Top}
                id="down-btn-green"
            />
        </Box>
    )}

export default ButtonGreen