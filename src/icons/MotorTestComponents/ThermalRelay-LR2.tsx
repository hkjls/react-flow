import ThermalRelay_LR2 from "../image/MotorTestComponents/ThermalRelay-LR2.png"

const ThermalRelayLR2 = ({height}: {height? : number}) => {
    return (
        <img src={ThermalRelay_LR2} alt="Thermal Relay" title="Relais Thermique" style={{
            height: height
        }} />
    )
}

export default ThermalRelayLR2