import {Node, NodeProps, Position} from "@xyflow/react"
import { ElectricalComponentData, ElectricalComponentType } from "../../types"
import { Box, Text} from "@chakra-ui/react"
import { getUnit } from "../../utils"
import Terminal from "../Terminal"
import { useTest } from "../../Context/exo_type"

import {default as MiniSocketIcon} from "../../icons/ElecIcons/MiniSocket"

type MiniSocket_Node = Node<ElectricalComponentData, "string">

const MiniSocket = ({
    type,
    data: {value}
}: NodeProps<MiniSocket_Node>) => {
    const unit = getUnit(type as ElectricalComponentType)
    const top_x: number = 10

    const {test_choice} = useTest()

    return (
        <Box>
            <MiniSocketIcon height={20} width={100} />
            <Terminal
                style={{ left: 10 + 0 * top_x, top: 10 }}
                type="source"
                position={Position.Top}
                id="left-1-msckt"
            />
            <Terminal
                style={{ left: 15 + top_x, top: 10 }}
                type="source"
                position={Position.Top}
                id="left-2-msckt"
            />
            <Terminal
                style={{ left: 23 + 2 * top_x, top: 10 }}
                type="source"
                position={Position.Top}
                id="left-3-msckt"
            />
            <Terminal
                style={{ left: 30 + 3 * top_x, top: 10 }}
                type="target"
                position={Position.Top}
                id="left-4-msckt"
            />
            <Terminal
                style={{ left: 51 + 4 * top_x, top: 10 }}
                type="target"
                position={Position.Top}
                id="left-5-msckt"
            />

            {
                test_choice.choice == "free" ?
                <>
                    <Terminal
                        style={{ left: 10 + 0 * top_x, top: 10 }}
                        type="target"
                        position={Position.Top}
                        id="left-1-msckt"
                    />
                    <Terminal
                        style={{ left: 15 + top_x, top: 10 }}
                        type="target"
                        position={Position.Top}
                        id="left-2-msckt"
                    />
                    <Terminal
                        style={{ left: 23 + 2 * top_x, top: 10 }}
                        type="target"
                        position={Position.Top}
                        id="left-3-msckt"
                    />
                    <Terminal
                        style={{ left: 30 + 3 * top_x, top: 10 }}
                        type="source"
                        position={Position.Top}
                        id="left-4-msckt"
                    />
                    <Terminal
                        style={{ left: 51 + 4 * top_x, top: 10 }}
                        type="source"
                        position={Position.Top}
                        id="left-5-msckt"
                    />
                </> : ""
            }
    </Box>
    )
}

export default MiniSocket