import CM_icon from "../image/SecurityRelais/CM.png"
import { ReactElement } from "react"

const CM = ({height}:{height?:number}):ReactElement=>{
    return (
        <img 
            src={CM_icon}
            alt="Contacteur Moteur" 
            title="Contacteur Moter"
            style={{
                height:height
            }}    
        />
    )
}

export default CM