import SupportElec_icon from "../image/socket.png"

const SupportElec =({height}:{height?:number})=>{
    return(
        <img src={SupportElec_icon} alt="Support Elec" title="Support"
            style={{
                height:height
            }}
        />
    )
}

export default SupportElec