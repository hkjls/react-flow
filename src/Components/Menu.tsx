import React from 'react';
import { useState } from 'react';
import Historic from './Historic';
import SimMotor from './UserTest/Tests/DefaultComponents';
import FreeSim from './UserTest/Tests/FreeSim';

const MenuBar=({n, setN}:any) => {
  const [histVisible, setHistVisible] = useState("none");
  return (
    <>
      <div id="menu">
        <ul id="menu-bar">
          <li className="menu-list">Nouveau</li>
          <li className="menu-list">Listes des Tests
              <ul>
                <li className="menu-list-list">
                  <FreeSim n={n} setN={setN}/>
                </li>
                <li className="menu-list-list">
                  <SimMotor n={n} setN={setN}/>
                </li>
                <li className="menu-list-list">Test_Elec 3</li>
              </ul>
          </li>
          
          <li className="menu-list"
            onClick={() => setHistVisible(histVisible === "none" ? "block" : "none")}
          >Historique</li>
        </ul>
      </div>
      <Historic disp={histVisible} />
    </>
  );
};

export default MenuBar;