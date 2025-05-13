import ButtonGreen_icon from "../image/MotorTestComponents/ButtonGreen.png"

const ButtonGreen = ({ height }: {height?:number}) => {
    return(
        <img src={ButtonGreen_icon} alt="ButtonGreen" title="ButtonGreen" style={{
            height:height
        }} />
    )
}

export default ButtonGreen