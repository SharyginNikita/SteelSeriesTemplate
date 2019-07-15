'use strict';

import Swiper from 'swiper/dist/js/swiper.min.js';
import popup from 'popup';
import IMask from 'imask';

let swiperMain = new Swiper('.section-swiper', {
    wrapperClass: 'section-swiper__wrapper',
    slideClass: 'section-swiper__slide',
    slidesPerView: 1,
    grabCursor: true,

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
        clickable: true,
        bulletClass: 'section-swiper__bullet',
        bulletActiveClass: 'section-swiper__bullet_active',
    },
});

class Popups {

    constructor() {

        let buttonsRequest = document.querySelectorAll('.buttons-contact__button_request, .footer-contact__link_request');
        let buttonsCall = document.querySelectorAll('.buttons-contact__button_call, .footer-contact__link_call');

        this._buttonsRequest = buttonsRequest;
        this._buttonsCall = buttonsCall;

    }

    addCallPopup() {

        this._buttonsCall.forEach(btn => {

            btn.addEventListener('click', _ => {

                let communication =

                    `
                        <div class="popup">
                            <form class="popup__content">
                                <div class="popup__item popup__item_column"><label class="popup__label" for="input_1">Ваш Телефон</label><input class="popup__input phone-mask" type="text" placeholder="+7 (***)  **-**-***" id="input_1" /></div>
                                <div class="popup__item popup__item_column">
                                    <div class="popup__label">Удобное время для звонка</div>
                                    <div class="popup__row popup__row_between">
                                        <div class="popup__select-wrapper">
                                            <div class="popup__select-text">с</div>
                                            <select class="popup__select">
                                                <option>09.00</option>
                                                <option>10.00</option>
                                                <option>11.00</option>
                                                <option>12.00</option>
                                                <option>13.00</option>
                                                <option>14.00</option>
                                                <option>15.00</option>
                                                <option>16.00</option>
                                                <option>17.00</option>
                                                <option>18.00</option>
                                            </select>
                                        </div>
                                        <div class="popup__select-wrapper">
                                            <div class="popup__select-text">до</div>
                                            <select class="popup__select">
                                            <option>09.00</option>
                                            <option>10.00</option>
                                            <option>11.00</option>
                                            <option>12.00</option>
                                            <option>13.00</option>
                                            <option>14.00</option>
                                            <option>15.00</option>
                                            <option>16.00</option>
                                            <option>17.00</option>
                                            <option>18.00</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="popup__item popup__item_row">
                                    <div class="popup__checkbox-wrapper"><label class="checkbox-label"><input type="checkbox" /><span class="checkbox-custom rectangular"></span></label></div>
                                    <div class="popup__agree">Я согласен на <a class="popup__agree-link" href="#">обработку персональных данных</a></div>
                                </div>
                                <div class="button button_send">Отправить заявку</div>
                            </form>
                        </div>`;

                popup.insertData(communication);
                let mask = document.querySelector('.phone-mask');
                let phoneMask = IMask(
                    mask, {
                        mask: '+{7} (000) 000-00-00',
                        lazy: false,
                        placeholderChar: '*'
                    });

                popup.open();
            });
        })
    }

    addRequestPopup() {

        this._buttonsRequest.forEach(btn => {

            btn.addEventListener('click', _ => {

                let temp =

                    `
                            <div class="popup">
                                <form class="popup__content">
                                    <div class="popup__item popup__item_column"><label class="popup__label" for="input_1">Ваш EMail</label><input class="popup__input" type="text" placeholder="***@***" id="input_1" /></div>
                                    <div class="popup__item popup__item_column"><label class="popup__label" for="input_2">Ваш вопрос</label><input class="popup__input popup__input_16px" type="text" placeholder="Введите текст" id="input_2" /></div>
                                    <div class="popup__item popup__item_column">
                                        <label class="popup__label" for="input_3">Вы можете прикрепить файл</label>
                                        <div class="box">
                                        <input type="file" name="file-1[]" id="file-1" class="inputfile inputfile-1" data-multiple-caption="{count} files selected" multiple />
                                        <label for="file-1"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"/></svg> <span>Выберите файл&hellip;</span></label>
                                    </div>
                                </div>
                                <div class="popup__item popup__item_row">
                                    <div class="popup__checkbox-wrapper"><label class="checkbox-label"><input type="checkbox" /><span class="checkbox-custom rectangular"></span></label></div>
                                    <div class="popup__agree">Я согласен на <a class="popup__agree-link" href="#">обработку персональных данных</a></div>
                                </div>
                                <div class="button button_send">Отправить заявку</div>
                            </form>
                        </div>
                    `;

                popup.insertData(temp);


                (function (document, window, index) {
                    var inputs = document.querySelectorAll('.inputfile');
                    Array.prototype.forEach.call(inputs, function (input) {
                        var label = input.nextElementSibling,
                            labelVal = label.innerHTML;

                        input.addEventListener('change', function (e) {
                            var fileName = '';
                            if (this.files && this.files.length > 1)
                                fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
                            else
                                fileName = e.target.value.split('\\').pop();

                            if (fileName)
                                label.querySelector('span').innerHTML = fileName;
                            else
                                label.innerHTML = labelVal;
                        });

                        // Firefox bug fix
                        input.addEventListener('focus', function () {
                            input.classList.add('has-focus');
                        });
                        input.addEventListener('blur', function () {
                            input.classList.remove('has-focus');
                        });
                    });
                }(document, window, 0));

                popup.open();

            });
        })
    }

