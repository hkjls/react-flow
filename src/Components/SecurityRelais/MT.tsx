import {Node, NodeProps, Position} from "@xyflow/react"
import { ElectricalComponentData, ElectricalComponentType } from "../../types"
import { Box} from "@chakra-ui/react"
import Terminal from "../Terminal"
import { useTest } from "../../Context/exo_type"

import {default as MTIcon} from "../../icons/SecurityRelais/MT"
type MT_Node = Node<ElectricalComponentData, "string">

const MT=({type, data:{value}}:NodeProps<MT_Node>)=>{
    const x:number = 30
    const {test_choice} = useTest()

    return (
        <Box>
            <MTIcon height={160} />
            <>
                <Terminal
                    style={{left: 70, top: 42}}
                    type="target"
                    position={Position.Top}
                    id="mt-left"
                />
                <Terminal
                    style={{left: 87, top: 41}}
                    type="target"
                    position={Position.Top}
                    id="mt-center"
                />
                <Terminal
                    style={{left: 100, top: 39}}
                    type="target"
                    position={Position.Top}
                    id="mt-right"
                />
            </>
            {
                test_choice.choice == "free" ?
                <>
                    <Terminal
                        style={{left: 70, top: 42}}
                        type="source"
                        position={Position.Top}
                        id="mt-left"
                    />
                    <Terminal
                        style={{left: 87, top: 41}}
                        type="source"
                        position={Position.Top}
                        id="mt-center"
                    />
                    <Terminal
                        style={{left: 100, top: 39}}
                        type="source"
                        position={Position.Top}
                        id="mt-right"
                    />
                </>:""
            }
        </Box>
    )
}

export default MT