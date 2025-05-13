import MiniSocket_icon from "../image/MotorTestComponents/MiniSocket.png"

const MiniSocket=({height, width}:{height?:number, width?:number})=>{
    return(
        <img src={MiniSocket_icon} alt="Mini Socket Elec" title="Support 2"
            style={{
                height:height,
                width:width
            }}
        />
    )
}

export default MiniSocket