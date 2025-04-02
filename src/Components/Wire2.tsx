import React, { useState } from "react";
import ReactFlow, { addEdge, Connection, Edge } from "@xyflow/react";

const Flow=()=>{
    const [edges, setEdges] = useState<Edge[]>([])
    const [nodes, setNodes] = useState()

    const onConnect = (connection: Connection)=>{
        const {source, target} = connection;

        if (source === target){
            alert("Connection between target and target or source and source is forbiden")
            return;
        }
    }
}

export default Flow