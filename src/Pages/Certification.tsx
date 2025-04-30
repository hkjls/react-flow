import React, { ReactElement } from "react";
import CertificatImage from "../images/Certification.png"
import DownloadLogo from "../images/svg/Download.svg"
import PrintLogo from "../images/svg/Print.svg"
import { useNavigate } from "react-router-dom";
import { useTest } from "../Context/exo_type";

const Certification=():ReactElement=>{
    const {userName, userFirstName, laps, mistake, correct, mountEdge} = useTest()

    const navigate = useNavigate()
    const date:Date = new Date()
    
    const nf:number = correct - mistake // n error
    const nc:number =  mountEdge//n cablage
    const nfm:number = nc*50/100 // n error max
    const userNote:number = (1 - nf/nc)*100 // 
    var Note:string = ""

    switch(true){
        case 50 >= userNote && userNote > 40:
            Note = "C"
            break
        
        case 70 >= userNote && userNote > 50:
            Note = "B"
            break
        
        case 90 >= userNote && userNote > 70:
            Note = "A"
            break
        
        case userNote > 90:
            Note = "A+"
            break
    }

    return (
        <div id="Certification-Card">
            <div id="Certification-menu">
                <ul
                    onClick={()=>{
                        navigate("/")
                    }}
                >
                    Accueil
                </ul>
                <ul>
                    <li><img src={PrintLogo} alt=""/></li>
                    <li><img src={DownloadLogo} alt="" /></li>
                </ul>
            </div>

            <div id="Certification-background">
                <img src={CertificatImage} alt="" />
                <div id="Certification-image">

                </div>

                <div id="Certification-content">
                    <div className="content">
                        <div className="about">
                            <ul>
                                <li>
                                    <label htmlFor="">Nom :</label>
                                    <input type="text" value={userName}/>
                                </li>
                                <li>
                                    <label htmlFor="">Prenom :</label>
                                    <input type="text" value={userFirstName}/>
                                </li>
                            </ul>
                        </div>
                        <div className="about">
                            <span>{Note}</span>
                            <p>{userNote}% des réponses corrects</p>
                        </div>
                    </div>
                    <div className="content">
                        <p>Aujourd’hui le {date.toLocaleDateString('fr-FR', {year:'numeric', month:'long', day:'numeric'})}, 
                            nous certifions que {userName} {userFirstName} a accompli son teste de câblage virtuel d’un Démarreur pour un moteur asynchrone triphasé.</p>
                    </div>
                    <div className="content">
                        <div className="User-Result">
                            <ul>
                                <li>
                                    <label htmlFor="">Connexion réalisé :</label>
                                    <input type="text" value={nc} />
                                </li>
                                <li>
                                    <label htmlFor="">Erreur(s) corrigé(s) :</label>
                                    <input type="text" value={nf} />
                                </li>
                            </ul>
                        </div>
                        <div className="User-Result">
                            <label htmlFor="">Durée du teste :</label>
                            <input type="text" value={laps} />
                        </div>
                    </div>
                    <div id="About-application">
                        <label htmlFor="">Application :</label>
                        <input type="text" value={"ElecSim"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Certification