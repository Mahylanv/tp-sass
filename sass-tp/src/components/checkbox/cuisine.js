import React from 'react';
import style from '../../style.scss';
import Photo from '../../img/profil.svg';


function KitchenComponents() {
    
  return (
    <div class="checkbox-container" className={style['checkbox-container']}> {/* Corrected class name access */}
      <ul>
        <li><img src={Photo}></img><p>Agnes Liles</p><input type="checkbox" /></li>
        <li><img src={Photo}></img><p>Kenneth Burnett</p><input type="checkbox" /></li>
        <li><img src={Photo}></img><p>Gabriella Lopez</p><input type="checkbox" /></li>
        <li><img src={Photo}></img><p>Jawad Abbas</p><input type="checkbox" /></li>
        <li><img src={Photo}></img><p>Abdel-Kader Khelfoun</p><input type="checkbox" /></li>
        <li><img src={Photo}></img><p>Fred Davis</p><input type="checkbox" /></li>
        <li><img src={Photo}></img><p>Fabrice Piel</p><input type="checkbox" /></li>
        <li><img src={Photo}></img><p>Aaron Smith</p><input type="checkbox" /></li>
      </ul>
    </div>
  );
}

export default KitchenComponents;
