import DMT_icon from "../image/SecurityRelais/DMT.png"

const DMT = ({height}:{height?:number})=>{
    return (
        <img 
            src={DMT_icon} 
            alt="Disjoncteur Magnetothermique Triphase" 
            title="Disjoncteur Magnetothermique Triphase" 
            style={{
                height:height
            }}
        />
    )
}

export default DMT