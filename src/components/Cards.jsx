import '../scss/style.scss';

const Cards = () => {
  return (
    <div className="cards">
    <div className="container cards__container">
        <a href="./pages/services.html" className="cards__link">Service</a>
        <h2 className="cards__title">What can we do better than others?</h2>
    <div className="cards__container-inner">
      <div className="cards__content-card">
          <a className="cards__content-link" href="./pages/subpages/e-commerce.html">
            <svg>
              <use href="#Ecommerce"></use>
            </svg>
          </a>
            <a className="cards__content-title" href="./pages/subpages/e-commerce.html">IT and e-commerce</a>
          <p className="cards__content-description">An endless stream 
            of contracts, tax issues, labor relations, corporate papers - 
            legal work distracts you from doing business. But there 
            is not much work to do to hire an in-house lawyer.
          </p>
      </div>
      <div className="cards__content-card">
          <a className="cards__content-link" href="./pages/subpages/support.html">
            <svg>
              <use href="#Support"></use>
            </svg>
          </a>
            <a className="cards__content-title" href="./pages/subpages/support.html">Comprehensive daily legal support</a>
          <p className="cards__content-description">In addition, over time, the 
            work will become the same type and uninteresting for a 
            full-time lawyer. And we know very well how difficult 
            it is to find a good candidate with experience 
            in the field of information technology in Ukraine.
          </p>
      </div>
      <div className="cards__content-card">
          <a className="cards__content-link" href="./pages/subpages/coprorate.html">
            <svg>
              <use href="#Coprorate"></use>
            </svg>
          </a>
            <a className="cards__content-title" href="./pages/subpages/coprorate.html">Structuring corporate relationships</a>
          <p className="cards__content-description">Instead of just providing 
            legal services, we will hire a lawyer or a whole team 
            that will fit into the daily life of your company.
          </p>
      </div>
      <div className="cards__content-card">
          <a className="cards__content-link" href="./pages/subpages/trust.html">
            <svg>
              <use href="#Trust"></use>
            </svg>
          </a>
            <a className="cards__content-title" href="./pages/subpages/trust.html">Building contractual relations</a>
          <p className="cards__content-description">Once a week, or week after month, 
            you have your own lawyer by your side. Anyone in the company 
            can catch it at the coffee maker and just talk about current 
            affairs instead of waiting for update status.
          </p>
      </div>
      <div className="cards__content-card">
          <a className="cards__content-link" href="./pages/subpages/protection.html">
            <svg>
              <use href="#Protection"></use>
            </svg>
          </a>
            <a className="cards__content-title" href="./pages/subpages/protection.html">Protection of business, intellectual property</a>
          <p className="cards__content-description">And all the other time he 
            will work on new diverse projects, so he will definitely not 
            stop in professional development. One way or another, all Axon 
            Partners will work for you instead of a corporate lawyer.
          </p>
      </div>
      <div className="cards__content-card">
          <a className="cards__content-link" href="./pages/subpages/court.html">
            <svg>
              <use href="#Court"></use>
            </svg>
          </a>
            <a className="cards__content-title" href="./pages/subpages/court.html">Judicial representation</a>
          <p className="cards__content-description">Is it a small, medium-sized 
            company or a market leader? Local business or multinational 
            company? Do you have your own legal department or not?
          </p>
      </div>
    </div>
    </div>
  </div>
  )
}

export default Cards;