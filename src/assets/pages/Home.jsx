import React from 'react';
import Slider from 'react-slick';
import { useInView } from 'react-intersection-observer';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from './Image/Image1.jpg';
import image2 from './Image/Image2.jpg';
import image3 from './Image/Image3.jpg';
import background from './Image/background.jpg';

const Home = () => {
  const { ref: sliderRef, inView: sliderInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '60px',
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
    fade: true,
    lazyLoad: 'ondemand',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: '40px',
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: '20px',
        },
      },
    ],
  };

  return (
    <>
      {/* Background Section with Animated Text and Search Bar */}
      <section ref={sliderRef} className={`background-container ${sliderInView ? 'slide-in' : ''}`}>
        <img src={background} alt="Background" className="background-image" />
        <div className="overlay-content transbox">
          <h1 className="overlay-message animated-text">Welcome to Our Platform</h1>
          <p className="overlay-message typewriter-text">It Will Help You to Find Your Room Easily</p>
          <p className="overlay-message blinking-text ">Go to Room Section</p>
        </div>
      </section>

      {/* Slider Section */}
      <section className={`slider-container ${sliderInView ? 'slide-in' : ''}`}>
        <Slider {...settings}>
          <div>
            <img src={image1} alt="Image 1" />
          </div>
          <div>
            <img src={image2} alt="Image 2" />
          </div>
          <div>
            <img src={image3} alt="Image 3" />
          </div>
        </Slider>
      </section>

      {/* Additional Section */}
      <section ref={sectionRef} className={`containersection1 ${sectionInView ? 'slide-in' : ''}`}>
        <div className="main1">hello</div>
        <div className="main2">hello</div>
      </section>
    </>
  );
};

export default Home;
