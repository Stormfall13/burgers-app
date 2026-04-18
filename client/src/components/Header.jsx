import logo from '../assets/logo.png';
import burger__icon from '../assets/burger__icon.svg';
import close from '../assets/close.svg';

import { useState } from 'react';

const dataMenu = [
   {
      id: 1,
      nameLink: 'HOME',
      link: '#',
   },
   {
      id: 2,
      nameLink: 'PAGES',
      link: '#',
   },
   {
      id: 3,
      nameLink: 'OUR OFFER',
      link: '#',
   },
   {
      id: 4,
      nameLink: 'PRICING',
      link: '#',
   },
   {
      id: 5,
      nameLink: 'SHOP',
      link: '#',
   },
]

const Header = () => {

   const [openedMenu, setOpenedMenu] = useState(true);
   
   const handleLinkClick = (e) => {
      setOpenedMenu(true); // Закрываем меню
   };

   return (
      <header className="header">
         <div className="burger__btn" onClick={() => setOpenedMenu(false)}>
            <img src={burger__icon} alt="burger btn" />
         </div>
         <div className="logo">
            <img src={logo} alt="logo" />
         </div>
         <nav className='header__menu' style={{
            transform: `translate(${openedMenu ? '100vh' : '0vh'})`
         }}>
            <div className="close__btn" onClick={() => setOpenedMenu(true)}>
               <img src={close} alt="close btn" />
            </div>
            <ul>
               {dataMenu.map(item => (
                  <li key={item.id}>
                     <a href={item.link} onClick={handleLinkClick}>
                        {item.nameLink}
                     </a>
                  </li>
               ))}
            </ul>
         </nav>
         <button className="header__btn">OUR NOW</button>
      </header>
   )
}

export default Header;
