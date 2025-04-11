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
        <Box>
            <ButtonRed3Icon height={90} />
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
                style={{ left: 15, top: 25+ x}}
                type="target"
                position={Position.Top}
                id="left-1-sprt"
            />
            <Terminal
                style={{ left: 15, top: 50 + x}}
                type="target"
                position={Position.Top}
                id="left-center-1-sprt"
            />
        </Box>
    )}

export default ButtonRed3