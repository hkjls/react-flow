import {Node, NodeProps, Position} from "@xyflow/react"
import { ElectricalComponentData, ElectricalComponentType } from "../../types"
import { Box, Text} from "@chakra-ui/react"
import { getUnit } from "../../utils"
import Terminal from "../Terminal"
import { useTest } from "../../Context/exo_type"

import {default as ButtonRed1Icon} from "../../icons/ElecIcons/ButtonRed1"

type ButtonRed1_Node = Node<ElectricalComponentData, "string">

const ButtonRed1=({
    type,
    data:{value}
}:NodeProps<ButtonRed1_Node>)=>{
    const unit = getUnit(type as ElectricalComponentType)
    const x : number = 17
    const {test_choice} = useTest()
    return(
        <Box style={{
            transform:"rotateZ(90deg)"
        }}>
            <ButtonRed1Icon height={90} />

            <Terminal
                style={{ left: 5, top: 25 + x}}
                type="target"
                position={Position.Top}
                id="up-red1"
            />
            <Terminal
                style={{ left: 5, top: 50 + x}}
                type="target"
                position={Position.Top}
                id="down-red1"
            />
            
            {
            test_choice.choice == "free" ? 
                <>
                    <Terminal
                        style={{ left: 5, top: 25 + x}}
                        type="source"
                        position={Position.Top}
                        id="up-red1"
                    />
                    <Terminal
                        style={{ left: 5, top: 50 + x}}
                        type="source"
                        position={Position.Top}
                        id="down-red1"
                    />
                </>
            : ""
            }
        </Box>
    )}

export default ButtonRed1