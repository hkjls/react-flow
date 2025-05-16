import MT_icon from "../image/SecurityRelais/MT.png"
import { ReactElement } from "react"

const MT = ({height}:{height?:number}):ReactElement=>{
    return(
        <img 
            src={MT_icon} 
            alt="Moteur Triphase" 
            title="Moteur Moter" 
            style={{
                height:height
            }}
        />
    )
}

export default MT