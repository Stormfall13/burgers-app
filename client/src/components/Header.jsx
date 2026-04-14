import logo from '../assets/logo.png';

const Header = () => {
   return (
      <header className="header">
         <div className="logo">
            <img src={logo} alt="logo" />
         </div>
         <nav className='header__menu'>
            <ul>
               <li><a href="#">HOME</a></li>
               <li><a href="#">PAGES</a></li>
               <li><a href="#">OUR OFFER</a></li>
               <li><a href="#">PRICING</a></li>
               <li><a href="#">SHOP</a></li>
            </ul>
         </nav>
         <button className="header__btn">OUR NOW</button>
      </header>
   )
}

export default Header;
