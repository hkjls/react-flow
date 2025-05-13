import {Node, NodeProps, Position} from "@xyflow/react"
import { ElectricalComponentData, ElectricalComponentType } from "../../types"
import { Box, Text} from "@chakra-ui/react"
import { getUnit } from "../../utils"
import Terminal from "../Terminal"
import { useTest } from "../../Context/exo_type"

import {default as ContactorLSIIcon} from "../../icons/MotorTestComponents/Contactor-LC1"

type ContactorLSI_Node = Node<ElectricalComponentData, "string">;

const ContactorLSI =({
    type,
    data: {value}
}: NodeProps<ContactorLSI_Node>)=>{
    const unit = getUnit(type as ElectricalComponentType)
    const top_x : number = 10
    const top_y : number = 10

    const bottom_x : number = 15
    const bottom_y : number = 0

    const {test_choice} = useTest()
    return(
        <Box>
            <ContactorLSIIcon height={190} />

            <Terminal
                style={{ left: 61 + 0*top_x, top: 55 - top_y }}
                type="source"
                position={Position.Top}
                id="left-up-1-lsi"
            />
            <Terminal
                style={{ left: 61 + 0*top_x, top: 60 - 0*top_y}}
                type="source"
                position={Position.Top}
                id="left-up-2-lsi"
            />
            <Terminal
                style={{ left: 68 + 1.5*top_x, top: 60 - 0*top_y}}
                type="source"
                position={Position.Top}
                id="left-center-up-2-lsi"
            />
            <Terminal
                style={{ left: 71 + 3.5*top_x, top: 60 - 0*top_y}}
                type="source"
                position={Position.Top}
                id="right-center-up-2-lsi"
            />
            <Terminal
                style={{ left: 78 + 5*top_x, top: 60 - 0*top_y}}
                type="source"
                position={Position.Top}
                id="right-up-2-lsi"
            />
            <Terminal
                style={{ left: 78 + 5*top_x, top: 55 - top_y }}
                type="source"
                position={Position.Top}
                id="right-up-1-lsi"
            />


            <Terminal
                style={{ left: 64 + 0*bottom_x, bottom: 43 + 0*bottom_y }}
                type="target"
                position={Position.Bottom}
                id="left-down-lsi"
            />
            <Terminal
                style={{ left: 69 + bottom_x, bottom: 43 + bottom_y}}
                type="target"
                position={Position.Bottom}
                id="left-center-down-lsi"
            />
            <Terminal
                style={{ left: 76 + 2*bottom_x, bottom: 43 + 2*bottom_y }}
                type="target"
                position={Position.Bottom}
                id="right-center-down-lsi"
            />
            <Terminal
                style={{ left: 83 + 3*bottom_x, bottom: 43 + 3*bottom_y}}
                type="target"
                position={Position.Bottom}
                id="right-down-lsi"
            />

            {
                test_choice.choice == "free" ?
                <>
                    <Terminal
                        style={{ left: 61 + 0*top_x, top: 55 - top_y }}
                        type="target"
                        position={Position.Top}
                        id="left-up-1-lsi"
                    />
                    <Terminal
                        style={{ left: 61 + 0*top_x, top: 60 - 0*top_y}}
                        type="target"
                        position={Position.Top}
                        id="left-up-2-lsi"
                    />
                    <Terminal
                        style={{ left: 68 + 1.5*top_x, top: 60 - 0*top_y}}
                        type="target"
                        position={Position.Top}
                        id="left-center-up-2-lsi"
                    />
                    <Terminal
                        style={{ left: 71 + 3.5*top_x, top: 60 - 0*top_y}}
                        type="target"
                        position={Position.Top}
                        id="right-center-up-2-lsi"
                    />
                    <Terminal
                        style={{ left: 78 + 5*top_x, top: 60 - 0*top_y}}
                        type="target"
                        position={Position.Top}
                        id="right-up-2-lsi"
                    />
                    <Terminal
                        style={{ left: 78 + 5*top_x, top: 55 - top_y }}
                        type="target"
                        position={Position.Top}
                        id="right-up-1-lsi"
                    />


                    <Terminal
                        style={{ left: 64 + 0*bottom_x, bottom: 43 + 0*bottom_y }}
                        type="source"
                        position={Position.Bottom}
                        id="left-down-lsi"
                    />
                    <Terminal
                        style={{ left: 69 + bottom_x, bottom: 43 + bottom_y}}
                        type="source"
                        position={Position.Bottom}
                        id="left-center-down-lsi"
                    />
                    <Terminal
                        style={{ left: 76 + 2*bottom_x, bottom: 43 + 2*bottom_y }}
                        type="source"
                        position={Position.Bottom}
                        id="right-center-down-lsi"
                    />
                    <Terminal
                        style={{ left: 83 + 3*bottom_x, bottom: 43 + 3*bottom_y}}
                        type="source"
                        position={Position.Bottom}
                        id="right-down-lsi"
                    />
                </> : ""
            }
        </Box>
    )
}

export default ContactorLSI