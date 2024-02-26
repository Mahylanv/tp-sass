import React, { useEffect, useState } from 'react';
import { DateTime } from 'luxon';
import '../css/Header.css';
import '../style.scss';

const Header = () => {
    const [formattedDate, setFormattedDate] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const onClick = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const blurElement = document.querySelector('.blur');
        const menuButton = document.querySelector('.hamburger-menu');

        menuButton.addEventListener('click', () => {
            blurElement.classList.toggle('open', isOpen);
        });

        return () => {
            menuButton.removeEventListener('click', () => {
                blurElement.classList.toggle('open', isOpen);
            });
        };
    }, [isOpen]);


    useEffect(() => {
        const now = DateTime.local();

        const formatted = now.toLocaleString({
            weekday: 'long', // Jour de la semaine (complet)
            day: 'numeric', // Jour du mois
            month: 'short', // Mois (abrégé)
        });

        // Mettre à jour l'état avec la date formatée
        setFormattedDate(formatted);
    }, []);

    return (
        <div className="header">
            <div className="blur">
                <h1 className="date">{formattedDate}</h1>
                <h1>Titre page</h1>
            </div>
            <div className={`hamburger-menu ${isOpen ? 'open' : ''}`} onClick={onClick}>
                <span className="line line-1"></span>
                <span className="line line-2"></span>
            </div>
            {isOpen && (

                <div class="menu" className="menu">
                    <div class="lien">

                        <a class="Service"> <svg width="31" height="26" viewBox="0 0 31 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.4 3.05882C12.4 2.24757 12.7266 1.46955 13.308 0.895909C13.8893 0.322268 14.6778 0 15.5 0C16.3222 0 17.1107 0.322268 17.692 0.895909C18.2734 1.46955 18.6 2.24757 18.6 3.05882V4.95529C21.3694 5.63535 23.8281 7.21101 25.584 9.43087C27.3398 11.6507 28.2916 14.3869 28.2875 17.2028C28.2875 17.507 28.165 17.7988 27.947 18.0139C27.729 18.229 27.4333 18.3499 27.125 18.3499H3.875C3.56669 18.3499 3.271 18.229 3.05299 18.0139C2.83498 17.7988 2.7125 17.507 2.7125 17.2028C2.7125 11.2993 6.8479 6.34706 12.4 4.96906V3.05882ZM17.4375 8.41177C17.1292 8.41177 16.8335 8.53262 16.6155 8.74773C16.3975 8.96285 16.275 9.2546 16.275 9.55882C16.275 9.86304 16.3975 10.1548 16.6155 10.3699C16.8335 10.585 17.1292 10.7059 17.4375 10.7059C19.3797 10.7059 20.7591 11.6511 21.9108 13.2753C21.9983 13.3987 22.1096 13.5039 22.2384 13.5849C22.3671 13.6659 22.5107 13.721 22.6611 13.7472C22.8114 13.7734 22.9655 13.7702 23.1145 13.7376C23.2636 13.705 23.4047 13.6438 23.5298 13.5575C23.6549 13.4711 23.7615 13.3613 23.8435 13.2343C23.9256 13.1072 23.9815 12.9655 24.0081 12.8172C24.0346 12.6688 24.0313 12.5168 23.9983 12.3697C23.9653 12.2226 23.9033 12.0834 23.8157 11.96C22.3742 9.92588 20.3608 8.41177 17.4375 8.41177ZM0 22.9412C0 22.1299 0.326606 21.3519 0.907969 20.7783C1.48933 20.2046 2.27783 19.8824 3.1 19.8824H27.9C28.7222 19.8824 29.5107 20.2046 30.092 20.7783C30.6734 21.3519 31 22.1299 31 22.9412C31 23.7524 30.6734 24.5305 30.092 25.1041C29.5107 25.6777 28.7222 26 27.9 26H3.1C2.27783 26 1.48933 25.6777 0.907969 25.1041C0.326606 24.5305 0 23.7524 0 22.9412Z" fill="#F24E1E" />
                        </svg>Service</a>
                        <a class="administrateur"> <svg width="31" height="25" viewBox="0 0 31 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M30.1427 13.2373L24.5675 11.0396C24.3677 10.96 23.9562 10.8562 23.4898 11.0396L17.9122 13.2373C17.3891 13.4375 17.05 13.9209 17.05 14.4092C17.05 19.8584 20.3801 23.6279 23.4873 24.8535C23.9536 25.0366 24.3592 24.9329 24.5651 24.8535C27.0475 23.9209 31 20.5322 31 14.4092C31 13.9209 30.6609 13.4375 30.1427 13.2373ZM24.025 22.5781V13.3398L28.6508 15.165C28.3795 19.4238 25.7009 21.7773 24.025 22.5781ZM10.85 12.5C14.2745 12.5 17.05 9.70166 17.05 6.25C17.05 2.79834 14.2745 0 10.85 0C7.42547 0 4.65 2.79834 4.65 6.25C4.65 9.70166 7.42547 12.5 10.85 12.5ZM15.5291 15.1514C14.817 14.9561 14.0759 14.8438 13.3058 14.8438H8.39422C3.75923 14.8438 0 18.6377 0 23.3105C0 24.2432 0.75175 25 1.67884 25H20.0192C20.1715 25 20.3082 24.951 20.4484 24.9126C17.9073 22.9395 15.6986 19.5459 15.5291 15.1514Z" fill="black" />
                        </svg>
                            Administrateur</a>

                    </div>

                    <a href="#" class="close_service">
                        Fermer le service
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.24996 1.83331H16.5C17.5083 1.83331 18.3333 2.65831 18.3333 3.66665V18.3333C18.3333 19.3416 17.5083 20.1666 16.5 20.1666H8.24996C7.24163 20.1666 6.41663 19.3416 6.41663 18.3333V16.5H8.24996V18.3333H16.5V3.66665H8.24996V5.49998H6.41663V3.66665C6.41663 2.65831 7.24163 1.83331 8.24996 1.83331Z" fill="#FF4242" />
                            <path d="M9.24917 14.2909L10.5417 15.5834L15.125 11L10.5417 6.41669L9.24917 7.70919L11.6142 10.0834H2.75V11.9167H11.6142L9.24917 14.2909Z" fill="#FF4242" />
                        </svg>
                    </a>

                </div>
            )}
        </div>
    );
};

export default Header;
