import React from 'react'
import { useReactFlow, useStore } from '@xyflow/react'
import { useEffect, useState } from 'react'
import CircuitElecModel from './Tests/CircuitElecModel'
import Recycle from "../../icons/image/svg/recycle-refresh-reload-repeat-rotate-sync-svgrepo-com.png"
import { useAuth } from '../../auth'
import { useTest } from '../../Context/exo_type'

type connectedEdge = {
    sourceHandle: (string | null | undefined),
    targetHandle: (string | null | undefined)
}


const UserGrades=({edgeConnected, addEdgeConnected}:any)=>{
    const {setMistake, setCorrect, mountEdge} = useTest()

    const {time, timeHandle} = useAuth()
    const stateNode = useStore(state => state.nodes)
    const stateEdge = useStore(state => state.edges)
    const {getNodes, getEdges} = useReactFlow();
    const [elapsedTime, setElapsedTime] = useState(0)
    const [isRunning, setIsRunning] = useState(false)

    // const [edgeConnected, addEdgeConnected] = useState(0)
    const [nd, setND] = useState(0)
    const [timeRef, setTimeRef] = useState(1)
    const [pauseRef, setPauseRef] = useState(0)
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
        setMistake(useNote)
    }, [stateEdge.length])

    useEffect(()=>{
        setND(stateNode.length)
        if (stateNode.length - 3 >= 0){
                setND(stateNode.length - 3)
            }
        }, [stateNode.length])

    useEffect(()=>{
        let intervalId : number | null = null
        if(isRunning){
            intervalId = setInterval(()=>{
                setElapsedTime((prevTime)=> prevTime + 1)
            }, 1000)
        }
        
        return() =>{
            if(intervalId !== null){
                clearInterval(intervalId)
            }
        }
    }, [isRunning])
    
    useEffect(()=>{
        if(getEdges().length > pauseRef){
            setIsRunning(true)
            setTimeRef(1)
        }

        if(timeRef == 0 || time == true){
            setIsRunning(false)
            setPauseRef(getEdges().length)
        }

        if(time == true){
            setIsRunning(false)
            addEdgeConnected(0)
            addUserNote(0)
            setElapsedTime(0)
            timeHandle()
        }
        setCorrect(edgeConnected)
        
    }, [timeRef, getEdges()])
    // const handleStart=()=>{
        //     setIsRunning(true)
        // }
        
    const handlePause=()=>{
        setTimeRef(0)
    }
        
    const formatTime =(seconds: number)=>{
    const hours = Math.floor(seconds/3600)
    const minutes = Math.floor((seconds%3600)/60)
    const secs = seconds % 60

        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
    }
    
    return(
        <div id="userGrades">
            <ul id='userGradesList'>
                <li className="userInfo">
                    <span>Temps :</span>
                    <span id="lapsTime">{formatTime(elapsedTime)}</span>
                    
                </li>
                <li className="userInfo">Cablage Correct : {useNote}</li>
                <li className="userInfo">Tentative de Connection : {edgeConnected}</li>
                <li className="userInfo">Connection à faire : {mountEdge ? mountEdge : 0}</li>
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
                >
                    {/* <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 30 30">
                        <path d="M 15 3 C 12.031398 3 9.3028202 4.0834384 7.2070312 5.875 A 1.0001 1.0001 0 1 0 8.5058594 7.3945312 C 10.25407 5.9000929 12.516602 5 15 5 C 20.19656 5 24.450989 8.9379267 24.951172 14 L 22 14 L 26 20 L 30 14 L 26.949219 14 C 26.437925 7.8516588 21.277839 3 15 3 z M 4 10 L 0 16 L 3.0507812 16 C 3.562075 22.148341 8.7221607 27 15 27 C 17.968602 27 20.69718 25.916562 22.792969 24.125 A 1.0001 1.0001 0 1 0 21.494141 22.605469 C 19.74593 24.099907 17.483398 25 15 25 C 9.80344 25 5.5490109 21.062074 5.0488281 16 L 8 16 L 4 10 z"></path>
                    </svg> */}
                    Reinitialiser
                </button>
                {/* <button
                    onClick={handleStart}
                >
                    start */}
                    {/* <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier"> 
                            <path d="M3 12L3 18.9671C3 21.2763 5.53435 22.736 7.59662 21.6145L10.7996 19.8727M3 8L3 5.0329C3 2.72368 5.53435 1.26402 7.59661 2.38548L20.4086 9.35258C22.5305 10.5065 22.5305 13.4935 20.4086 14.6474L14.0026 18.131" stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path> 
                        </g>
                    </svg> */}
                {/* </button> */}
                <button
                    onClick={handlePause}
                >
                    Terminé
                </button>
            </div>
        </div>
    )
}

export default UserGrades