import {Node, NodeProps, Position} from "@xyflow/react"
import { ElectricalComponentData, ElectricalComponentType } from "../../types"
import { Box, Text} from "@chakra-ui/react"
import { getUnit } from "../../utils"
import Terminal from "../Terminal"

import {default as SupportElecIcon} from "../../icons/ElecIcons/SupportElec"

type SupportElec_Node = Node<ElectricalComponentData, "string">

const SupportElec=({
    type,
    data: {value}
}:NodeProps<SupportElec_Node>)=>{
    const unit = getUnit(type as ElectricalComponentType)
    const top_x : number = 33

    return(
        <Box>
            <SupportElecIcon height={60} />
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
                style={{ left: 14 + top_x, bottom: 8 }}
                type="target"
                position={Position.Bottom}
                id="right-bottom"
            />
        </Box>
    )
}