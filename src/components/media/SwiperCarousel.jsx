import React, { useEffect, useState } from 'react';
import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
//COMPONENTS
import CardMedia from './CardMedia';

const ResponsiveBreakpoints = ({ listToShow }) => {
  // const [list, setList] = useState();

  // useEffect(() => {
  //   setList(listToShow);
  // }, [listToShow]);

  const swiper = new Swiper('.swiper', {
    // configure Swiper to use modules
    slidesPerView: 1,
    modules: [Navigation, Pagination],
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 10,
      },
    },
  });
  return (
    <section className="main-swiper swiper mb-4 mb-md-5">
      <div className="swiper-wrapper">
        {listToShow &&
          listToShow.map((item) => <CardMedia item={item} key={item.id} />)}
      </div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </section>
  );
};

export default ResponsiveBreakpoints;
