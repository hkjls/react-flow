import ContactorLS1_icon from "../image/MotorTestComponents/Contactor-LS1.png"

const ContactorLS1 = ({ height }: { height? : number}) => {
    return(
        <img src={ContactorLS1_icon} alt="Contactor LS1" title="Contacteur LS1" style={{
            height: height
        }} />
    )

}

export default ContactorLS1