import {Node, NodeProps, Position} from "@xyflow/react"
import { ElectricalComponentData, ElectricalComponentType } from "../../types"
import { Box, Text} from "@chakra-ui/react"
import { getUnit } from "../../utils"
import Terminal from "../Terminal"

import {default as ContactorLCIIcon} from "../../icons/ElecIcons/Contactor-LC1"

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

    return(
        <Box>
            <ContactorLCIIcon height={60} />
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
                style={{ left: 15 + 0*top_x, top: 7 - top_y }}
                type="source"
                position={Position.Top}
                id="left-top"
            />
            <Terminal
                style={{ left: 15 + top_x, top: 7 - top_y }}
                type="source"
                position={Position.Top}
                id="right-top"
            />

            <Terminal
                style={{ left: 12 + 0*bottom_x, bottom: 6 + 0*bottom_y }}
                type="target"
                position={Position.Bottom}
                id="left-bottom"
            />
            <Terminal
                style={{ left: 12 + bottom_x, bottom: 6 + 0*bottom_y }}
                type="target"
                position={Position.Bottom}
                id="center-bottom"
            /><Terminal
                style={{ left: 12 + 2.3*bottom_x, bottom: 6 + 0*bottom_y }}
                type="target"
                position={Position.Bottom}
                id="right-bottom"
            />
        </Box>
    )
}

export default ContactorLCI