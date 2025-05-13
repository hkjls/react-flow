import ButtonRed3_icon from "../image/MotorTestComponents/ButtonRed3.png"

const ButtonRed3 = ({ height }: {height?:number}) => {
    return(
        <img src={ButtonRed3_icon} alt="ButtonRed3" title="ButtonRed3" style={{
            height:height
        }} />
    )
}

export default ButtonRed3