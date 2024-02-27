import React from 'react';
import style from '../style.scss';

function Bouton({ text, icon, onClick }) {
  const handleClick = (e) => {
    e.preventDefault(); // Empêche le navigateur de naviguer vers /#
    onClick(); // Appelle la fonction onClick passée en props
  };
  return (
    <a class="mainBtn" className={style.mainBtn} onClick={handleClick}>
      {icon ? ( // change le bouton selon la page
        <p>{text} <img src={icon} alt="Icon" /></p>
      ) : (
        <p>{text}</p>
      )}
    </a>
  );
}

export default Bouton;
