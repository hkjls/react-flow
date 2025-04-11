import ButtonRed1_icon from "../image/ButtonRed1.png"

const ButtonRed1 = ({ height }: {height?:number}) => {
    return(
        <img src={ButtonRed1_icon} alt="ButtonRed1" title="ButtonRed1" style={{
            height:height
        }} />
    )
}

export default ButtonRed1