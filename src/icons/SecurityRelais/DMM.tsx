import DMM_icon from "../image/SecurityRelais/DMM.png"

const DMM = ({height}:{height?:number})=>{
    return(
        <img 
            src={DMM_icon} 
            alt="Disjoncteur Magnetothermique Monophase" 
            title="Disjoncteur Magnetothermique Monophase"
            style={{
                height:height
            }}
        />
    )
}

export default DMM