    init() {

        this.addCallPopup();
        this.addRequestPopup();

    }
}

class Menu {

    constructor() {

        let burger = document.querySelector('#header__menu-btn');
        let menu = document.querySelector('.header-nav');

        this._burger = burger;
        this._burgerBtn = this._burger.querySelector('.hamburger');
        this._menu = menu;

    }
    initMobileMenu() {

        let menuLevelZero = document.querySelectorAll('.header-nav__item_level_0');

        menuLevelZero.forEach(elem => {

            let item = elem.querySelector('.header-nav_level_1');

            elem.addEventListener('dblclick', event => {
                let elemLink = elem.querySelector('.header-nav__link');
                let link = elemLink.getAttribute('href');
                location.replace(link);
            });

            elem.addEventListener('click', event => {

                if (item) {

                    event.preventDefault();

                    item.addEventListener('click', event => {
                        event.stopPropagation();
                    });

                    if (item.style.height == '0px' || item.style.height == 0) {
                        item.style.height = item.scrollHeight + 'px';
                        item.style.marginTop = '7px';
                    } else {
                        item.style.height = '0px';
                        item.style.margin = '0px';
                    }
                }
            });
        });
    }

    add() {

        this._burger.addEventListener('click', _ => {
            this._burgerBtn.classList.toggle('is-active');
            this._menu.classList.toggle('header-nav_active')
        });

        this.initMobileMenu();
    }
}

class Products {

    constructor() {

        let categories = document.querySelectorAll('.section-products__category-item');
        let tabs = document.querySelectorAll('.section-products-catalog');
        let clientWidth = document.documentElement.clientWidth;


        this._categories = categories;
        this._firstCategory = this._categories[0];

        this._tabs = tabs;
        this._firstTab = this._tabs[0];

        this._clienWidth = clientWidth;

    }

    inactiveTabs() {

        this._tabs.forEach(tab => {
            tab.classList.remove('section-products-catalog_active');
        });

    }

    inactiveCategories() {

        this._categories.forEach(category => {
            category.classList.remove('section-products__category-item_active');
        });

    }

    addMobileMenu() {

        if (this._clienWidth <= 656) {

            let categoryMenu = document.querySelector('.section-products__menu');
            let btnClose = document.querySelector('#section-products__close-btn');
            let div = document.createElement('div');

            if (categoryMenu) {
                div.className = "section-products__category-item section-products__category-item_active section-products__category-item_title-tab";
                categoryMenu.appendChild(div);
            }

            let activeCategory = document.querySelector('.section-products__category-item_title-tab');

            activeCategory.innerHTML = this._firstCategory.innerHTML;

            let category = document.querySelector('.section-products__category');

            activeCategory.addEventListener('click', _ => {
                category.classList.add('section-products__category_active');
            });

            btnClose.addEventListener('click', _ => {
                category.classList.remove('section-products__category_active');
            });
        }
    }

    addCategories() {

        if (this._firstCategory) {

            this.addMobileMenu();

            this._firstCategory.classList.add('section-products__category-item_active');
            this._firstTab.classList.add('section-products-catalog_active');

            this._categories.forEach((elem, i) => {
                elem.setAttribute('data-id', `tab-id-${i}`);

                elem.addEventListener('click', _ => {
                    let dataId = elem.getAttribute('data-id');
                    let tab = document.querySelector('#' + dataId);

                    this.inactiveTabs();
                    this.inactiveCategories();

                    elem.classList.add('section-products__category-item_active');

                    let activeCategory = document.querySelector('.section-products__category-item_title-tab');

                    if (activeCategory) {
                        activeCategory.innerHTML = elem.innerHTML;
                    }

                    tab.classList.add('section-products-catalog_active');
                });
            })
        }
    }
}


new Menu().add();
new Popups().init();
new Products().addCategories();


/*

import your vue modules example

import Module from '../widgets/module';
const module = new Module('#module-widget');

*/
