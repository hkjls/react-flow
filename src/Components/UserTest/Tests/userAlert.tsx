import React, {ReactElement, useEffect} from "react";
import { useTest } from "../../../Context/exo_type";
import { useAuth } from "../../../auth";

const Alert=({n, setN}:any):ReactElement=>{
    const {activeAlert, setActiveAlert, setMountEdge, setPannelS, message} = useTest()
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
                <div>
                    <p>{message}</p>
                    <button type="button"
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
        
    )
}

export default Alert