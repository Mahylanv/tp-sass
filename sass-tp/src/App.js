import React, { useState } from 'react';
import './App.css';
import CheckboxComponents from './components/checkbox/checkbox';
import KitchenComponents from './components/checkbox/cuisine';
import RecapComponents from './components/checkbox/recap';
import TipsComponents from './components/pourboire';
import Bouton from './components/bouton';
import Header from './components/header';
import arrow from '../src/img/arrow.svg';

function App() {
  const [step, setStep] = useState(0);
  const [activeTab, setActiveTab] = useState('salle');

  const handleTabClick = (tab) => {
    if (step < 3) { // S'assurer que les onglets ne sont cliquables que avant l'étape de service
      setActiveTab(tab);
    }
  };

  const handleNextClick = () => {
    if (step === 2) {
      setStep(step + 1);
    } else {
      setStep(step + 1);
    }
  };

  const renderComponent = () => {
    if (step === 3) return <TipsComponents />;

    switch(activeTab) {
      case 'salle':
        switch(step) {
          case 0: return <CheckboxComponents />;
          case 1: return <KitchenComponents />;
          case 2: return <RecapComponents />;
          default: return null;
        }
      case 'cuisine':
        return <KitchenComponents />;
      case 'service':
        return <RecapComponents />;
      default:
        return null;
    }
  };

  const buttonText = step === 2 ? 'Démarrer le service !' : 'Suivant';

  const isActive = (tabName) => activeTab === tabName ? 'onglet onglet-active' : 'onglet';

  return (
    <div>
      <Header />
      {step < 3 && (
        <div className="tabs">
          <button className={isActive('salle')} onClick={() => handleTabClick('salle')}>Salle</button>
          <button className={isActive('cuisine')} onClick={() => handleTabClick('cuisine')}>Cuisine</button>
          <button className={isActive('service')} onClick={() => handleTabClick('service')}>Service</button>
        </div>
      )}

      {renderComponent()}

      {step < 3 && (
        <Bouton text={buttonText} onClick={handleNextClick} icon={buttonText === 'Suivant' ? arrow : undefined}
        />
      )}
    </div>
  );
}

export default App;
