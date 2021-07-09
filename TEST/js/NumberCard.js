class NumberCard {
    openBasketTable() {
        newBasket.render();
    }
    render(count) {
        const htmlCatalog = `         
            <div onclick="newNumberCard.openBasketTable();">
                <div class="number__all-card">${count}</div>
                <img src="img/basket.png" alt="basket">
            </div>        
        `;
        const HTML = htmlCatalog;
        NUMBER.innerHTML = HTML;
    }
}

const newNumberCard = new NumberCard();
const prodStore = newLocalStorage.getCard();
newNumberCard.render(prodStore.length);
