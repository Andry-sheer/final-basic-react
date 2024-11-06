import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../scss/style.scss';

const Header = () => {
  const [activeLink, setActiveLink] = useState('EN');
  const [activeBurger, setActiveBurger] = useState(false);
  const navigate = useNavigate();

  const routes = {
    home: '/',
    services: '/services',
    about: '/about',
    team: '/team',
    publications: '/publications',
    contacts: '/contacts'
  }

  const handleClick = (path) => {
    navigate(path);
  }

  const handleLinkClick = (lang) => {
    setActiveLink(lang);
  }

  const handleButtonBurger = () => {
    setActiveBurger(true);
  }

  return (
    <header className="header">
    <div className="container header__container">
      <div className="header__inner">
        <ul className="header__langs">
          {['UA', 'KR', 'EN'].map((lang) => (
              <li key={lang} className="header__langs-item">
                <a href="/#"
                    className={`header__langs-link ${activeLink === lang ? 'active' : ''}`}
                    onClick={(event) => {
                    event.preventDefault();
                    handleLinkClick(lang);
                    }}>{lang}
                </a>
              </li>
            ))}
        </ul>
        <span className="dotted"></span>
        <p className="header__address">Kyiv, Mechanics str., 14/1</p>
        <span className="dotted"></span>
        <a className="header__phone" href="tel:0800211927">0800 211 927</a>
        <span className="dotted"></span>
        <a className="header__social" href="http://facebook.com" aria-label="faceBook link">
          <svg className="header__svgIcon">
            <use href="#faceBook"></use>
          </svg>
        </a>
      </div>

      <div className="header__box">
        <div className="header__box-logo" onClick={()=> handleClick(routes.home)}>
          <svg>
            <use href='#Logo'></use>
          </svg>
        </div>
          <div onClick={handleButtonBurger} className="header__box-burger">
            <span></span>
          </div>
      </div>
      


      <nav className={`header__nav ${activeBurger === true ? 'active' :  ''}`}>
        <div onClick={()=> {setActiveBurger(false)}} className="header__nav-close"></div>
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <p className="header__nav-link" onClick={()=> handleClick(routes.about)}>about us</p>
          </li>
          <li className="header__nav-item">
            <p className="header__nav-link" onClick={()=> handleClick(routes.services)}>services</p>
          </li>
          <li className="header__nav-item">
            <p className="header__nav-link" onClick={()=> handleClick(routes.team)}>team</p>
          </li>
          <li className="header__nav-item">
            <p className="header__nav-link" onClick={()=> handleClick(routes.publications)}>publications</p>
          </li>
          <li className="header__nav-item">
            <p className="header__nav-link" onClick={()=> handleClick(routes.contacts)}>contact</p>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  )
}

export default Header;