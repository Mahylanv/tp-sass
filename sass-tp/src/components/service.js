import React from 'react';
import style from '../style.scss';

function ServiceComponents() {
  return (
    <div className={style['recap-container']}>
      <h2>Service</h2>
      <div className={style.toggle}> 
        <input type="checkbox" id="btn" />
        <label htmlFor="btn"> 
          <span className={style.track}></span> 
          <span className={style.thumb}>
            <span className={style.eye}></span>
          </span>
        </label>
      </div>
    </div>
  );
}

export default ServiceComponents;
