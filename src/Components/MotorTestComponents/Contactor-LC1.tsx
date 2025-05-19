import {Node, NodeProps, Position} from "@xyflow/react"
import { ElectricalComponentData, ElectricalComponentType } from "../../types"
import { Box, Text} from "@chakra-ui/react"
import { getUnit } from "../../utils"
import Terminal from "../Terminal"
import { useTest } from "../../Context/exo_type"

import {default as ContactorLCIIcon} from "../../icons/MotorTestComponents/Contactor-DN"

type ContactorLCI_Node = Node<ElectricalComponentData, "string">

const ContactorLCI =({
    type,
    data: {value}
}: NodeProps<ContactorLCI_Node>)=>{
    const unit = getUnit(type as ElectricalComponentType)
    const top_x : number = 30
    const top_y : number = 3

    const bottom_x : number = 15
    const bottom_y : number = 0

    const {test_choice}=useTest()

    return(
        <Box>
            <ContactorLCIIcon height={150} />

            <Terminal
                style={{ left: 83 - 1*top_x, top: 28 - top_y }}
                type="target"
                position={Position.Top}
                id="left-left-top-lci"
            />

            <Terminal
                style={{ left: 68 + 0*top_x, top: 28 - top_y }}
                type="target"
                position={Position.Top}
                id="left-top-lci"
            />
            <Terminal
                style={{ left: 52 + top_x, top: 28 - top_y }}
                type="target"
                position={Position.Top}
                id="left-center-top-lci"
            />
            <Terminal
                style={{ left: 65 + top_x, top: 28 - top_y }}
                type="target"
                position={Position.Top}
                id="center-right-top-lci"
            />
            <Terminal
                style={{ left: 85 + top_x, top: 28 - top_y }}
                type="target"
                position={Position.Top}
                id="right-top-lci"
            />

            <Terminal
                style={{ left: 54 + 0*bottom_x, bottom: 30 + 0*bottom_y }}
                type="source"
                position={Position.Bottom}
                id="left-bottom-lci"
            />
            <Terminal
                style={{ left: 60 + bottom_x, bottom: 30 + 0*bottom_y }}
                type="target"
                position={Position.Bottom}
                id="center-bottom-lci"
            />
            <Terminal
                style={{ left: 55 + 2.3*bottom_x, bottom: 30 + 0*bottom_y }}
                type="source"
                position={Position.Bottom}
                id="right-center-bottom-lci"
            />
            <Terminal
                style={{ left: 69 + 2.3*bottom_x, bottom: 30 + 0*bottom_y }}
                type="source"
                position={Position.Bottom}
                id="right-center-bottom-lci"
            />
            <Terminal
                style={{ left: 85 + 2.3*bottom_x, bottom: 30 + 0*bottom_y }}
                type="source"
                position={Position.Bottom}
                id="right-bottom-lci"
            />

            <> 
                <Terminal
                    style={{ left: 83 - 1*top_x, top: 28 - top_y }}
                    type="source"
                    position={Position.Top}
                    id="left-left-top-lci"
                />

                <Terminal
                    style={{ left: 68 + 0*top_x, top: 28 - top_y }}
                    type="source"
                    position={Position.Top}
                    id="left-top-lci"
                />
                <Terminal
                    style={{ left: 52 + top_x, top: 28 - top_y }}
                    type="source"
                    position={Position.Top}
                    id="left-center-top-lci"
                />
                <Terminal
                    style={{ left: 65 + top_x, top: 28 - top_y }}
                    type="source"
                    position={Position.Top}
                    id="center-right-top-lci"
                />
                <Terminal
                    style={{ left: 85 + top_x, top: 28 - top_y }}
                    type="source"
                    position={Position.Top}
                    id="right-top-lci"
                />

                <Terminal
                    style={{ left: 54 + 0*bottom_x, bottom: 30 + 0*bottom_y }}
                    type="target"
                    position={Position.Bottom}
                    id="left-bottom-lci"
                />
                <Terminal
                    style={{ left: 60 + bottom_x, bottom: 30 + 0*bottom_y }}
                    type="source"
                    position={Position.Bottom}
                    id="center-bottom-lci"
                />
                <Terminal
                    style={{ left: 55 + 2.3*bottom_x, bottom: 30 + 0*bottom_y }}
                    type="target"
                    position={Position.Bottom}
                    id="right-center-bottom-lci"
                />
                <Terminal
                    style={{ left: 69 + 2.3*bottom_x, bottom: 30 + 0*bottom_y }}
                    type="target"
                    position={Position.Bottom}
                    id="right-center-bottom-lci"
                />
                <Terminal
                    style={{ left: 85 + 2.3*bottom_x, bottom: 30 + 0*bottom_y }}
                    type="target"
                    position={Position.Bottom}
                    id="right-bottom-lci"
                />
            </>
        </Box>
    )
}

export default ContactorLCI