import '../scss/style.scss';

const Footer = () => {
  return (
    <footer className="footer">
		<div className="footer__container">
			<ul className="footer__list">
				<div className="footer__inner-adress">
					<li className="footer__adress">Kyiv, Mechnikova str., 14/1</li>
					<span className="dotted dotted--gray"></span>
					<li className="footer__map">
						<a href="#" className="footer__map-item">on map</a>
					</li>
				</div>
				<div className="footer__inner-social">
					<li className="footer__icon">
						<a href="http://facebook.com" className="footer__icon-svg">
							<svg>
								<use href="#faceBook"></use>
							</svg>
						</a>
					</li>
					<span className="dotted dotted--gray"></span>
					<li className="footer__phone">
						<a href="tel:0800211927" className="footer__phone-item">0800 211 927</a>
					</li>
					<span className="dotted dotted--gray"></span>
					<li className="footer__email">
						<a href="#" className="footer__email-item">contact@forstudy.space</a>
					</li>
				</div>
			</ul>
			<p className="footer__title">© 2021 HLEGAL Law company, LLC</p>
		</div>
	</footer>
  )
}

export default Footer;