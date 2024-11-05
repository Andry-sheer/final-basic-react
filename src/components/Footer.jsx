import '../scss/style.scss';


const Footer = () => {
  return (
    <footer className="footer">
		<div className="container footer__container">
			<div className="footer__container-inner">
				<div className="footer__address-container">
					<p className="footer__address">Kyiv, Mechanics str., 14/1</p>
					<span className="dotted dotted--gray"></span>
					<a href="/#" className="footer__map">on map</a>
				</div>
				<div className="footer__social-container">
						<a className="footer__social" href="http://facebook.com">
							<svg>
								<use href="#faceBook"></use>
							</svg>
						</a>
					<span className="dotted dotted--gray"></span>
						<a href="tel:0800211927" className="footer__phone">0800 211 927</a>
					<span className="dotted dotted--gray"></span>
						<a href="/#" className="footer__email">contact@forstudy.space</a>
				</div>
				<p className="footer__title">© 2021 LEGAL Law company, LLC</p>
			</div>
			
		</div>
	</footer>
  )
}

export default Footer;