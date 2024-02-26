import React, { useState } from 'react';
import style from '../style.scss';
import Photo from '../img/validate.svg';

function TipsComponents() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };
    return (
        <div className="tip-calculator" class="tip-calculator">
            <label>Nom de table</label>
        <input type="text" className="input-field" placeholder="cerise" />
            <label>Montant du pourboire</label>
        <input type="number" className="input-field" placeholder="3" />
    
        <div className="tip-amounts">
            <button className="tip-button">0.50</button>
            <button className="tip-button">1.00</button>
            <button className="tip-button">2.00</button>
        </div>
        <a class="main-button" onClick={openModal}><p>Ajouter le pourboire</p></a>   {/*bouton pour ouvrir la modale*/}

        {isModalOpen && (
            <div class="modal-tips">Le pourboire a été ajouté<img src={Photo}></img></div>
        )}
        </div>
    );
    }
      

export default TipsComponents;
