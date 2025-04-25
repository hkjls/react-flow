import React, { ReactElement, useState } from "react";
import images from '../images/Motor'

const PanelSubject=():ReactElement=>{
    const [nimg, setNimg] = useState(1)
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
        </div>
    )
}

export default PanelSubject