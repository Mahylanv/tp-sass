import './App.css';
import  CheckboxComponents from'./components/checkbox/checkbox';
import Bouton from './components/bouton';
import TipsComponents from './components/pourboire';
import ServiceComponents from './components/service';
import RecapComponents from './components/checkbox/recap';
import arrow from '../src/img/arrow.svg';
import Header from './components/header';

function App() {
  return (
      <header>
        <Header />
        <CheckboxComponents></CheckboxComponents>
        {/* Je n'ai pas réussi a mettre les liens entre les pages mon router-dom a pas marché il faut décommenter les components */}
        {/* <RecapComponents></RecapComponents> */}
        {/* <TipsComponents></TipsComponents> */}
        {/* <ServiceComponents></ServiceComponents> */}
        <Bouton text="Suivant" icon={arrow} />
      </header>
  );
}

export default App;
