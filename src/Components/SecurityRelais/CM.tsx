import {Node, NodeProps, Position} from "@xyflow/react"
import { ElectricalComponentData, ElectricalComponentType } from "../../types"
import { Box} from "@chakra-ui/react"
import Terminal from "../Terminal"
import { useTest } from "../../Context/exo_type"

import {default as CMIcon} from "../../icons/SecurityRelais/CM"

type CM_Node = Node<ElectricalComponentData, "string">

const CM=({type, data:{value}}:NodeProps<CM_Node>)=>{
    const x:number = 20
    const {test_choice} = useTest()

    return(
        <Box>
            <CMIcon height={160} />
            <>
                <Terminal
                    style={{left: 54, top: 53}}
                    type="target"
                    position={Position.Top}
                    id="up-1-cm"
                />

                <Terminal
                    style={{left: 54 + x, top: 52}}
                    type="target"
                    position={Position.Top}
                    id="up-2-cm"
                />

                <Terminal
                    style={{left: 54 + 2*x, top: 51}}
                    type="target"
                    position={Position.Top}
                    id="up-3-cm"
                />

                <Terminal
                    style={{left: 53 + 3*x, top: 50}}
                    type="target"
                    position={Position.Top}
                    id="up-4-cm"
                />

                <Terminal
                    style={{left: 52 + 4*x, top: 48}}
                    type="target"
                    position={Position.Top}
                    id="up-5-cm"
                />


                <Terminal
                    style={{left: 54, bottom: 30}}
                    type="source"
                    position={Position.Bottom}
                    id="down-1-cm"
                />

                <Terminal
                    style={{left: 54 + x, bottom: 31}}
                    type="source"
                    position={Position.Bottom}
                    id="down-2-cm"
                />

                <Terminal
                    style={{left: 54 + 2*x, bottom: 32}}
                    type="source"
                    position={Position.Bottom}
                    id="down-3-cm"
                />

                <Terminal
                    style={{left: 53 + 3*x, bottom: 34}}
                    type="source"
                    position={Position.Bottom}
                    id="down-4-cm"
                />

                <Terminal
                    style={{left: 51 + 4*x, bottom: 34}}
                    type="source"
                    position={Position.Bottom}
                    id="down-5-cm"
                />
            </>
            {
                test_choice.choice == "free" ?
                <>
                    <Terminal
                        style={{left: 54, top: 53}}
                        type="source"
                        position={Position.Top}
                        id="up-1-cm"
                    />

                    <Terminal
                        style={{left: 54 + x, top: 52}}
                        type="source"
                        position={Position.Top}
                        id="up-2-cm"
                    />

                    <Terminal
                        style={{left: 54 + 2*x, top: 51}}
                        type="source"
                        position={Position.Top}
                        id="up-3-cm"
                    />

                    <Terminal
                        style={{left: 53 + 3*x, top: 50}}
                        type="source"
                        position={Position.Top}
                        id="up-4-cm"
                    />

                    <Terminal
                        style={{left: 52 + 4*x, top: 48}}
                        type="source"
                        position={Position.Top}
                        id="up-5-cm"
                    />


                    <Terminal
                        style={{left: 54, bottom: 30}}
                        type="target"
                        position={Position.Bottom}
                        id="down-1-cm"
                    />

                    <Terminal
                        style={{left: 54 + x, bottom: 31}}
                        type="target"
                        position={Position.Bottom}
                        id="down-2-cm"
                    />

                    <Terminal
                        style={{left: 54 + 2*x, bottom: 32}}
                        type="target"
                        position={Position.Bottom}
                        id="down-3-cm"
                    />

                    <Terminal
                        style={{left: 53 + 3*x, bottom: 34}}
                        type="target"
                        position={Position.Bottom}
                        id="down-4-cm"
                    />

                    <Terminal
                        style={{left: 51 + 4*x, bottom: 34}}
                        type="target"
                        position={Position.Bottom}
                        id="down-5-cm"
                    />
            </>:""
            }
        </Box>
    )
}

export default CM