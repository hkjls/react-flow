import ContactDN_icon from "../image/MotorTestComponents/Contactor-DN.png"

const ContactDN = ({height}:{height? : number}) => {
    return(
        <img src={ContactDN_icon} alt="Contactor DN" title="Contacteur DN" style={{
            height:height
        }}/>
    )
}

export  default ContactDN