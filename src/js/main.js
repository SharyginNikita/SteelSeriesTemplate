'use strict';

import Swiper from 'swiper/dist/js/swiper.min.js';
import popup from 'popup';
import IMask from 'imask';

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

document.querySelector('.buttons-contact__button_paper-plane').addEventListener('click', _ => {

    let communication = 

        `

<div class="popup">
    <div class="popup__content">
        <div class="popup__item popup__item_column"><label class="popup__label" for="input_1">Ваш EMail</label><input class="popup__input" type="text" placeholder="***@***" id="input_1" /></div>
        <div class="popup__item popup__item_column"><label class="popup__label" for="input_2">Ваш вопрос</label><input class="popup__input" type="text" placeholder="Введите текст" id="input_2" /></div>
        <div class="popup__item popup__item_column"><label class="popup__label" for="input_3">Можете прикрепить файл</label><input class="popup__input popup__input_file" type="file" id="input_3" multiple="multiple" /></div>
        <div class="popup__item popup__item_row">
            <div class="popup__checkbox-wrapper"><label class="checkbox-label"><input type="checkbox" /><span class="checkbox-custom rectangular"></span></label></div>
            <div class="popup__agree">Я согласен на <a class="popup__agree-link" href="#">обработку персональных данных</a></div>
        </div>
        <div class="button button_send">Отправить заявку</div>
    </div>
</div>
`
    ;

    popup.insertData(communication); 
    popup.open();

});


document.querySelector('.buttons-contact__button_call').addEventListener('click', _ => {

    let communication = 

        `

<div class="popup">
    <div class="popup__content">
        <div class="popup__item popup__item_column"><label class="popup__label" for="input_1">Ваш Телефон</label><input class="popup__input phone-mask" type="text" placeholder="+7 (***)  **-**-***" id="input_1" /></div>
        <div class="popup__item popup__item_column">
            <div class="popup__label">Удобное время для звонка</div>
            <div class="popup__row popup__row_between">
                <div class="popup__select-wrapper">
                    <div class="popup__select-text">с</div><select class="popup__select">
                        <option>09.00</option>
                        <option>10.00</option>
                    </select>
                </div>
                <div class="popup__select-wrapper">
                    <div class="popup__select-text">до</div><select class="popup__select">
                        <option>09.00</option>
                        <option>10.00</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="popup__item popup__item_row">
            <div class="popup__checkbox-wrapper"><label class="checkbox-label"><input type="checkbox" /><span class="checkbox-custom rectangular"></span></label></div>
            <div class="popup__agree">Я согласен на <a class="popup__agree-link" href="#">обработку персональных данных</a></div>
        </div>
        <div class="button button_send">Отправить заявку</div>
    </div>
</div>`
;

    popup.insertData(communication);
    let mask = document.querySelector('.phone-mask');
    let phoneMask = IMask(
        mask, {
            mask: '+{7}(000)000-00-00'
        });
    popup.open();

});

function openTab(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

/*

import yuor vue modules example

import Module from '../widgets/module';
const module = new Module('#module-widget');

*/

