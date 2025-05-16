import {Node, NodeProps, Position} from "@xyflow/react"
import { ElectricalComponentData, ElectricalComponentType } from "../../types"
import { Box} from "@chakra-ui/react"
import Terminal from "../Terminal"
import { useTest } from "../../Context/exo_type"

import {default as DMTIcon} from "../../icons/SecurityRelais/DMT"
type DMT_Node = Node<ElectricalComponentData, "string">

const DMT=({type, data:{value}}:NodeProps<DMT_Node>)=>{
    const x:number = 30
    const {test_choice} = useTest()

    return(
        <Box>
            <DMTIcon height={160} />
            <>
                <Terminal
                    style={{left: 54, top: 31}}
                    type="target"
                    position={Position.Top}
                    id="up-dmt-left"
                />

                <Terminal
                    style={{left: 54 + x, top: 30}}
                    type="target"
                    position={Position.Top}
                    id="up-dmt-center"
                />

                <Terminal
                    style={{left: 54 + 2*x, top: 29}}
                    type="target"
                    position={Position.Top}
                    id="up-dmt-right"
                />



                <Terminal
                    style={{left: 54, bottom: 15}}
                    type="source"
                    position={Position.Bottom}
                    id="down-dmt-left"
                />

                <Terminal
                    style={{left: 54 + x, bottom: 17}}
                    type="source"
                    position={Position.Bottom}
                    id="down-dmt-center"
                />

                <Terminal
                    style={{left: 54 + 2*x, bottom: 19}}
                    type="source"
                    position={Position.Bottom}
                    id="down-dmt-right"
                />
            
            </>

            {
                test_choice.choice == "free" ?
                <>
                    <Terminal
                        style={{left: 54, top: 31}}
                        type="source"
                        position={Position.Top}
                        id="up-dmt-left"
                    />

                    <Terminal
                        style={{left: 54 + x, top: 30}}
                        type="source"
                        position={Position.Top}
                        id="up-dmt-center"
                    />

                    <Terminal
                        style={{left: 54 + 2*x, top: 29}}
                        type="source"
                        position={Position.Top}
                        id="up-dmt-right"
                    />



                    <Terminal
                        style={{left: 54, bottom: 15}}
                        type="target"
                        position={Position.Bottom}
                        id="down-dmt-left"
                    />

                    <Terminal
                        style={{left: 54 + x, bottom: 17}}
                        type="target"
                        position={Position.Bottom}
                        id="down-dmt-center"
                    />

                    <Terminal
                        style={{left: 54 + 2*x, bottom: 19}}
                        type="target"
                        position={Position.Bottom}
                        id="down-dmt-right"
                    />
                
                </>:""
            }
        </Box>
    )
}

export default DMT