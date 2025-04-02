import React from 'react'
import { useReactFlow, useStore } from '@xyflow/react'
import { useEffect, useState } from 'react'
import CircuitElecModel from './Tests/CircuitElecModel'

type connectedEdge = {
    sourceHandle: (string | null | undefined),
    targetHandle: (string | null | undefined)
}

const UserGrades=({edgeConnected}:{edgeConnected:number})=>{
    const stateEdge = useStore(state => state.edges)
    const {getNodes, getEdges} = useReactFlow();
    // const [edgeConnected, addEdgeConnected] = useState(0)
    const [useNote, addUserNote] = useState(0)

    useEffect(()=>{
        if (typeof getEdges()[0] !== "undefined"){
            const success: connectedEdge = {
                sourceHandle:getEdges()[getEdges().length - 1]['sourceHandle'],
                targetHandle:getEdges()[getEdges().length - 1]['targetHandle']
            }
            if(CircuitElecModel(success.sourceHandle, success.targetHandle)){
                addUserNote(useNote + 1)
            }
            // console.log(CircuitElecModel(success.sourceHandle, success.targetHandle))
            // console.log(success)
            // addEdgeConnected(edgeConnected + 1)
        }
    }, [stateEdge])
    
    return(
        <div
            style={{
                position:"absolute",
                bottom:"30px",
                left:"250px",
                zIndex:"2000",
                textAlign:"left"
            }}
        >
            <div>
                <div style={{
                    fontSize:"1.3em"
                    }}>Note du Participant : {useNote}</div>
                
                <div style={{
                    fontSize:"1.3em"
                }}>
                    Connection effectué : {edgeConnected}
                </div>
            </div>
            <div>
                <button
                    onClick={()=>{
                        // addEdgeConnected(0)
                        addUserNote(0)
                    }}
                    style={{
                        background:"red"
                    }}
                >Reinitialiser</button>
            </div>
        </div>
    )
}

export default UserGrades