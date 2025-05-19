import {Node, NodeProps, Position} from "@xyflow/react"
import { ElectricalComponentData, ElectricalComponentType } from "../../types"
import { Box, Text} from "@chakra-ui/react"
import { getUnit } from "../../utils"
import Terminal from "../Terminal"
import { useTest } from "../../Context/exo_type"

import {default as RDSIcon} from "../../icons/SecurityRelais/RDS"
type RDS_Node = Node<ElectricalComponentData, "string">

const RDS =({type, data:{value}}:NodeProps<RDS_Node>)=>{
    const x:number = 14
    const {test_choice} = useTest()

    return(
        <Box>
            <RDSIcon height={200} />
            <>
                <Terminal
                    style={{left: 86, top: 27}}
                    type="target"
                    position={Position.Top}
                    id="p-up-1-dmt-left"
                />
                <Terminal
                    style={{left: 86 + x, top: 27}}
                    type="target"
                    position={Position.Top}
                    id="p-up-1-dmt-center"
                />
                <Terminal
                    style={{left: 86 + 2*x, top: 27}}
                    type="target"
                    position={Position.Top}
                    id="p-up-1-dmt-right"
                />


                <Terminal
                    style={{left: 86, top: 59}}
                    type="target"
                    position={Position.Top}
                    id="p-up-2-dmt-left"
                />
                <Terminal
                    style={{left: 86 + x, top: 59}}
                    type="target"
                    position={Position.Top}
                    id="p-up-2-dmt-center"
                />
                <Terminal
                    style={{left: 86 + 2*x, top: 59}}
                    type="target"
                    position={Position.Top}
                    id="p-up-2-dmt-right"
                />


                <Terminal
                    style={{left: 86, bottom: 35}}
                    type="source"
                    position={Position.Bottom}
                    id="p-down-1-dmt-left"
                />
                <Terminal
                    style={{left: 86 + x, bottom: 35}}
                    type="source"
                    position={Position.Bottom}
                    id="p-down-1-dmt-center"
                />
                <Terminal
                    style={{left: 86 + 2*x, bottom: 35}}
                    type="source"
                    position={Position.Bottom}
                    id="p-down-1-dmt-right"
                />

                <Terminal
                    style={{left: 86, bottom: 17}}
                    type="source"
                    position={Position.Bottom}
                    id="p-down-2-dmt-left"
                />
                <Terminal
                    style={{left: 86 + x, bottom: 17}}
                    type="source"
                    position={Position.Bottom}
                    id="p-down-2-dmt-center"
                />
                <Terminal
                    style={{left: 86 + x*2, bottom: 17}}
                    type="source"
                    position={Position.Bottom}
                    id="p-down-2-dmt-bottom"
                />
            </>
                <>
                    <Terminal
                        style={{left: 86, top: 27}}
                        type="source"
                        position={Position.Top}
                        id="s-up-1-dmt-left"
                    />
                    <Terminal
                        style={{left: 86 + x, top: 27}}
                        type="source"
                        position={Position.Top}
                        id="s-up-1-dmt-center"
                    />
                    <Terminal
                        style={{left: 86 + 2*x, top: 27}}
                        type="source"
                        position={Position.Top}
                        id="s-up-1-dmt-right"
                    />


                    <Terminal
                        style={{left: 86, top: 59}}
                        type="source"
                        position={Position.Top}
                        id="s-up-2-dmt-left"
                    />
                    <Terminal
                        style={{left: 86 + x, top: 59}}
                        type="source"
                        position={Position.Top}
                        id="s-up-2-dmt-center"
                    />
                    <Terminal
                        style={{left: 86 + 2*x, top: 59}}
                        type="source"
                        position={Position.Top}
                        id="s-up-2-dmt-right"
                    />


                    <Terminal
                        style={{left: 86, bottom: 35}}
                        type="target"
                        position={Position.Bottom}
                        id="s-down-1-dmt-left"
                    />
                    <Terminal
                        style={{left: 86 + x, bottom: 35}}
                        type="target"
                        position={Position.Bottom}
                        id="s-down-1-dmt-center"
                    />
                    <Terminal
                        style={{left: 86 + 2*x, bottom: 35}}
                        type="target"
                        position={Position.Bottom}
                        id="s-down-1-dmt-right"
                    />

                    <Terminal
                        style={{left: 86, bottom: 17}}
                        type="target"
                        position={Position.Bottom}
                        id="s-down-2-dmt-left"
                    />
                    <Terminal
                        style={{left: 86 + x, bottom: 17}}
                        type="target"
                        position={Position.Bottom}
                        id="s-down-2-dmt-center"
                    />
                    <Terminal
                        style={{left: 86 + x*2, bottom: 17}}
                        type="target"
                        position={Position.Bottom}
                        id="s-down-2-dmt-bottom"
                    />
                </>
        </Box>
    )
}

export default RDS