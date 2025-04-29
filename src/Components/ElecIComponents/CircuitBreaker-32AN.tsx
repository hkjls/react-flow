import {Node, NodeProps, Position} from "@xyflow/react"
import { ElectricalComponentData, ElectricalComponentType } from "../../types"
import { Box, Text} from "@chakra-ui/react"
import { getUnit } from "../../utils"
import Terminal from "../Terminal"

import {default as CircuitBreakerNIcon} from "../../icons/ElecIcons/CircuitBreaker-32AN"

type CircuitBreakerN_Node = Node<ElectricalComponentData, "string">

const CircuitBreakerN = ({
    type,
    data: {value}
}: NodeProps<CircuitBreakerN_Node>)=>{
    const top_x: number = 0
    const top_y: number = 0

    const bottom_x : number = 0
    const bottom_y : number = 0

    return(
        <Box>
            <CircuitBreakerNIcon height={135} />
            
            <Terminal
                style={{ left: 59 + 0*top_x, top: 27 - top_y }}
                type={true ? "source" : "target"}
                position={Position.Top}
                id="left-up-cbrn"
            />
            
            <Terminal
                style={{ left: 88 + top_x, top: 26 - top_y }}
                type="target"
                position={Position.Top}
                id="right-up-cbrn"
            />
            
            <Terminal
                style={{ left: 60 + 0*bottom_x, bottom: 16 + 0*bottom_y }}
                type="target"
                position={Position.Bottom}
                id="left-bottom-cbrn"
            />
            <Terminal
                style={{ left: 88 + bottom_x, bottom: 18 + 0*bottom_y }}
                type="target"
                position={Position.Bottom}
                id="right-bottom-cbrn"
            />
        </Box>
    )
}

export default CircuitBreakerN