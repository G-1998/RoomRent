import React from "react";
import Slider from "react-slick"; // Make sure to install this if you haven't done so

const Home = () => {
  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [
    { src: "/images/image1.jpg", alt: "Image 1" },
    { src: "/images/image2.jpg", alt: "Image 2" },
    { src: "/images/image3.jpg", alt: "Image 3" },
  ];

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
      <section>
        <div className="AddesContainer">
          <div className="Add-Slider">
            <Slider {...sliderSettings}>
              {images.map((image, index) => (
                <div key={index} className="slider-item">
                  <img src={image.src} alt={image.alt} className="slider-image" />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
