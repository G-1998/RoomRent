import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from './Image/Image1.jpg';
import image2 from './Image/Image2.jpg';
import image3 from './Image/Image3.jpg';

const Home = () => {
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
    pauseOnHover: true,       // Pause autoplay when hovering over a slide
  arrows: true,             // Enable navigation arrows
  fade: true,  
  };

  return (
    <>
      <section>
        <video
          src="/video/video.mp4"
          width="100%"
          height="480"
          controls
          autoPlay
          loop
        />
      </section>

      <div className="slider-container">
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
      </div>
    </>
  );
};

export default Home;