import { position } from "@chakra-ui/react";
import { ElectricalComponentType } from "../../../types";
import { Node } from "@xyflow/react";
import { useNodesState } from "@xyflow/react";
import { v4 as uuid } from "uuid";

const SimMotor=({n, setN}:any)=>{
    // const initialNodes: Node[]=[]

    // const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const x_g1: number = 100

    const node_list=()=>{
        setN([{
                  id: uuid(),
                  type: ElectricalComponentType.ContactorLS1, //ContactorLC1 (5)
                  position: {x: 400, y: 400},
                  data: { label: "Node de fin" },
                },
                {
                    id: uuid(),
                    type: ElectricalComponentType.ContactorLC1, //ContactorDN (4)
                    position: {x: 800 + x_g1, y:100},
                    data: { label: "Node de depart" },
                },
                {
                    id: uuid(),
                    type: ElectricalComponentType.ContactorDN, //ContactorLS1 (1)
                    position: {x:200 + x_g1 , y:68 },
                    data: { label: "Node de depart" },
                },
                {
                    id: uuid(),
                    type: ElectricalComponentType.SupportElec, // (6)
                    position: {x: 250, y: 700},
                    data: { label: "Node de depart" },
                },
                {
                    id: uuid(),
                    type: ElectricalComponentType.SocketElecII, // (7)
                    position: {x: 800, y: 700},
                    data: { label: "Node de depart" },
                },
                {
                    id: uuid(),
                    type: ElectricalComponentType.ThermalRelayLR2, // (8)
                    position: {x: 700, y: 400},
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
                    position: {x: 400 + x_g1, y: 100},
                    data: { label: "Node de depart" },
                },
                {
                    id: uuid(),
                    type: ElectricalComponentType.ButtonRedI,
                    position: {x: 1300, y: 100},
                    data: { label: "Node de depart" },
                },
                {
                    id: uuid(),
                    type: ElectricalComponentType.ButtonGreen,
                    position: {x: 1300, y: 250},
                    data: { label: "Node de depart" },
                },
                {
                    id: uuid(),
                    type: ElectricalComponentType.ButtonRedII,
                    position: {x: 1300, y: 400},
                    data: { label: "Node de depart" },
                },
                {
                    id: uuid(),
                    type: ElectricalComponentType.ButtonRedIII,
                    position: {x: 1290, y: 550},
                    data: { label: "Node de depart" },
                },
                {
                    id: uuid(),
                    type: ElectricalComponentType.MiniSocket,
                    position: {x: 1200, y: 675},
                    data: { label: "Node de depart" },
                }
            ])
    }
    return <div onClick={node_list}>
        Démarreur pour un moteur
    </div>

}

export default SimMotor