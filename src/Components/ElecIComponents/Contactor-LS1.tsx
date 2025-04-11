import {Node, NodeProps, Position} from "@xyflow/react"
import { ElectricalComponentData, ElectricalComponentType } from "../../types"
import { Box, Text} from "@chakra-ui/react"
import { getUnit } from "../../utils"
import Terminal from "../Terminal"

import {default as ContactorLSIIcon} from "../../icons/ElecIcons/Contactor-LC1"

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
    return(
        <Box>
            <ContactorLSIIcon height={190} />
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
                style={{ left: 61 + 0*top_x, top: 55 - top_y }}
                type="source"
                position={Position.Top}
                id="left-up-lsi"
            />
            <Terminal
                style={{ left: 61 + 0*top_x, top: 60 - 0*top_y}}
                type="source"
                position={Position.Top}
                id="left-lsi"
            />
            <Terminal
                style={{ left: 68 + 1.5*top_x, top: 60 - 0*top_y}}
                type="source"
                position={Position.Top}
                id="left-center-lsi"
            />
            <Terminal
                style={{ left: 71 + 3.5*top_x, top: 60 - 0*top_y}}
                type="source"
                position={Position.Top}
                id="right-center-lsi"
            />
            <Terminal
                style={{ left: 78 + 5*top_x, top: 60 - 0*top_y}}
                type="source"
                position={Position.Top}
                id="right-lsi"
            />
            <Terminal
                style={{ left: 78 + 5*top_x, top: 55 - top_y }}
                type="source"
                position={Position.Top}
                id="right-up-lsi"
            />


            <Terminal
                style={{ left: 64 + 0*bottom_x, bottom: 43 + 0*bottom_y }}
                type="target"
                position={Position.Bottom}
                id="left-lsi"
            />
            <Terminal
                style={{ left: 69 + bottom_x, bottom: 43 + bottom_y}}
                type="target"
                position={Position.Bottom}
                id="left-center-lsi"
            />
            <Terminal
                style={{ left: 76 + 2*bottom_x, bottom: 43 + 2*bottom_y }}
                type="target"
                position={Position.Bottom}
                id="right-center-lsi"
            />
            <Terminal
                style={{ left: 83 + 3*bottom_x, bottom: 43 + 3*bottom_y}}
                type="target"
                position={Position.Bottom}
                id="right-lsi"
            />
        </Box>
    )
}

export default ContactorLSI