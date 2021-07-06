class NumberCard {
    openBasketTable() {
        newBasket.render();
    }
    render(count) {
        // const { sumCatalog } = newBasket.render();

        const htmlCatalog = `
            <div onclick="newNumberCard.openBasketTable();">
                <div class="number__all-card">${count}</div>
                <img src="img/basket.png" alt="basket">
            </div>
            <span> 2222222 р.</span>
        `;
        const HTML = htmlCatalog;
        NUMBER.innerHTML = HTML;
    }
}

const newNumberCard = new NumberCard();
const prodStore = newLocalStorage.getCard();
newNumberCard.render(prodStore.length);
