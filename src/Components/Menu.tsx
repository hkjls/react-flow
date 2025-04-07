import React from 'react';
import { useState } from 'react';
import Historic from './Historic';

const MenuBar: React.FC = () => {
  const [histVisible, setHistVisible] = useState("none");
  const handleMenuClick = (action: string) => {
    switch (action) {
      case 'fichier':
        console.log('Fichier sélectionné');
        break;
      case 'nouveau':
        console.log('Nouveau Dossier sélectionné');
        break;
      case 'quit':
        console.log('Quitter sélectionné');
        // Ici tu peux déclencher une fermeture ou une redirection
        break;
      default:
        console.log('Action inconnue');
    }
  };

  return (
    <>
      <div id="menu">
        <ul id="menu-bar">
          <li className="menu-list">Nouveau</li>
          <li className="menu-list">Listes des Tests
              <ul>
                <li className="menu-list-list">Test_Elec 1</li>
                <li className="menu-list-list">Test_Elec 2</li>
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