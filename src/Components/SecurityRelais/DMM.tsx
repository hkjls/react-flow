import {Node, NodeProps, Position} from "@xyflow/react"
import { ElectricalComponentData, ElectricalComponentType } from "../../types"
import { Box, Text} from "@chakra-ui/react"
import { getUnit } from "../../utils"
import Terminal from "../Terminal"
import { useTest } from "../../Context/exo_type"

import {default as DMMIcon} from "../../icons/SecurityRelais/DMM"
type DMM_Node = Node<ElectricalComponentData, "string">

const DMM=({
    type,
    data:{value}
}:NodeProps<DMM_Node>)=>{
    const x:number = 14
    const {test_choice} = useTest()

    return(
        <Box>
            <DMMIcon height={200} />
            <>
                <Terminal
                    style={{left: 98, top: 48}}
                    type="target"
                    position={Position.Top}
                    id="up-dmm-left"
                />

                <Terminal
                    style={{left: 98 + x, top: 48}}
                    type="target"
                    position={Position.Top}
                    id="up-dmm-right"
                />

                <Terminal
                    style={{left: 98, bottom: 41}}
                    type="source"
                    position={Position.Bottom}
                    id="down-dmm-left"
                />

                <Terminal
                    style={{left: 98 + x, bottom: 41}}
                    type="source"
                    position={Position.Bottom}
                    id="down-dmm-right"
                />
            </>
            {
                test_choice.choice == "free" ?
                <>
                    <Terminal
                        style={{left: 98, top: 48}}
                        type="source"
                        position={Position.Top}
                        id="up-dmm-left"
                    />

                    <Terminal
                        style={{left: 98 + x, top: 48}}
                        type="source"
                        position={Position.Top}
                        id="up-dmm-right"
                    />

                    <Terminal
                        style={{left: 98, bottom: 41}}
                        type="target"
                        position={Position.Bottom}
                        id="down-dmm-left"
                    />

                    <Terminal
                        style={{left: 98 + x, bottom: 41}}
                        type="target"
                        position={Position.Bottom}
                        id="down-dmm-right"
                    />
                </>: ""
            }
        </Box>
    )
}

export default DMM