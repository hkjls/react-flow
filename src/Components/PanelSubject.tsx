import React, { ReactElement, useState } from "react";
import images from '../images/Motor'
import Numerika from '../icons/image/ICONEACTEMIUM.png'
import { useTest } from "../Context/exo_type";
import { useNavigate } from "react-router-dom";

const PanelSubject=():ReactElement=>{
    const [nimg, setNimg] = useState(1)
    const {user, result} = useTest()

    const navigate = useNavigate()

    const get_userInfo=(cls:string)=>{
        var userInfo=document.querySelectorAll<HTMLInputElement>(cls)
        const name = userInfo[0].value
        const firstname = userInfo[1].value
        
        user(name, firstname)
        navigate("/Certification")
        result()
    }

    return(
        <div id="panel-subject">
            <h2>Commande</h2>
            <div id="Circuit-Image">
                <img 
                    src={`${images['./Capture_'+nimg+'.png']}`} 
                    width={190}
                    style={{
                        margin: "2px"
                    }}
                />
            </div>
            <div id="image-scroll-pannel">
                <ul>
                    <li
                        onClick={
                            ()=>{
                                if(nimg > 1){
                                    setNimg(nimg - 1)
                                }
                            }
                        }
                    >Prec</li>
                    <li
                        onClick={
                            ()=>{
                                if(nimg < Object.entries(images).length){
                                    setNimg(nimg + 1)
                                }
                            }
                        }
                    >Suiv</li>
                </ul>
            </div>
            {
                nimg >= Object.entries(images).length ? 
                <div id="Certificat-form">
                    <div>
                        <img src={Numerika} alt="" />
                        <h3>Actemium</h3>
                    </div>
                    <p>
                        Remplir le formulaire puis confirmer si vous avez terminé
                    </p>
                    <form action="#" method="get" >
                        <ul>
                            <li>
                                <label htmlFor="">Nom :</label>
                                <input type="text" className="forCertificat"/>
                            </li>
                            <li>
                                <label htmlFor="">Prenom :</label>
                                <input type="text" className="forCertificat"/>
                            </li>
                        </ul>
                        <button type="button"
                            onClick={()=>{
                                get_userInfo(".forCertificat")
                            }}
                        >Confirmer</button>
                    </form>
                </div> : ""
            }
        </div>
    )
}

export default PanelSubject