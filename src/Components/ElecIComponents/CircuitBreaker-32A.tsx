import {Node, NodeProps, Position} from "@xyflow/react"
import { ElectricalComponentData, ElectricalComponentType } from "../../types"
import { Box, Text} from "@chakra-ui/react"
import { getUnit } from "../../utils"
import Terminal from "../Terminal"
import { useTest } from "../../Context/exo_type"

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

    const {test_choice}=useTest()
    return(
        <Box>
            <CircuitBreakerIcon height={150} />

            <Terminal
                style={{ left: 67 + 0*top_x, top: 44 - top_y }}
                type="target"
                position={Position.Top}
                id="left-up-cbr"
            />

            <Terminal
                style={{ left: 62 + top_x, top: 43 - top_y }}
                type="target"
                position={Position.Top}
                id="right-up-cbr"
            />

            <Terminal
                style={{ left: 67 + 0*bottom_x, bottom: 24 + 0*bottom_y }}
                type="source"
                position={Position.Bottom}
                id="left-bottom-cbr"
            />
            <Terminal
                style={{ left: 62 + bottom_x, bottom: 25 + 0*bottom_y }}
                type="source"
                position={Position.Bottom}
                id="right-bottom-cbr"
            />
            {
                test_choice.choice == "free" ?
                <>
                    <Terminal
                        style={{ left: 67 + 0*top_x, top: 44 - top_y }}
                        type="source"
                        position={Position.Top}
                        id="left-up-cbr"
                    />

                    <Terminal
                        style={{ left: 62 + top_x, top: 43 - top_y }}
                        type="source"
                        position={Position.Top}
                        id="right-up-cbr"
                    />

                    <Terminal
                        style={{ left: 67 + 0*bottom_x, bottom: 24 + 0*bottom_y }}
                        type="target"
                        position={Position.Bottom}
                        id="left-bottom-cbr"
                    />
                    <Terminal
                        style={{ left: 62 + bottom_x, bottom: 25 + 0*bottom_y }}
                        type="target"
                        position={Position.Bottom}
                        id="right-bottom-cbr"
                    />
                </>: ""
            }
        </Box>
    )
}

export default CircuitBreaker