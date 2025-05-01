import {Node, NodeProps, Position} from "@xyflow/react"
import { ElectricalComponentData, ElectricalComponentType } from "../../types"
import { Box, Text} from "@chakra-ui/react"
import { getUnit } from "../../utils"
import Terminal from "../Terminal"
import { useTest } from "../../Context/exo_type"

import {default as SupportElecIcon} from "../../icons/ElecIcons/SocketElec2"

type SocketElec_Node = Node<ElectricalComponentData, "string">

const SocketElecII=({
    type,
    data: {value}
}:NodeProps<SocketElec_Node>)=>{
    const unit =getUnit(type as ElectricalComponentType)
    const top_x : number = 0
    const top_y : number = -3

    const {test_choice} = useTest()

    return(
        <Box>
            <SupportElecIcon height={130} width={350} />
            <Terminal
                style={{ left: 30 + 0* top_x, top: 27 + top_y}}
                type="target"
                position={Position.Top}
                id="left-1-sckt"
            />
            <Terminal
                style={{ left: 62 + top_x, top: 27 + top_y}}
                type="source"
                position={Position.Top}
                id="left-2-sckt"
            />
            <Terminal
                style={{ left: 95 + 2*top_x, top: 27 + top_y}}
                type="target"
                position={Position.Top}
                id="left-3-sckt"
            />
            <Terminal
                style={{ left: 128 + 3*top_x, top: 27 + top_y}}
                type="source"
                position={Position.Top}
                id="left-4-sckt"
            />
            <Terminal
                style={{ left: 162 + 4*top_x, top: 27 + top_y}}
                type="source"
                position={Position.Top}
                id="left-5-sckt"
            />
            <Terminal
                style={{ left: 194 + 5*top_x, top: 27 + top_y}}
                type="source"
                position={Position.Top}
                id="left-6-sckt"
            />
            <Terminal
                style={{ left: 260 + 7*top_x, top: 27 + top_y}}
                type="source"
                position={Position.Top}
                id="right-1-sckt"
            />
            <Terminal
                style={{ left: 293 + 8*top_x, top: 27 + top_y}}
                type="source"
                position={Position.Top}
                id="right-2-sckt"
            />
            <Terminal
                style={{ left: 325 + 9*top_x, top: 27 + top_y}}
                type="target"
                position={Position.Top}
                id="right-3-sckt"
            />


            <Terminal
                style={{ left: 30 + 0* top_x, top: 27 + 70 + top_y}}
                type="target"
                position={Position.Top}
                id="left-1-sckt-d"
            />
            <Terminal
                style={{ left: 62 + top_x, top: 27+ 70 + top_y}}
                type="source"
                position={Position.Top}
                id="left-2-sckt-d"
            />
            <Terminal
                style={{ left: 95 + 2*top_x, top: 27+ 70 + top_y}}
                type="target"
                position={Position.Top}
                id="left-3-sckt-d"
            />
            <Terminal
                style={{ left: 128 + 3*top_x, top: 27+ 70 + top_y}}
                type="source"
                position={Position.Top}
                id="left-4-sckt-d"
            />
            <Terminal
                style={{ left: 162 + 4*top_x, top: 27+ 70 + top_y}}
                type="source"
                position={Position.Top}
                id="left-5-sckt-d"
            />
            <Terminal
                style={{ left: 194 + 5*top_x, top: 27+ 70 + top_y}}
                type="source"
                position={Position.Top}
                id="left-6-sckt-d"
            />
            <Terminal
                style={{ left: 260 + 7*top_x, top: 27+ 70 + top_y}}
                type="source"
                position={Position.Top}
                id="right-1-sckt-d"
            />
            <Terminal
                style={{ left: 293 + 8*top_x, top: 27+ 70 + top_y}}
                type="source"
                position={Position.Top}
                id="right-2-sckt-d"
            />
            <Terminal
                style={{ left: 325 + 9*top_x, top: 27+ 70 + top_y}}
                type="target"
                position={Position.Top}
                id="right-3-sckt-d"
            />



            {
                test_choice.choice == "free" ? 
                <>
                    <Terminal
                        style={{ left: 30 + 0* top_x, top: 27 + top_y}}
                        type="source"
                        position={Position.Top}
                        id="left-1-sckt"
                    />
                    <Terminal
                        style={{ left: 62 + top_x, top: 27 + top_y}}
                        type="target"
                        position={Position.Top}
                        id="left-2-sckt"
                    />
                    <Terminal
                        style={{ left: 95 + 2*top_x, top: 27 + top_y}}
                        type="source"
                        position={Position.Top}
                        id="left-3-sckt"
                    />
                    <Terminal
                        style={{ left: 128 + 3*top_x, top: 27 + top_y}}
                        type="target"
                        position={Position.Top}
                        id="left-4-sckt"
                    />
                    <Terminal
                        style={{ left: 162 + 4*top_x, top: 27 + top_y}}
                        type="target"
                        position={Position.Top}
                        id="left-5-sckt"
                    />
                    <Terminal
                        style={{ left: 194 + 5*top_x, top: 27 + top_y}}
                        type="target"
                        position={Position.Top}
                        id="left-6-sckt"
                    />
                    <Terminal
                        style={{ left: 260 + 7*top_x, top: 27 + top_y}}
                        type="target"
                        position={Position.Top}
                        id="right-1-sckt"
                    />
                    <Terminal
                        style={{ left: 293 + 8*top_x, top: 27 + top_y}}
                        type="target"
                        position={Position.Top}
                        id="right-2-sckt"
                    />
                    <Terminal
                        style={{ left: 325 + 9*top_x, top: 27 + top_y}}
                        type="source"
                        position={Position.Top}
                        id="right-3-sckt"
                    />


                    <Terminal
                        style={{ left: 30 + 0* top_x, top: 27 + 70 + top_y}}
                        type="source"
                        position={Position.Top}
                        id="left-1-sckt-d"
                    />
                    <Terminal
                        style={{ left: 62 + top_x, top: 27+ 70 + top_y}}
                        type="target"
                        position={Position.Top}
                        id="left-2-sckt-d"
                    />
                    <Terminal
                        style={{ left: 95 + 2*top_x, top: 27+ 70 + top_y}}
                        type="source"
                        position={Position.Top}
                        id="left-3-sckt-d"
                    />
                    <Terminal
                        style={{ left: 128 + 3*top_x, top: 27+ 70 + top_y}}
                        type="target"
                        position={Position.Top}
                        id="left-4-sckt-d"
                    />
                    <Terminal
                        style={{ left: 162 + 4*top_x, top: 27+ 70 + top_y}}
                        type="target"
                        position={Position.Top}
                        id="left-5-sckt-d"
                    />
                    <Terminal
                        style={{ left: 194 + 5*top_x, top: 27+ 70 + top_y}}
                        type="target"
                        position={Position.Top}
                        id="left-6-sckt-d"
                    />
                    <Terminal
                        style={{ left: 260 + 7*top_x, top: 27+ 70 + top_y}}
                        type="target"
                        position={Position.Top}
                        id="right-1-sckt-d"
                    />
                    <Terminal
                        style={{ left: 293 + 8*top_x, top: 27+ 70 + top_y}}
                        type="target"
                        position={Position.Top}
                        id="right-2-sckt-d"
                    />
                    <Terminal
                        style={{ left: 325 + 9*top_x, top: 27+ 70 + top_y}}
                        type="source"
                        position={Position.Top}
                        id="right-3-sckt-d"
                    />
                </> : ""
            }
        </Box>
    )
}

export default SocketElecII