import {Node, NodeProps, Position} from "@xyflow/react"
import { ElectricalComponentData, ElectricalComponentType } from "../../types"
import { Box, Text} from "@chakra-ui/react"
import { getUnit } from "../../utils"
import Terminal from "../Terminal"

import {default as ContactorDNIcon} from "../../icons/ElecIcons/Contactor-LS1"

type ContactorDN_Node = Node<ElectricalComponentData, "string">

const ContactorDN =({
    type,
    data: {value}
}: NodeProps<ContactorDN_Node>)=>{
    const unit = getUnit(type as ElectricalComponentType)
    const top_x : number = 10
    const top_y : number = 0.5

    const bottom_x : number = 10
    const bottom_y : number = 0.5

    return(
        <Box>
            <ContactorDNIcon height={200}/>

            <Terminal
                style={{ left: 43 + 0*top_x, top: 62 - top_y }}
                type="source"
                position={Position.Top}
                id="left-top-dn"
            />
            <Terminal
                style={{ left: 48 + 1*top_x, top: 62 - 18*top_y }}
                type="source"
                position={Position.Top}
                id="left-up-center-top-dn"
            />
            <Terminal
                style={{ left: 55 + 2*top_x, top: 62 - top_y }}
                type="source"
                position={Position.Top}
                id="left-center-top-dn"
            />
            <Terminal
                style={{ left: 65 + 4*top_x, top: 62 - top_y }}
                type="source"
                position={Position.Top}
                id="right-top-dn"
            />

            <Terminal
                style={{ left: 43 + 0*bottom_x, bottom: 40 + 0*bottom_y }}
                type="target"
                position={Position.Bottom}
                id="left-bottom-dn"
            />
            <Terminal
                style={{ left: 48 + 1*bottom_x, bottom: 40 - 18*bottom_y }}
                type="target"
                position={Position.Bottom}
                id="left-bottom-down-center-dn"
            />
            <Terminal
                style={{ left: 53 + 2*bottom_x, bottom: 40 + 0*bottom_y }}
                type="target"
                position={Position.Bottom}
                id="left-bottom-center-dn"
            />
            <Terminal
                style={{ left: 65 + 4*bottom_x, bottom: 40 + 0*bottom_y }}
                type="target"
                position={Position.Bottom}
                id="right-bottom-dn"
            />
        </Box>
    )
}

export default ContactorDN