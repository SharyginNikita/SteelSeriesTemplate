'use strict';

import Swiper from 'swiper/dist/js/swiper.min.js';

let swiperMain = new Swiper('.section-swiper', {
    wrapperClass: 'section-swiper__wrapper',
    slideClass: 'section-swiper__slide',
    slidesPerView: 1,

    autoplay: {
        delay: 9500,
    },


    pagination: {
        el: '.swiper-main__pagination',
        bulletClass: 'swiper-main__bullet',
        bulletActiveClass: 'swiper-main__bullet_active',
        renderBullet: function (index, className) {

            index = (index + 1)
            if (index <= 9) {
                index = '0' + index;    
            }

            return '<span tabindex="-1" class="' + className + '">' + index + '</span>';
        },
        clickable: true,
        dynamicBullets: true,
    },

    navigation: {
        nextEl: '.swiper-main__next',
        prevEl: '.swiper-main__prev',
    },
});
/*
 
import yuor vue modules example

import Module from '../widgets/module';
const module = new Module('#module-widget');

*/

