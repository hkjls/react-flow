import React from 'react';

const MenuBar: React.FC = () => {
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
    <div style={{
        position: 'absolute',
        display: 'flex',
        backgroundColor: '#fff',
        borderRadius: 15,
        flexDirection: 'column',
        gap:20,
        zIndex:5000,

    }}>
      <button style={{
            padding: 5,
            border: 'none',
            backgroundColor: 'transparent',
            cursor: 'pointer',
            color: '#000',
            fontSize: 20,
            fontWeight: 600,
            textAlign: 'left',
            width: 200,
            borderRadius: 15,
      }} onClick={() => handleMenuClick('fichier')} className="hover:underline">Test 1</button>
      <button style={{
            padding: 5,
            border: 'none',
            backgroundColor: 'transparent',
            cursor: 'pointer',
            color: '#000',
            fontSize: 20,
            fontWeight: 600,
            textAlign: 'left',
            width: 200,
            borderRadius: 15,
      }} onClick={() => handleMenuClick('nouveau')} className="hover:underline">Test 2</button>
      <button style={{
            padding: 5,
            border: 'none',
            backgroundColor: 'transparent',
            cursor: 'pointer',
            color: '#000',
            fontSize: 20,
            fontWeight: 600,
            textAlign: 'left',
            width: 200,
            borderRadius: 15,
      }} onClick={() => handleMenuClick('quit')} className="hover:underline">Test 3</button>
    </div>
  );
};

export default MenuBar;