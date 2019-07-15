'use strict';

class Product {

    constructor() {

        let productItems = document.querySelectorAll('.product-item');
        let clientWidth = document.documentElement.clientWidth;

        this._productItems = productItems;
        this._clientWidth = clientWidth;

    }

    addShowHide() {

        if (this._productItems) {

            this._productItems[0].classList.add('product-item_active');

            if (this._productItems[0].style.height == '0px' || this._productItems[0].style.height == 0) {
                this._productItems[0].style.height = this._productItems[0].scrollHeight + 'px';
                if (this._clientWidth <= 676) {
                    this._productItems[0].style.margin = '25px 0 20px 0';
                } else {
                    this._productItems[0].style.margin = '25px 0 120px 0';
                }
            } else {
                this._productItems[0].style.height = '0px';
                this._productItems[0].style.margin = '0px';
            }

            this._productItems.forEach(item => {

                let itemTitle = item.querySelector('.product-item__row');
                let itemWrap = item.querySelector('.product-item__wrapper');

                itemTitle.addEventListener('click', event => {

                    item.classList.toggle('product-item_active');

                    if (itemWrap) {

                        event.preventDefault();

                        item.addEventListener('click', event => {
                            event.stopPropagation();
                        });

                        if (itemWrap.style.height == '0px' || itemWrap.style.height == 0) {
                            itemWrap.style.height = itemWrap.scrollHeight + 'px';
                            if (this._clientWidth <= 676) {
                                itemWrap.style.margin = '25px 0 20px 0';
                            } else {
                                itemWrap.style.margin = '25px 0 120px 0';
                            }
                        } else {
                            itemWrap.style.height = '0px';
                            itemWrap.style.margin = '0px';
                        }
                    }
                });
            })
        }
    }
}

new Product().addShowHide();
