import React, { useEffect } from 'react';
import $ from '../setupJQuery'; // ← file đã được sửa như trên

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const HomeSlider = () => {
  useEffect(() => {
    $('.home-slide1').owlCarousel({
      items: 1,
      loop: true,
      nav: true,
      dots: false,
      autoplay: true,
      autoplayTimeout: 3000,
      smartSpeed: 800,
    });
  }, []);

  return (
    <div className="home-slide1 owl-carousel nav-style1">
      <img src="/images/slides/1.jpg" alt="Slide 1" />
      <img src="/images/slides/2.jpg" alt="Slide 2" />
      <img src="/images/slides/3.jpg" alt="Slide 3" />
    </div>
  );
};

export default HomeSlider;
