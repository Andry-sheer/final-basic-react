import '../scss/style.scss';
import hillel from '../assets/images/hillel.png';
import wannabiz from '../assets/images/wannabiz.png';
import tapgerine from '../assets/images/tapgerine.png';
import dlook from '../assets/images/3dlook.png';
import orangear from '../assets/images/orangear.png';
import adtelligent from '../assets/images/adtelligent.png';
import clickky from '../assets/images/clickky.png';
import ecoLeasing from '../assets/images/eco-leasing.png';
import ingratek from '../assets/images/ingratek.png';
import cityPar from '../assets/images/city-par.png';
import artprint from '../assets/images/artprint.png';
import ultimatecard from '../assets/images/ultimatecard.png';


const Partners = () => {
  return (
    <section className="partners">
    <div className="partners__container">
      <h3 className="partners__title">They already trust us</h3>
      <div className="partners__container-inner">
        <div className="partners__images">
          <img src={hillel} alt="partner hillel"/>
        </div>
        <div className="partners__images">
          <img src={wannabiz} alt="partner wannabiz"/>
        </div>
        <div className="partners__images">
          <img src={tapgerine} alt="partner tapgerine"/>
        </div>
        <div className="partners__images">
          <img src={dlook} alt="partner 3dlook"/>
        </div>
        <div className="partners__images">
          <img src={orangear} alt="partner orangear"/>
        </div>
        <div className="partners__images">
          <img src={adtelligent} alt="partner adtelligent"/>
        </div>
        <div className="partners__images">
          <img src={clickky} alt="partner clickky"/>
        </div>
        <div className="partners__images">
          <img src={ecoLeasing} alt="partner eco-leasing"/>
        </div>
        <div className="partners__images">
          <img src={ingratek} alt="partner ingratek"/>
        </div>
        <div className="partners__images">
          <img src={cityPar} alt="partner city-park"/>
        </div>
        <div className="partners__images">
          <img src={artprint} alt="partner artprint"/>
        </div>
        <div className="partners__images">
          <img src={ultimatecard} alt="partner ultimatecard"/>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Partners;