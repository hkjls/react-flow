import SupportElec_icon from "../image/socket.png"

const SupportElec =({height, width}:{height?:number, width?:number})=>{
    return(
        <img src={SupportElec_icon} alt="Support Elec" title="Support"
            style={{
                height:height,
                width:width,
            }}
        />
    )
}

export default SupportElec