import logo from '../assets/logo.png';
import email from '../assets/email.svg';
import global from '../assets/global.svg';

import facebook from '../assets/facebook.png';
import twitter from '../assets/twitter.png';
import instagram from '../assets/instagram.png';
import linkedin from '../assets/linkedin.png';

const dataColMenuFooter = [
  {
    id: 1,
    title: 'Our Menu',
    colMenu: [
      {
        id: 1,
        name: 'Breakfast',
        link: '#',
      },
      {
        id: 2,
        name: 'Lunce',
        link: '#',
      },
      {
        id: 3,
        name: 'Dinner',
        link: '#',
      },
    ]
  },
  {
    id: 2,
    title: 'Information',
    colMenu: [
      {
        id: 1,
        name: 'About Us',
        link: '#',
      },
      {
        id: 2,
        name: 'Testimotial',
        link: '#',
      },
      {
        id: 3,
        name: 'Event',
        link: '#',
      },
    ]
  },
  {
    id: 3,
    title: 'Useful Links',
    colMenu: [
      {
        id: 1,
        name: 'Services',
        link: '#',
      },
      {
        id: 2,
        name: 'Support',
        link: '#',
      },
      {
        id: 3,
        name: 'Conditions',
        link: '#',
      },
    ]
  },
]

const dataSicoal = [
  {
    id: 1,
    img: facebook,
    link: '#'
  },
  {
    id: 2,
    img: twitter,
    link: '#'
  },
  {
    id: 3,
    img: instagram,
    link: '#'
  },
  {
    id: 4,
    img: twitter,
    link: '#'
  },
]

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer__wrapp">
        <div className="left__col">
          <div className="logo__footer">
            <img src={logo} alt="logo footer" />
          </div>
          <div className="contact__wrapp">
            <div className="contact__wrapper">
              <div className="icon__contact">
                <img src={email} alt="email icon" />
              </div>
              <a href="#" className='link__contact'>fastfood_usa@gmail.com</a>
            </div>
            <div className="contact__wrapper">
              <div className="icon__contact">
                <img src={global} alt="global icon" />
              </div>
              <a href="#" className='link__contact'>www.fastfood_usa.com</a>
            </div>
          </div>
        </div>
        <div className="col__menu-wrapp">
          {dataColMenuFooter.map(item => (
            <div key={item.id}>
              <p className="title__col-menu">{item.title}</p>
              
              <div className="links__wrapp">
                {item.colMenu.map(itemMenu => (
                  <a href={itemMenu.link} key={itemMenu.id}>
                    {itemMenu.name}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="social__wrapp">
          <p className="social__title">Social Handles</p>
          <div className="social__wrapper">
            {dataSicoal.map(item => (
              <a href={item.link} className="link__social" key={item.id}>
                <img src={item.img} alt="img social" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
