import {Node, NodeProps, Position} from "@xyflow/react"
import { ElectricalComponentData, ElectricalComponentType } from "../../types"
import { Box, Text} from "@chakra-ui/react"
import { getUnit } from "../../utils"
import Terminal from "../Terminal"

import {default as ContactorDNIcon} from "../../icons/ElecIcons/Contactor-DN"

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
            <ContactorDNIcon height={60}/>
            <Text
                fontSize="xx-small"
                position={"absolute"}
                bottom={"16px"}
                right="0px"
                color="black"
                background={"white"}
                width={15}
                textAlign={"center"}
                border="none"
            >
                {value} {unit}
            </Text>

            <Terminal
                style={{ left: 5 + 0*top_x, top: 7 - top_y }}
                type="source"
                position={Position.Top}
                id="left-top"
            />
            <Terminal
                style={{ left: 5 + 1*top_x, top: 7 - 18*top_y }}
                type="source"
                position={Position.Top}
                id="left-up-center-top"
            />
            <Terminal
                style={{ left: 5 + 2*top_x, top: 7 - top_y }}
                type="source"
                position={Position.Top}
                id="left-center-top"
            />
            <Terminal
                style={{ left: 5 + 4*top_x, top: 7 - top_y }}
                type="source"
                position={Position.Top}
                id="right-top"
            />

            <Terminal
                style={{ left: 6 + 0*bottom_x, bottom: 6 + 0*bottom_y }}
                type="target"
                position={Position.Bottom}
                id="left-bottom"
            />
            <Terminal
                style={{ left: 6 + 1*bottom_x, bottom: 6 - 18*bottom_y }}
                type="target"
                position={Position.Bottom}
                id="left-bottom-down-center"
            />
            <Terminal
                style={{ left: 6 + 2*bottom_x, bottom: 6 + 0*bottom_y }}
                type="target"
                position={Position.Bottom}
                id="left-bottom-center"
            />
            <Terminal
                style={{ left: 6 + 4*bottom_x, bottom: 6 + 0*bottom_y }}
                type="target"
                position={Position.Bottom}
                id="right-bottom"
            />
        </Box>
    )
}

export default ContactorDN