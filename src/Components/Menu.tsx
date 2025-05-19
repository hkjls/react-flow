import { useState } from 'react';
import Historic from './Historic';
import SimMotor from './UserTest/Tests/DefaultComponents';
import SecurCablage from './UserTest/Tests/SecureCablaRelaisComponents';
import FreeSim from './UserTest/Tests/FreeSim';
import PanelSubject from './PanelSubject';
import { useAuth } from '../auth';
import { useTest } from '../Context/exo_type';
import { useNavigate } from 'react-router-dom';

const MenuBar=({n, setN}:any) => {
  const {test_choice, user, setMountEdge, pannelS, setPannelS, setEmptyCertificat} = useTest()
  const [histVisible, setHistVisible] = useState("none");
  // const [exe, setExe] = useState(false)
  const { timeHandle} = useAuth()
  const navigate = useNavigate()

  const f_choice = test_choice.handleChoice

  return (
    <>
      <div id="menu">
        <ul id="menu-bar">
          <li className="menu-list"
            onClick={()=>{
              setN([])
              setPannelS(false)
              timeHandle()
              setMountEdge(0)
            }}
          >Nouveau</li>
          <li className="menu-list">Listes des Tests
              <ul>
                <li className="menu-list-list"
                  onClick={()=>{
                    setPannelS(false)
                    timeHandle()
                    setMountEdge(0)
                    f_choice("free")
                  }}
                >
                  <FreeSim n={n} setN={setN}/>
                </li>
                <li className="menu-list-list"
                  onClick={()=>{
                    setPannelS(true)
                    f_choice("Démarreur pour un moteur")
                    timeHandle()
                    setMountEdge(0)
                  }}
                >
                  <SimMotor n={n} setN={setN}/>
                </li>
                <li className="menu-list-list"
                  onClick={()=>{
                    setPannelS(true)
                    f_choice("Secure Cablage")
                    timeHandle()
                    setMountEdge(0)
                  }}
                >
                  <SecurCablage n={n} setN={setN} />
                </li>
              </ul>
          </li>
          {/*           
          <li className="menu-list"
            onClick={() => setHistVisible(histVisible === "none" ? "block" : "none")}
          >Historique</li> */}
          <li className="menu-list">
            <span>Certification</span>
            <ul>
              <li className="certification"
                  onClick={()=>{
                    user("******", "********")
                    navigate("/Certification")
                    setEmptyCertificat(true)
                  }}
              >Voir
              </li>
              {/* <li className="certification">Détails</li> */}
            </ul>
          </li>
          <li className='menu-list'
          onClick={()=>{
            window.location.reload()
          }}>
            Deconnexion
          </li>
        </ul>
        
      {pannelS ? <PanelSubject/> : <div></div>}
      </div>
      <Historic disp={histVisible} />
    </>
  );
};

export default MenuBar;