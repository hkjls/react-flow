import React from 'react';
import { useState } from 'react';
import Historic from './Historic';
import SimMotor from './UserTest/Tests/DefaultComponents';
import FreeSim from './UserTest/Tests/FreeSim';
import PanelSubject from './PanelSubject';
const MenuBar=({n, setN}:any) => {
  const [histVisible, setHistVisible] = useState("none");
  const [exe, setExe] = useState(false)
  return (
    <>
      <div id="menu">
        <ul id="menu-bar">
          <li className="menu-list"
            onClick={()=>{
              window.location.reload()
            }}
          >Nouveau</li>
          <li className="menu-list">Listes des Tests
              <ul>
                <li className="menu-list-list"
                  onClick={()=>{
                    setExe(false)
                  }}
                >
                  <FreeSim n={n} setN={setN}/>
                </li>
                <li className="menu-list-list"
                  onClick={()=>{
                    setExe(true)
                  }}
                >
                  <SimMotor n={n} setN={setN}/>
                </li>
              </ul>
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