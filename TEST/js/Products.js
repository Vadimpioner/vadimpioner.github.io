class Products {
    constructor() {
        this.activeBasketClass = 'card__add-active';
        this.addBasketText = 'В корзину';
        this.removeBasketText = 'Удалить';
        this.activeHeartClass = 'heart__active';
        // this.sosImages = 'promo__card-img';
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
                            <div class="basket__number">3</div>
                            <img src="img/basket.png" alt="basket">
                        </div>
                    </div>
                    
                    <div class="promo__card-button">
                        <div class="line">
                            <img src="icons/minus.svg" alt="minus" class="minus">
                            <b>200</b>
                            <img src="icons/plus.svg" alt="plus" class="plus">
                        </div>
                        <div class="button">
                            <button class="card__by">Купить в 1 клик</button>
                            <button class="${activeBasket}" onclick="productsPage.renderButton(this, '${id}');">${basketText}</button>
                        </div>
                    </div>
                </div>
            `;
            },
        );

        const HTML = htmlCatalog;
        CARD.innerHTML = HTML; // root.js
    }
}
const productsPage = new Products();
productsPage.render();
