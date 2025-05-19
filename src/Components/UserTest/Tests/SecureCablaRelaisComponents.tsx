import { border, position } from "@chakra-ui/react";
import { ElectricalComponentType } from "../../../types";
import { v4 as uuid } from "uuid";
import { transform } from "framer-motion";

const SecurCablage=({n, setN}:any)=>{
    const node_list=()=>{
        setN([
            {
                id:uuid(),
                type: ElectricalComponentType.DMM,
                position: {x: 400, y:100},
                data:{label:"Begin"},
                draggable: false
            },
            {
                id:uuid(),
                type: ElectricalComponentType.ButtonRedIII,
                position: {x: 575, y:450},
                data:{label:"Begin"},
                draggable: false
            },
            {
                id:uuid(),
                type: ElectricalComponentType.ButtonRedIII,
                position: {x: 680, y:450},
                data:{label:"Begin"},
                draggable: false
            },
            {
                id:uuid(),
                type: ElectricalComponentType.ContactorLC1,
                position: {x: 800, y:120},
                data:{label:"Begin"},
                draggable: false
            },
            {
                id:uuid(),
                type: ElectricalComponentType.RDS,
                position: {x: 870, y:350},
                data:{label:"Begin"},
                draggable: false
            },
            {
                id:uuid(),
                type: ElectricalComponentType.ButtonGreen,
                position: {x: 1100, y:320},
                data:{label:"Begin"},
                draggable: false
            },
            {
                id:uuid(),
                type: ElectricalComponentType.DMT,
                position: {x: 1250, y:120},
                data:{label:"Begin"},
                draggable: false
            },
            {
                id:uuid(),
                type: ElectricalComponentType.CM,
                position: {x: 1250, y:320},
                data:{label:"Begin"},
                draggable: false
            },
            {
                id:uuid(),
                type: ElectricalComponentType.MT,
                position: {x: 1250, y:520},
                data:{label:"Begin"},
                draggable: false
            },{
                id: uuid(),
                type: ElectricalComponentType.Board,
                position: {x:350, y:-10},
                data: {label: "Grp 2"},
                style: { 
                    height: 700, 
                    width: 1150, 
                    background: "rgb(118, 195, 170)", 
                    zIndex:-1000
                },
                draggable: false
            },
            {
                id:uuid(),
                type: ElectricalComponentType.SocketElecII,
                position: {x:350, y:0},
                data:{label:"Begin"},
                draggable: false
            }
        ])
    }

    return(
        <div
            onClick={node_list}
        >
            Cablage Relais
        </div>
    )
};

export default SecurCablage;