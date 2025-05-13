import RDS_icon from "../image/SecurityRelais/RDS.png"

const RDS = ({height}:{height?:number})=>{
    return(
        <img 
            src={RDS_icon} 
            alt="Relais de Securite" 
            title="Relais de Securite" 
            style={{
                height:height
            }}
        />
    )
}

export default RDS