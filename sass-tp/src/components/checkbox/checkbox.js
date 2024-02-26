import React from 'react';
import style from '../../style.scss';
import Photo from '../../img/profil.svg';


function CheckboxComponents() {
    
  return (
    <div class="checkbox-container" className={style['checkbox-container']}> {/* Corrected class name access */}
      <ul>
        <li><img src={Photo}></img><p>Aaron James</p><input type="checkbox" /></li>
        <li><img src={Photo}></img><p>Amanda Wallace</p><input type="checkbox" /></li>
        <li><img src={Photo}></img><p>Angela Danger</p><input type="checkbox" /></li>
        <li><img src={Photo}></img><p>Abella white</p><input type="checkbox" /></li>
        <li><img src={Photo}></img><p>Darlene Robertsone</p><input type="checkbox" /></li>
        <li><img src={Photo}></img><p>Fred Davis</p><input type="checkbox" /></li>
        <li><img src={Photo}></img><p>Aaron Smith</p><input type="checkbox" /></li>
        <li><img src={Photo}></img><p>Aaron Smith</p><input type="checkbox" /></li>
      </ul>
    </div>
  );
}

export default CheckboxComponents;
