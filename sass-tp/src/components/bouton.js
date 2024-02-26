import React from 'react';
import style from '../style.scss';

function Bouton({ text, icon }) {
  return (
    <a class="mainBtn" className={style.mainBtn} href="#">
      {icon ? ( // change le bouton selon la page
        <p>{text} <img src={icon} alt="Icon" /></p>
      ) : (
        <p>{text}</p>
      )}
    </a>
  );
}

export default Bouton;
