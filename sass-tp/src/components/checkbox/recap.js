import React from 'react';
import style from '../../style.scss';
import Photo from '../../img/profil.svg';

function RecapComponents() {
  return (
    <div class="recap-container" className={style['recap-container']}> {/* Corrected class name access */}
    <h2>Employés sélectionnés</h2>
      <ul>
        <li><img src={Photo}></img><p>Aaron James</p><p class="tag">cuisine</p></li>
        <hr></hr>
        <li><img src={Photo}></img><p>Amanda Wallace</p><p class="tag">cuisine</p></li>
        <hr></hr>
        <li><img src={Photo}></img><p>Angela Danger</p><p class="tag">cuisine</p></li>
        <hr></hr>
        <li><img src={Photo}></img><p>Abella white</p><p class="tag">cuisine</p></li>
        <hr></hr>
        <li><img src={Photo}></img><p>Fred Davis</p><p class="tag">cuisine</p></li>
        <hr></hr>
        <li><img src={Photo}></img><p>Aaron Smith</p><p class="tag">cuisine</p></li>
        <hr></hr>
        <li><img src={Photo}></img><p>Aaron Smith</p><p class="tag">cuisine</p></li>
      </ul>
    </div>
  );
}

export default RecapComponents;
