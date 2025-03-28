import ContactLC1_icon from "../image/Contactor-LC1.png"

const ContactLC1 = ({height}:{height? : number}) => {
    return(
        <img src={ContactLC1_icon} alt="Contactor-LC1" title="Contacteur ND" style={{
            height:height
        }}/>
    )
}

export  default ContactLC1