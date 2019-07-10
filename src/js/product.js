'use strict';

let productItems = document.querySelectorAll('.product-item');

console.log(productItems);

for (let i = 0; i < productItems.length; i++) {
    let item = productItems[i];
    let itemWrap = item.querySelector('.product-item__wrapper');

    item.addEventListener('click', event => {

        item.classList.toggle('product-item_active');

        if (itemWrap) {

            event.preventDefault();

            item.addEventListener('click', event => { 
                event.stopPropagation(); 
            });

            if (itemWrap.style.height == '0px' || itemWrap.style.height == 0 ) {
                itemWrap.style.height = itemWrap.scrollHeight + 'px';
                itemWrap.style.marginTop = '20px';
            }

            else {
                itemWrap.style.height = '0px';
                itemWrap.style.margin = '0px';
            }
        }
    });


    console.log(item);
}


