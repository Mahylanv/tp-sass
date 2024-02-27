import React from 'react';
import style from '../../style.scss';
import '../../style.scss';
import Photo from '../../img/profil.svg';
import { useDarkMode } from '../DarkModeProvider';


import useLocalStorage from "use-local-storage";
import { Toggle } from "../darkmode";


function RecapComponents() {

  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);

  // const toggleDarkMode = () => {
  //   setIsDark(!isDark);
  // };

  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    // <div class="recap-container" className={style['recap-container']}> {/* Corrected class name access */}
    <div className={`recap-container ${isDark ? 'darkmode' : ''}`}>
      <h2>Employés sélectionnés</h2>
      <div className='employé'>

        <ul>
          <li><img src={Photo}></img><p>Aaron James</p><p class="tag">cuisine</p></li>
          <hr></hr>
          <li><img src={Photo}></img><p>Amanda Wallace</p><p class="tag">cuisine</p></li>
          <hr></hr>
          <li><img src={Photo}></img><p>Angela Danger</p><p class="tag">cuisine</p></li>
          <hr></hr>
          <li><img src={Photo}></img><p>Abella white</p><p class="tag">salle</p></li>
          <hr></hr>
          <li><img src={Photo}></img><p>Fred Davis</p><p class="tag">cuisine</p></li>
          <hr></hr>
          <li><img src={Photo}></img><p>Aaron Smith</p><p class="tag">cuisine</p></li>
          <hr></hr>
          <li><img src={Photo}></img><p>Aaron Smith</p><p class="tag">cuisine</p></li>
        </ul>
      </div>
      <div className='toogle'>

        <h2>Service</h2>
        <div className="darkmode" data-theme={isDark ? "dark" : "light"}>
          <Toggle isChecked={isDark} handleChange={toggleDarkMode} />
        </div>
      </div>
    </div>
  );
}

export default RecapComponents;
