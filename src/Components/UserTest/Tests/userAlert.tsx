import {ReactElement, useEffect} from "react";
import { useTest } from "../../../Context/exo_type";
import { useAuth } from "../../../auth";

const Alert=({n, setN}:any):ReactElement=>{
    const {activeAlert, setActiveAlert, setMountEdge, setPannelS, message, mistake, mountEdge} = useTest()
    const {timeHandle} = useAuth()
    const disp:string = activeAlert == 0  ? "block" : "none"
    return (
        <div id="stop-interaction" style={{
            display:disp
        }}>
            <div id="alert-pannel"
                    style={{
                        transform:`translateY(-${activeAlert}px)`
                    }}
                >
                <h3>ATTENTION</h3>
                <div id="alert-content">
                    <p>{message}</p>
                    <div>
                        {
                        mistake/mountEdge < 0.1 || isNaN(mistake/mountEdge) ?
                            <button
                                type="button"
                                onClick={()=>{
                                    setActiveAlert(180)
                                }}
                            >Continuer</button>
                            : ""
                        }
                        <button 
                            type="button"
                            onClick={()=>{
                                setN([])
                                timeHandle()
                                setMountEdge(0)
                                setPannelS(false)
                                setActiveAlert(180)
                            }}
                        >Recommencer</button>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Alert