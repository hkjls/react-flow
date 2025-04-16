import { background, position } from "@chakra-ui/react";
import { ElectricalComponentType } from "../../../types";
import { Node } from "@xyflow/react";
import { useNodesState } from "@xyflow/react";
import { v4 as uuid } from "uuid";
import { transform } from "framer-motion";

const SimMotor=({n, setN}:any)=>{
    // const initialNodes: Node[]=[]

    // const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const x_g1: number = 100
    const y_gbtn: number = 0
    const x_gbtn: number = -120
    const x_gb2 : number = 0
    const y_gb2 : number = -45
    const x_all : number = 200
    const y_all : number = 2
    const node_list=()=>{
        setN([{
                  id: uuid(),
                  type: ElectricalComponentType.ContactorLS1, //ContactorLC1 (5)
                  position: {x: 435+x_all, y: 370+y_all},
                  data: { label: "Node de fin" },
                  draggable: false
                },
                {
                    id: uuid(),
                    type: ElectricalComponentType.ContactorLC1, //ContactorDN (4)
                    position: {x: 780 + x_g1+x_all, y:100+y_all},
                    data: { label: "Node de depart" },
                    draggable: false
                },
                {
                    id: uuid(),
                    type: ElectricalComponentType.ContactorDN, //ContactorLS1 (1)
                    position: {x:260 + x_g1+x_all , y:68+y_all },
                    data: { label: "Node de depart" },
                    draggable: false
                },
                {
                    id: uuid(),
                    type: ElectricalComponentType.SupportElec, // (6)
                    position: {x: 250 + x_gb2+x_all, y: 700 + y_gb2+y_all},
                    data: { label: "Grp 2" },
                    draggable: false
                },
                {
                    id: uuid(),
                    type: ElectricalComponentType.SocketElecII, // (7)
                    position: {x: 690 + x_gb2+x_all, y: 700 + y_gb2+y_all},
                    data: { label: "Grp 2" },
                    draggable: false
                },
                {
                    id: uuid(),
                    type: ElectricalComponentType.ThermalRelayLR2, // (8)
                    position: {x: 630+x_all, y: 370+y_all},
                    data: { label: "Node de depart" },
                    draggable: false
                },
                {
                    id: uuid(),
                    type: ElectricalComponentType.CircuitBreaker32AN, //(3)
                    position: {x: 560 + x_g1+x_all, y: 105+y_all},
                    data: { label: "Node de depart" },
                    draggable: false
                },
                {
                    id: uuid(),
                    type: ElectricalComponentType.CircuitBreaker32A, //(2)
                    position: {x: 440 + x_g1+x_all, y: 100+y_all},
                    data: { label: "Node de depart" },
                    draggable: false
                },
                {
                    id: uuid(),
                    type: ElectricalComponentType.ButtonRedI,
                    position: {x: 800 + x_gbtn+x_all, y: 900 + y_gbtn+y_all},
                    data: { label: "Grp btn" },
                    draggable: false
                },
                {
                    id: uuid(),
                    type: ElectricalComponentType.ButtonGreen,
                    position: {x: 900 + x_gbtn+x_all, y: 900 + y_gbtn+y_all},
                    data: { label: "Grp btn" },
                    draggable: false
                },
                {
                    id: uuid(),
                    type: ElectricalComponentType.ButtonRedII,
                    position: {x: 1000 + x_gbtn+x_all, y: 900 + y_gbtn+y_all},
                    data: { label: "Grp btn" },
                    draggable: false
                },
                {
                    id: uuid(),
                    type: ElectricalComponentType.ButtonRedIII,
                    position: {x: 1100 + x_gbtn+x_all, y: 900 + y_gbtn+y_all},
                    data: { label: "Grp btn" },
                    draggable: false
                },
                {
                    id: uuid(),
                    type: ElectricalComponentType.MiniSocket,
                    position: {x: 1030 + x_gb2+x_all, y: 670 + y_gb2+y_all},
                    data: { label: "Grp 2" },
                    draggable: false
                },
                {
                    id: uuid(),
                    type: ElectricalComponentType.Board,
                    position: {x:250+x_all, y:60+y_all},
                    data: {label: "Baord"},
                    style: { 
                        height: 530, 
                        width: 890, 
                        background: "rgb(118, 195, 170)", 
                        zIndex:-1000
                    },
                    draggable: false
                },
                {
                    id: uuid(),
                    type: ElectricalComponentType.Board,
                    position: {x:325+x_all, y:145+y_all},
                    data: {label: "Baord"},
                    style: { 
                        height: 70, 
                        width: 730, 
                        background: "rgb(78, 161, 224)", 
                        zIndex:-1000
                    },
                    draggable: false
                },
                {
                    id: uuid(),
                    type: ElectricalComponentType.Board,
                    position: {x:325+x_all, y:430+y_all},
                    data: {label: "Baord"},
                    style: {
                        displa: "fixed",
                        height: 70, 
                        width: 730, 
                        background: "rgb(78, 161, 224)", 
                        zIndex:-1000
                    },
                    draggable: false
                },
                {
                    id: uuid(),
                    type: ElectricalComponentType.Board,
                    position: {x:800 + x_gbtn+x_all, y:860 + y_gbtn+y_all},
                    data: {label: "Grp btn"},
                    style: { 
                        height: 200, 
                        width: 450, 
                        background: "rgb(118, 195, 170)", 
                        zIndex:-1000,
                    },
                    draggable: false
                },
                {
                    id: uuid(),
                    type: ElectricalComponentType.Board,
                    position: {x:250 + x_gb2+x_all, y:650 + y_gb2+y_all},
                    data: {label: "Grp 2"},
                    style: { 
                        height: 200, 
                        width: 890, 
                        background: "rgb(118, 195, 170)", 
                        zIndex:-1000
                    },
                    draggable: false
                },
            ])
    }
    return (
            <div onClick={node_list}>
                Démarreur pour un moteur
            </div>
    )

}

export default SimMotor