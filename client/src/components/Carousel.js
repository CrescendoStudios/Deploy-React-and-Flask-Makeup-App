import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';


const CarouselComponent = () => {
  const images = [
    { src: "/Banner.jpg", link: '/products' },
    { src: "/bannertwo.jpg", link: '/products/9' },
    { src: "/bannerthree.jpg", link: '/products/13' },
  ];

  return (
    <div className="container mx-auto max-w-screen-xl">
      <Carousel
        showStatus={false}
        showThumbs={false}
        showIndicators={true}
        showArrows={true}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        transitionTime={800}
        swipeable={true}
        dynamicHeight={false}
        emulateTouch={true}
        className="carousel-wrapper bg-gradient-to-r from-zinc-900 via-pink-950 to-zinc-900"
      >
        {images.map((image, index) => (
        <Link key={index} to={image.link}>
          <div className="relative w-full h-[20vh] md:h-[45vh]">
             <img className="w-full h-full object-contain md:object-cover" src={image.src} alt={`Carousel ${index}`} />
          </div>
        </Link>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;

