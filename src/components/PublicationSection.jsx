import '../scss/style.scss';
import public_1 from '../assets/images/Publication-1.jpg';
import public_2 from '../assets/images/Publication-2.jpg';
import public_3 from '../assets/images/Publication-3.jpg';

const PublicationSection = () => {
  return (
    <section className="publications">
    <div className="container publications__container">
      <header className="publications__header">
        <a href="./pages/publications.html" className="publications__link">publications</a>
        <h2 className="publications__title">We have something to tell</h2>
      </header>
      <div className="publications__body">

        <article className="publications__card">
          <div className="piblications__card-image">
            <img src={public_1} alt="publication"/>
          </div>
          <div className="publications__card-inner">
            <a className="publications__card-title" href="./pages/publications/publications-one.html">
            Equity associate
            </a>
            <p className="publications__card-date">April 22</p>
            <p className="publications__card-description">I'm a jun on projects. 
              I am a co-owner of a law firm. How it happened. 
              Before entering my parents told me that if I…
            </p>
          </div>
        </article>

        <article className="publications__card">
          <div className="piblications__card-image">
            <img src={public_2} alt="publication"/>
          </div>
          <div className="publications__card-inner">
            <a className="publications__card-title" href="./pages/publications/publications-two.html">Penalty for the Good Corporation: 
              what will happen to Google and others for violating the GDPR
            </a>
            <p className="publications__card-date">September 29</p>
            <p className="publications__card-description">And why the recovery of 50 
              million euros could be a fateful precedent According to Mind.ua 
              January 21 National Commission for Data Protection.
            </p>
          </div>
        </article>

        <article className="publications__card">
          <div className="piblications__card-image">
            <img src={public_3} alt="publication"/>
          </div>
          <div className="publications__card-inner">
            <a className="publications__card-title" href="./pages/publications/publications-three.html">
            Millennial Testament
            </a>
            <p className="publications__card-date">August 19</p>
            <p className="publications__card-description">What and how modern vloggers, 
              opinion leaders and crypto-millionaires will inherit A typical 
              legacy of the Ukrainian generation X looks like this: an apartment in…
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
  )
}

export default PublicationSection;