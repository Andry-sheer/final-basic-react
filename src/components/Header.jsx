import '../scss/style.scss';

const Header = () => {
  return (
    <header className="header">
    <div className="container header__container">
      <div className="header__inner">
        <ul className="header__langs">
          <li className="header__langs-item">
            <a className="header__langs-link" href="#">UA</a>
          </li>
          
          <li className="header__langs-item">
            <a className="header__langs-link" href="#">KR</a>
          </li>

          <li className="header__langs-item">
            <a className="header__langs-link active" href="#">EN</a>
          </li>
        </ul>
        <span className="dotted"></span>
        <p className="header__address">Kyiv, Mechnikova str., 14/1</p>
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
        <a className="header__box-logo" href="#" aria-label="Main logo-white">
          <svg>
            <use href='#Logo'></use>
          </svg>
        </a>

          <div className="header__box-burger">
            <span></span>
        </div>

      </div>

      <nav className="header__nav">
        <div className="header__nav-close"></div>
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <a className="header__nav-link" href="./pages/about.html">about us</a>
          </li>
          <li className="header__nav-item">
            <a className="header__nav-link" href="./pages/services.html">services</a>
          </li>
          <li className="header__nav-item">
            <a className="header__nav-link" href="./pages/team.html">team</a>
          </li>
          <li className="header__nav-item">
            <a className="header__nav-link" href="./pages/publications.html">publications</a>
          </li>
          <li className="header__nav-item">
            <a className="header__nav-link" href="./pages/contact.html">contact</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  )
}

export default Header;