
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../scss/style.scss';
import avatar_1 from '../assets/images/Avatar-1.jpg'
import avatar_2 from '../assets/images/Avatar-2.jpg'
import avatar_3 from '../assets/images/Avatar-3.jpg'
import avatar_4 from '../assets/images/Avatar-4.jpg'
import avatar_5 from '../assets/images/Avatar-5.jpg'
import avatar_6 from '../assets/images/Avatar-6.jpg'


const TeamSection = () => {
  return (
    <section className="team">
      <div className="container team__container">
      <div className="team__swiper swiper">
        <Swiper
          modules={[Pagination]}
          spaceBetween={25}
          grabCursor={true}
          loop={true}
          slidesPerView={1}
          pagination={{ clickable: true }}>

      <div className="swiper-wrapper">
          <SwiperSlide>
          <div className="swiper-slide team__slide">
							<div className="team__image">
								<img src={avatar_1} alt="avatar" width={315} height={500}/>
							</div>
							<div className="team__inner">
								<a href="./pages/team.html" className="team__inner-link">team</a>
								<h3 className="team__inner-title">I'm a jun on projects. I am 
									a co-owner of a law firm. How it happened. 
									Before entering my parents told me that if I…
								</h3>
								<div className="team__inner-name">
									<p>Alexander Alexandrovsky</p>
									<p>Managing partner</p>
								</div>
							</div>
						</div>
          </SwiperSlide>

          <SwiperSlide>
          <div className="swiper-slide team__slide">
							<div className="team__image">
								<img src={avatar_2} alt="avatar" width={315} height={500}/>
							</div>
							<div className="team__inner">
								<a href="./pages/team.html" className="team__inner-link">team</a>
								<h3 className="team__inner-title">I'm a jun on projects. I am 
									a co-owner of a law firm. How it happened. 
									Before entering my parents told me that if I…
								</h3>
								<div className="team__inner-name">
									<p>Oksana Kobzar</p>
									<p>Equity partner, Attorney-at-law</p>
								</div>
							</div>
						</div>
          </SwiperSlide>

          <SwiperSlide>
          <div className="swiper-slide team__slide">
							<div className="team__image">
								<img src={avatar_3} alt="avatar" width={315} height={500}/>
							</div>
							<div className="team__inner">
								<a href="./pages/team.html" className="team__inner-link">team</a>
								<h3 className="team__inner-title">I'm a jun on projects. I am 
									a co-owner of a law firm. How it happened. 
									Before entering my parents told me that if I…
								</h3>
								<div className="team__inner-name">
									<p>Sergey Binn</p>
									<p>Associate</p>
								</div>
							</div>
						</div>
          </SwiperSlide>

          <SwiperSlide>
          <div className="swiper-slide team__slide">
							<div className="team__image">
								<img src={avatar_4} alt="avatar" width={315} height={500}/>
							</div>
							<div className="team__inner">
								<a href="./pages/team.html" className="team__inner-link">team</a>
								<h3 className="team__inner-title">I'm a jun on projects. I am 
									a co-owner of a law firm. How it happened. 
									Before entering my parents told me that if I…
								</h3>
								<div className="team__inner-name">
									<p>Evgeny Patrikov</p>
									<p>Equity partner, Attorney-at-law</p>
								</div>
							</div>
						</div>
          </SwiperSlide>

          <SwiperSlide>
          <div className="swiper-slide team__slide">
							<div className="team__image">
								<img src={avatar_5} alt="avatar" width={315} height={500}/>
							</div>
							<div className="team__inner">
								<a href="./pages/team.html" className="team__inner-link">team</a>
								<h3 className="team__inner-title">I'm a jun on projects. I am 
									a co-owner of a law firm. How it happened. 
									Before entering my parents told me that if I…
								</h3>
								<div className="team__inner-name">
									<p>Julia Wolk</p>
									<p>Associate, Attorney-at-law</p>
								</div>
							</div>
						</div>
          </SwiperSlide>

          <SwiperSlide>
          <div className="swiper-slide team__slide">
							<div className="team__image">
								<img src={avatar_6} alt="avatar" width={315} height={500}/>
							</div>
							<div className="team__inner">
								<a href="./pages/team.html" className="team__inner-link">team</a>
								<h3 className="team__inner-title">I'm a jun on projects. I am 
									a co-owner of a law firm. How it happened. 
									Before entering my parents told me that if I…
								</h3>
								<div className="team__inner-name">
									<p>Vladislav Melnik</p>
									<p>Associate</p>
								</div>
							</div>
						</div>
          </SwiperSlide>
          </div>
        </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;