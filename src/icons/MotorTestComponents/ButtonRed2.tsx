import ButtonRed2_icon from "../image/MotorTestComponents/ButtonRed2.png"

const ButtonRed2 = ({ height }: {height?:number}) => {
    return(
        <img src={ButtonRed2_icon} alt="ButtonRed2" title="ButtonRed2" style={{
            height:height
        }} />
    )
}

export default ButtonRed2