import React from 'react';
import { useState } from 'react';
import Historic from './Historic';
import SimMotor from './UserTest/Tests/DefaultComponents';
import FreeSim from './UserTest/Tests/FreeSim';
import PanelSubject from './PanelSubject';
import { useAuth } from '../auth';
import { useTest } from '../Context/exo_type';

const MenuBar=({n, setN}:any) => {
  const {handleChoice} = useTest()
  const [histVisible, setHistVisible] = useState("none");
  const [exe, setExe] = useState(false)
  const { timeHandle} = useAuth()

  return (
    <>
      <div id="menu">
        <ul id="menu-bar">
          <li className="menu-list"
            onClick={()=>{
              setN([])
              setExe(false)
              timeHandle()
            }}
          >Nouveau</li>
          <li className="menu-list">Listes des Tests
              <ul>
                <li className="menu-list-list"
                  onClick={()=>{
                    setExe(false)
                    handleChoice("free")
                  }}
                >
                  <FreeSim n={n} setN={setN}/>
                </li>
                <li className="menu-list-list"
                  onClick={()=>{
                    setExe(true)
                    handleChoice("motor")
                  }}
                >
                  <SimMotor n={n} setN={setN}/>
                </li>
              </ul>
          </li>
          <li className='menu-list'
          onClick={()=>{
            window.location.reload()
          }}>
            Deconnexion
          </li>
          {/*           
          <li className="menu-list"
            onClick={() => setHistVisible(histVisible === "none" ? "block" : "none")}
          >Historique</li> */}
        </ul>
        
      {exe ? <PanelSubject/> : <div></div>}
      </div>
      <Historic disp={histVisible} />
    </>
  );
};

export default MenuBar;