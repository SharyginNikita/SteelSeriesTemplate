'use strict';

import Swiper from 'swiper/dist/js/swiper.min.js';
import popup from 'popup';

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

document.querySelector('.buttons-contact__button_call').addEventListener('click', _ => {

    let communication = 

        `

<div class="popup">
    <div class="popup__content">
        <div class="popup__item popup__item_column">
            <div class="popup__title">Ваш EMail</div><input class="popup__input" type="text" placeholder="***@***" />
        </div>
        <div class="popup__item popup__item_column">
            <div class="popup__title">Ваш вопрос</div><input class="popup__input" type="text" placeholder="Введите текст" />
        </div>
        <div class="popup__item popup__item_column">
            <div class="popup__title">Можете прикрепить файл</div><input class="popup__input" type="file" />
        </div>
        <div class="popup__item popup__item_row"><input type="checkbox" />
            <div class="popup__agree">Я согласен на обработку персональных данных</div>
        </div>
        <div class="button button_send">Отправить заявку</div>
    </div>
</div>

    `

    ;

    popup.insertData(communication); 
    popup.open();

});
/*

import yuor vue modules example

import Module from '../widgets/module';
const module = new Module('#module-widget');

*/

