import CircuitBreaker32AN_icon from "../image/MotorTestComponents/CircuitBreaker-32A-N.png"

const CircuitBreaker32AN=({height}:{height?:number})=>{
    return(
        <img src={CircuitBreaker32AN_icon} alt="CicruitBreaker4" title="Disjoncteur N" 
            style={{
                height:height
            }}
        />
    )
}

export default CircuitBreaker32AN