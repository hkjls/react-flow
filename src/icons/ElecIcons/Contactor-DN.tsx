import ContactorDN_icon from "../image/Contactor-DN.png"

const ContactorDN = ({ height }: { height? : number}) => {
    return(
        <img src={ContactorDN_icon} alt="Contactor DN" title="Contacteur Jour/Nuit" style={{
            height: height
        }} />
    )

}

export default ContactorDN