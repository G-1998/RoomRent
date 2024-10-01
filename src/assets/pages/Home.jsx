import React from 'react';
import Slider from 'react-slick';
import { useInView } from 'react-intersection-observer';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from './Image/Image1.jpg';
import image2 from './Image/Image2.jpg';
import image3 from './Image/Image3.jpg';
import background from './Image/background.jpg';
import room from './Image/livingroom.jpg';
import city from './Image/mandi.jpg';
import city1 from './Image/sundernagar.jpg';
import city2 from './Image/iitkamand.jpg';

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
    slidesToShow: -1,
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


      <section ref={sectionRef} className={`containersection2 background-container ${sectionInView ? 'slide-in' : ''}`}>
  <div className="parent1">
    <div className="available-container">  
    <div className="room-info">    
        <h1><u>Room Available In</u></h1>
        </div>
        <div className='child1'>  
        <div className="room-card1">
          <div className="room-card1-content">
            <img src={city} alt="Mandi" />
            <div className="overlay-content transbox1">
              <h1 className="overlay-message animated-text">Mandi</h1>
            </div>
          </div>        
        </div>
      </div>
    </div>
    <div className="upcoming-container">
    <div className="room-info">      
      <h1><u> Upcoming Event In</u></h1>
      </div>
        <div className='child1'>     
        <div className="room-card1">
          <div className="room-card1-content">
            <img src={city1} alt="Sundernagar" />
            <div className="overlay-content transbox1">
              <h1 className="overlay-message animated-text">Sundernagar</h1>
            </div>
          </div>
        </div>

        <div className="room-card1">
          <div className="room-card1-content">
            <img src={city2} alt="IIT Kamand" />
            <div className="overlay-content transbox1">
              <h1 className="overlay-message animated-text">IIT Kamand</h1>
            </div>
           
          </div>
        </div>
      </div>
    </div>
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
        <div className="main1">
          <div className="text">
            <h1><u>Why We use this Platform ?</u></h1>
            The Easy Room Finder platform provides a hassle-free, 
            efficient, and secure way for individuals to find rooms 
            that meet their requirements, whether they are looking for
             affordability, convenience, or a specific location. 
             It helps both room seekers and landlords connect in a 
             streamlined manner, saving time, effort, and resources for
             both parties.

          </div>
        </div>
        <div className="main2">
          <div className="main2-image">
          <img src={room} alt="Living Room" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
