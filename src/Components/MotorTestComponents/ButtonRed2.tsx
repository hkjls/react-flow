import {Node, NodeProps, Position} from "@xyflow/react"
import { ElectricalComponentData, ElectricalComponentType } from "../../types"
import { Box, Text} from "@chakra-ui/react"
import { getUnit } from "../../utils"
import Terminal from "../Terminal"
import { useTest } from "../../Context/exo_type"

import {default as ButtonRed2Icon} from "../../icons/MotorTestComponents/ButtonRed2"

type ButtonRed2_Node = Node<ElectricalComponentData, "string">

const ButtonRed2=({
    type,
    data:{value}
}:NodeProps<ButtonRed2_Node>)=>{
    const unit = getUnit(type as ElectricalComponentType)
    const x: number = 17
    const {test_choice} = useTest()

    return(
        <Box style={{
            transform:"rotateZ(90deg)"
        }}>
            <ButtonRed2Icon height={90} />

            <Terminal
                style={{ left: 7, top: 25 + x}}
                type="target"
                position={Position.Top}
                id="up-btn-red2"
            />
            <Terminal
                style={{ left: 7, top: 50 + x}}
                type="source"
                position={Position.Top}
                id="down-btn-red2"
            />
            {
               test_choice.choice == "free" ? <>
                    <Terminal
                        style={{ left: 7, top: 25 + x}}
                        type="source"
                        position={Position.Top}
                        id="up-btn-red2"
                    />
                    <Terminal
                        style={{ left: 7, top: 50 + x}}
                        type="target"
                        position={Position.Top}
                        id="down-btn-red2"
                    />
                </> : ""
            }
        </Box>
    )}

export default ButtonRed2