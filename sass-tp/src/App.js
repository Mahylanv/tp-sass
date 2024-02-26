import './App.css';
import  CheckboxComponents from'./components/checkbox/checkbox';
import Bouton from './components/bouton';
import TipsComponents from './components/pourboire';
import ServiceComponents from './components/service';
import RecapComponents from './components/checkbox/recap';
import arrow from '../src/img/arrow.svg';
function App() {
  return (
      <header>
        <CheckboxComponents></CheckboxComponents>
        {/* <RecapComponents></RecapComponents> */}
        {/* <TipsComponents></TipsComponents> */}
        {/* <ServiceComponents></ServiceComponents> */}
        <Bouton text="Suivant" icon={arrow} />
      </header>
  );
}

export default App;
