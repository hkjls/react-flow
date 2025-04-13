import { background, position } from "@chakra-ui/react";
import { ElectricalComponentType } from "../../../types";
import { Node } from "@xyflow/react";
import { useNodesState } from "@xyflow/react";
import { v4 as uuid } from "uuid";

const SimMotor=({n, setN}:any)=>{
    // const initialNodes: Node[]=[]

    // const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const x_g1: number = 100
    const y_gbtn: number = 0
    const x_gbtn: number = -120
    const x_gb2 : number = 0
    const y_gb2 : number = -45
    const node_list=()=>{
        setN([{
                  id: uuid(),
                  type: ElectricalComponentType.ContactorLS1, //ContactorLC1 (5)
                  position: {x: 435, y: 370},
                  data: { label: "Node de fin" },
                },
                {
                    id: uuid(),
                    type: ElectricalComponentType.ContactorLC1, //ContactorDN (4)
                    position: {x: 740 + x_g1, y:100},
                    data: { label: "Node de depart" },
                },
                {
                    id: uuid(),
                    type: ElectricalComponentType.ContactorDN, //ContactorLS1 (1)
                    position: {x:260 + x_g1 , y:68 },
                    data: { label: "Node de depart" },
                },
                {
                    id: uuid(),
                    type: ElectricalComponentType.SupportElec, // (6)
                    position: {x: 250 + x_gb2, y: 700 + y_gb2},
                    data: { label: "Grp 2" },
                },
                {
                    id: uuid(),
                    type: ElectricalComponentType.SocketElecII, // (7)
                    position: {x: 690 + x_gb2, y: 700 + y_gb2},
                    data: { label: "Grp 2" },
                },
                {
                    id: uuid(),
                    type: ElectricalComponentType.ThermalRelayLR2, // (8)
                    position: {x: 630, y: 370},
                    data: { label: "Node de depart" },
                },
                {
                    id: uuid(),
                    type: ElectricalComponentType.CircuitBreaker32A, //(3)
                    position: {x: 550 + x_g1, y: 100},
                    data: { label: "Node de depart" },
                },
                {
                    id: uuid(),
                    type: ElectricalComponentType.CircuitBreaker32A, //(2)
                    position: {x: 430 + x_g1, y: 100},
                    data: { label: "Node de depart" },
                },
                {
                    id: uuid(),
                    type: ElectricalComponentType.ButtonRedI,
                    position: {x: 1300 + x_gbtn, y: 100 + y_gbtn},
                    data: { label: "Grp btn" },
                },
                {
                    id: uuid(),
                    type: ElectricalComponentType.ButtonGreen,
                    position: {x: 1300 + x_gbtn, y: 250 + y_gbtn},
                    data: { label: "Grp btn" },
                },
                {
                    id: uuid(),
                    type: ElectricalComponentType.ButtonRedII,
                    position: {x: 1300 + x_gbtn, y: 400 + y_gbtn},
                    data: { label: "Grp btn" },
                },
                {
                    id: uuid(),
                    type: ElectricalComponentType.ButtonRedIII,
                    position: {x: 1290 + x_gbtn, y: 550 + y_gbtn},
                    data: { label: "Grp btn" },
                },
                {
                    id: uuid(),
                    type: ElectricalComponentType.MiniSocket,
                    position: {x: 1030 + x_gb2, y: 670 + y_gb2},
                    data: { label: "Grp 2" },
                },
                {
                    id: uuid(),
                    type: ElectricalComponentType.Board,
                    position: {x:250, y:60},
                    data: {label: "Baord"},
                    style: { 
                        height: 530, 
                        width: 890, 
                        background: "rgb(118, 195, 170)", 
                        zIndex:-1000
                    }
                },
                {
                    id: uuid(),
                    type: ElectricalComponentType.Board,
                    position: {x:325, y:145},
                    data: {label: "Baord"},
                    style: { 
                        height: 70, 
                        width: 730, 
                        background: "rgb(78, 161, 224)", 
                        zIndex:-1000
                    }
                },
                {
                    id: uuid(),
                    type: ElectricalComponentType.Board,
                    position: {x:325, y:430},
                    data: {label: "Baord"},
                    style: {
                        displa: "fixed",
                        height: 70, 
                        width: 730, 
                        background: "rgb(78, 161, 224)", 
                        zIndex:-1000
                    }
                },
                {
                    id: uuid(),
                    type: ElectricalComponentType.Board,
                    position: {x:1285 + x_gbtn, y:60 + y_gbtn},
                    data: {label: "Grp btn"},
                    style: { 
                        height: 600, 
                        width: 170, 
                        background: "rgb(118, 195, 170)", 
                        zIndex:-1000
                    }
                },
                {
                    id: uuid(),
                    type: ElectricalComponentType.Board,
                    position: {x:250 + x_gb2, y:650 + y_gb2},
                    data: {label: "Grp 2"},
                    style: { 
                        height: 200, 
                        width: 890, 
                        background: "rgb(118, 195, 170)", 
                        zIndex:-1000
                    }
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