import React from 'react'
import { useReactFlow, useStore } from '@xyflow/react'
import { useEffect, useState } from 'react'
import CircuitElecModel from './Tests/CircuitElecModel'

type connectedEdge = {
    sourceHandle: (string | null | undefined),
    targetHandle: (string | null | undefined)
}

const UserGrades=({edgeConnected}:{edgeConnected:number})=>{
    const stateNode = useStore(state => state.nodes)
    const stateEdge = useStore(state => state.edges)
    const {getNodes, getEdges} = useReactFlow();
    // const [edgeConnected, addEdgeConnected] = useState(0)
    const [nd, setND] = useState(0)
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
        }
    }, [stateEdge.length])

    useEffect(()=>{
        setND(stateNode.length)
        if (stateNode.length - 3 >= 0){
                setND(stateNode.length - 3)
        }
    }, [stateNode.length])

    
    return(
        <div id="userGrades">
            <ul id='userGradesList'>
                <li className="userInfo">Nom du Participant :</li>
                <li className="userInfo">Note du Participant : {useNote}</li>
                <li className="userInfo">Tentative de Connection : {edgeConnected}</li>
                <li className="userInfo">Nombre de Composant : {nd}</li>
            </ul>
            {/* <div>
                <div style={{
                    fontSize:"1.3em"
                    }}>Note du Participant : {useNote}</div>
                
                <div style={{
                    fontSize:"1.3em"
                }}>
                    Connection effectué : {edgeConnected}
                </div>
            </div> */}
            <div id='btn-initializing'>
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