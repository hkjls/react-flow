import CircuitBreaker32A_icon from "../image/MotorTestComponents/CircuitBreaker-32A.png"

export default function CircuitBreaker32A({ height }: {height?:number}){
    return(
        <img src={CircuitBreaker32A_icon} alt="CircuitBreaker" title="Disjoncteur" style={{
            height:height
        }} />
    )
}