class Products {
    constructor() {
        this.activeBasketClass = 'card__add-active';
        this.addBasketText = 'В корзину';
        this.removeBasketText = 'Удалить';
        this.activeHeartClass = 'heart__active';
    }

    renderButton(element, id) {
        // console.log(element, id);
        const { pushCard, card } = newLocalStorage.putCard(id);

        if (pushCard) {
            element.classList.add(this.activeBasketClass);
            element.innerHTML = this.removeBasketText;
        } else {
            element.classList.remove(this.activeBasketClass);
            element.innerHTML = this.addBasketText;
        }

        newNumberCard.render(card.length);
        newBasket.SUM(card.length);
    }

    renderHeart(element, id) {
        const { pushHeart, heart } = newLocalStorageHeart.putHeart(id);

        if (pushHeart) {
            element.classList.add(this.activeHeartClass);
        } else {
            element.classList.remove(this.activeHeartClass);
        }

        newNumberHeart.render(heart.length);
    }

    render() {
        const cardStore = newLocalStorage.getCard();
        const heartStore = newLocalStorageHeart.getHeart();
        let htmlCatalog = ``;
        let sliderCatalog = ``;
        CATALOG.forEach(
            ({
                id,
                newSpanOne,
                newSpanTwo,
                newSpanThree,
                images,
                inStock,
                code,
                descr,
                price,
                oldPrice,
            }) => {
                // console.log(id);
                let activeBasket = '';
                let basketText = '';
                let span = '';

                if (cardStore.indexOf(id) === -1) {
                    basketText = this.addBasketText;
                } else {
                    activeBasket = ' ' + this.activeBasketClass;
                    basketText = this.removeBasketText;
                }

                let activeHeart = '';

                if (heartStore.indexOf(id) === -1) {
                    activeHeart;
                } else {
                    activeHeart = ' ' + this.activeHeartClass;
                }

                htmlCatalog += `
                <div class="promo__card">
                    <div class="heart${activeHeart}" onclick="productsPage.renderHeart(this, '${id}');"></div>
                    <div class="actions">
                        <span id="one">${newSpanOne}</span>
                        <span id="two">${newSpanTwo}</span>
                        <span id="three">${newSpanThree}</span>
                    </div>
                    <div class="promo__card-img">
                        <img data-lazy="${images}" alt="fruit1">
                    </div>
                    <div class="promo__card-stock">
                        <span>${inStock}</span>
                        <span>Код: ${code}</span>
                    </div>
                    <div class="promo__card-descr">
                        <div>
                            ${descr}
                        </div>
                    </div>
                    <div class="promo__card-price">
                        <b>${price.toLocaleString()} р.</b>
                        <span>${oldPrice} р.</span>
                        <div class="basket">
                            <div class="basket__number">0</div>                       
                            <img src="img/basket.png" alt="basket">
                        </div>
                    </div>
                    
                    <div class="promo__card-button">
                        <div class="line">
                            <svg data-direction="minus" alt="minus" class="btn-input" width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M26.9963 19.8571C26.9963 20.3305 26.6125 20.7143 26.1391 20.7143H15.8534C15.38 20.7143 14.9963 20.3305 14.9963 19.8571C14.9963 19.3838 15.38 19 15.8534 19H26.1391C26.6125 19 26.9963 19.3838 26.9963 19.8571Z" fill="#894083"/>
                            </svg>
                            
                                <input class="input-card" value="0" type="text">

                            <svg data-direction="plus" alt="plus" class="btn-input" width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M26.9963 20C26.9963 20.4734 26.6125 20.8571 26.1391 20.8571H21.8534V25.1429C21.8534 25.6162 21.4697 26 20.9963 26C20.5229 26 20.1391 25.6162 20.1391 25.1429V20.8571H15.8534C15.38 20.8571 14.9963 20.4734 14.9963 20C14.9963 19.5266 15.38 19.1429 15.8534 19.1429H20.1391V14.8571C20.1391 14.3838 20.5229 14 20.9963 14C21.4697 14 21.8534 14.3838 21.8534 14.8571V19.1429H26.1391C26.6125 19.1429 26.9963 19.5266 26.9963 20Z" fill="#894083"/>
                            </svg>
                        </div>
                        <div class="button">
                            <button class="card__by">Купить в 1 клик</button>
                            <button class="card__add ${activeBasket}" onclick="productsPage.renderButton(this, '${id}');">${basketText}</button>
                        </div>
                    </div>
                </div>
            `;
            },
        );
        SLIDER.forEach(({ id, title, img }) => {
            sliderCatalog += `
                <a href="#" class="slider__wrapper-block">
                    <span>${title}</span>
                    <img data-lazy="${img}" alt="slider">
                </a>
            `;
        });

        const HTML = htmlCatalog;
        CARD.innerHTML = HTML; // root.js
        ROOT_SLIDER.innerHTML = sliderCatalog;
    }
}
const productsPage = new Products();
productsPage.render();
