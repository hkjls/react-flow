import Numeric from "../icons/image/ICONEACTEMIUM.png";
import { useAuth } from ".";
import { useState } from "react";

const Auth=()=>{
    const {user, login} = useAuth()
    const [pwrd, setPwrd] = useState<string | undefined>()
    const [admin, setAdmin] = useState<string | undefined>()
    return (
            <div id="auth">
                <div id="logo-actemium" className="auth-content">
                    <div>
                        <img src={Numeric} alt="" />
                        <h2>Actemium</h2>
                    </div>
                </div>
                <div id="user-auth" className="auth-content">
                    <div>
                        <ul id="user-auth-field" >
                            <li className="user-auth-info">
                                <label htmlFor="">Pseudo :</label>
                                <input 
                                    type="text"
                                    onChange={(e)=>{
                                        setAdmin(e.target.value)
                                    }}
                                />
                            </li>
                            <li className="user-auth-info">
                                <label htmlFor="">Mot de Passe :</label>
                                <input 
                                    type="password"
                                    onChange={(e)=>{
                                        setPwrd(e.target.value)
                                    }}
                                />
                            </li>
                        </ul>
                    </div>
                </div>
                <div id="submit" className="auth-content">
                    <button className="btn-submit"
                        onClick={()=>{
                            login({
                                name: "Mohammed",
                                role: "user",
                                password: "admin"
                            })
                        }}
                    >Utilisateur</button>
                    <button className="btn-submit"
                        onClick={()=>{
                            
                            login(
                                {
                                    name: admin,
                                    role: "admin",
                                    password:pwrd
                                }
                            )
                        }}
                    >Admin</button>
                </div>
            </div>
    )
}

export default Auth