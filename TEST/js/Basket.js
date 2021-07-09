class Basket {
    closeBasket() {
        ROOT_BASKET.innerHTML = '';
    }

    render() {
        const cardStore = newLocalStorage.getCard();
        let htmlCatalog = ``;
        let sumCatalog = 0;

        CATALOG.forEach(
            ({
                id,

                descr,
                price,
                oldPrice,
            }) => {
                if (cardStore.indexOf(id) !== -1) {
                    htmlCatalog += `
                        <tr>
                            <td class="extra__wrapper-descr">${descr}</td>
                            <td class="extra__wrapper-price">${price.toLocaleString()} р.</td>    
                        </tr>
                    `;
                    sumCatalog += price;
                }
            },
        );
        const HTML = `
            <div class="extra__wrapper">
                <div class="extra__wrapper-close" onclick="newBasket.closeBasket()"></div>
                <table>
                    ${htmlCatalog}
                    <tr>
                        <td class="extra__wrapper-descr">Итоговая сумма:</td>
                        <td class="extra__wrapper-price">${sumCatalog.toLocaleString()} р.</td>    
                    </tr>
                </table>
            </div>
        `;

        ROOT_BASKET.innerHTML = HTML;
    }
    SUM() {
        const cardStore = newLocalStorage.getCard();
        let htmlCatalog = ``;
        let bon = 0;

        CATALOG.forEach(({ id, price }) => {
            if (cardStore.indexOf(id) !== -1) {
                htmlCatalog += `${price.toLocaleString()}`;
                bon += price;
            }
        });
        const SUM = `<span>${bon.toLocaleString()} р.</span>`;
        ALL_MONEY.innerHTML = SUM;
    }
}

const newBasket = new Basket();
newBasket.SUM();
