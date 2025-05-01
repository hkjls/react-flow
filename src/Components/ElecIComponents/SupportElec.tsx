import {Node, NodeProps, Position} from "@xyflow/react"
import { ElectricalComponentData, ElectricalComponentType } from "../../types"
import { background, Box, Text} from "@chakra-ui/react"
import { getUnit } from "../../utils"
import Terminal from "../Terminal"
import { useTest } from "../../Context/exo_type"

import {default as SupportElecIcon} from "../../icons/ElecIcons/SupportElec"

type SupportElec_Node = Node<ElectricalComponentData, "string">

const SupportElec=({
    type,
    data: {value}
}:NodeProps<SupportElec_Node>)=>{
    const unit = getUnit(type as ElectricalComponentType)
    const top_x : number = 10

    const {test_choice} = useTest()

    return(
        <Box
            style={{
                transform:"rotateZ(0deg)"
            }}
        >
            <SupportElecIcon height={120} width={450} />

            <Terminal
                style={{ left: 29 + 0* top_x, top: 25}}
                type="target"
                position={Position.Top}
                id="left-1-sprt"
            />
            <Terminal
                style={{ left: 47 + top_x, top: 25}}
                type="target"
                position={Position.Top}
                id="left-center-1-sprt"
            />
            <Terminal
                style={{ left: 65  + 2* top_x, top: 25}}
                type="target"
                position={Position.Top}
                id="right-center-1-sprt"
            />
            <Terminal
                style={{ left: 83  + 3* top_x, top: 25 }}
                type="target"
                position={Position.Top}
                id="right-1-sprt"
            />

            <Terminal
                style={{ left: 177 +  2* top_x, top: 25}}
                type="source"
                position={Position.Top}
                id="left-2-sprt"
            />
            <Terminal
                style={{ left: 195 + 3*top_x, top: 25}}
                type="source"
                position={Position.Top}
                id="left-center-2-sprt"
            />
            <Terminal
                style={{ left: 213  + 4* top_x, top: 25}}
                type="source"
                position={Position.Top}
                id="right-center-2-sprt"
            />
            <Terminal
                style={{ left: 231  + 5* top_x, top: 25 }}
                type="source"
                position={Position.Top}
                id="right-2-sprt"
            />

            {
                test_choice.choice == "free" ?
                <>
                    <Terminal
                        style={{ left: 29 + 0* top_x, top: 25}}
                        type="source"
                        position={Position.Top}
                        id="left-1-sprt"
                    />
                    <Terminal
                        style={{ left: 47 + top_x, top: 25}}
                        type="source"
                        position={Position.Top}
                        id="left-center-1-sprt"
                    />
                    <Terminal
                        style={{ left: 65  + 2* top_x, top: 25}}
                        type="source"
                        position={Position.Top}
                        id="right-center-1-sprt"
                    />
                    <Terminal
                        style={{ left: 83  + 3* top_x, top: 25 }}
                        type="source"
                        position={Position.Top}
                        id="right-1-sprt"
                    />

                    <Terminal
                        style={{ left: 177 +  2* top_x, top: 25}}
                        type="target"
                        position={Position.Top}
                        id="left-2-sprt"
                    />
                    <Terminal
                        style={{ left: 195 + 3*top_x, top: 25}}
                        type="target"
                        position={Position.Top}
                        id="left-center-2-sprt"
                    />
                    <Terminal
                        style={{ left: 213  + 4* top_x, top: 25}}
                        type="target"
                        position={Position.Top}
                        id="right-center-2-sprt"
                    />
                    <Terminal
                        style={{ left: 231  + 5* top_x, top: 25 }}
                        type="target"
                        position={Position.Top}
                        id="right-2-sprt"
                    />
                </> : ""
            }
        </Box>
    )
}

export default SupportElec