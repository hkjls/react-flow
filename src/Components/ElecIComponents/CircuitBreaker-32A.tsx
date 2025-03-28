import {Node, NodeProps, Position} from "@xyflow/react"
import { ElectricalComponentData, ElectricalComponentType } from "../../types"
import { Box, Text} from "@chakra-ui/react"
import { getUnit } from "../../utils"
import Terminal from "../Terminal"

import {default as CircuitBreakerIcon} from "../../icons/ElecIcons/CircuitBreaker-32A"

type CircuitBreaker_Node = Node<ElectricalComponentData, "string">

const CircuitBreaker =({
    type,
    data: {value}
}: NodeProps<CircuitBreaker_Node>)=>{
    const unit = getUnit(type as ElectricalComponentType)
    const top_x : number = 33
    const top_y : number = 10

    const bottom_x : number = 33
    const bottom_y : number = 0
    return(
        <Box>
            <CircuitBreakerIcon height={60} />
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
                style={{ left: 13 + 0*top_x, top: 19 - top_y }}
                type="target"
                position={Position.Top}
                id="left-up-cbr"
            />

            <Terminal
                style={{ left: 14 + top_x, top: 19 - top_y }}
                type="target"
                position={Position.Top}
                id="right-up-cbr"
            />

            <Terminal
                style={{ left: 13 + 0*bottom_x, bottom: 8 + 0*bottom_y }}
                type="source"
                position={Position.Bottom}
                id="left-bottom-cbr"
            />
            <Terminal
                style={{ left: 14 + bottom_x, bottom: 8 + 0*bottom_y }}
                type="source"
                position={Position.Bottom}
                id="right-bottom-cbr"
            />
        </Box>
    )
}

export default CircuitBreaker