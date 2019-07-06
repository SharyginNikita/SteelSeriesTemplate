'use strict';

import Swiper from 'swiper/dist/js/swiper.min.js';

let burger = document.querySelector('#header__menu-btn');
let menu = document.querySelector('.header-nav');

burger.addEventListener('click', _ => {
    let burgerBtn = burger.querySelector('.hamburger');

    burgerBtn.classList.toggle('is-active');
    menu.classList.toggle('header-nav_active')
});

let swiperMain = new Swiper('.section-swiper', {
    wrapperClass: 'section-swiper__wrapper',
    slideClass: 'section-swiper__slide',
    slidesPerView: 1,

    autoplay: {
        delay: 9500,
    },

    loop: true,

    navigation: {
        nextEl: '.section-swiper__next',
        prevEl: '.section-swiper__prev',
    },

    pagination: {
        el: '.section-swiper__pagination',
        type: 'bullets',
        bulletClass: 'section-swiper__bullet',
        bulletActiveClass: 'section-swiper__bullet_active',
    },
});
/*
 
import yuor vue modules example

import Module from '../widgets/module';
const module = new Module('#module-widget');

*/

