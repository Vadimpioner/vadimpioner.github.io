class Favorites {
    closeFavorites() {
        ROOT_FAVORITES.innerHTML = '';
    }
    render() {
        const heartStore = newLocalStorageHeart.getHeart();
        let htmlCatalog = ``;
        let sumCatalog = 0;

        CATALOG.forEach(({ id, images, descr, price, oldPrice }) => {
            if (heartStore.indexOf(id) !== -1) {
                htmlCatalog += `
                        
                        <tr>
                            <td class="extraFavorites__wrapper-img">
                                <img src=${images} alt="down">
                            </td>
                            <td class="extraFavorites__wrapper-descr">${descr}</td>
                            <td class="extraFavorites__wrapper-price"">${price.toLocaleString()} р.</td>    
                        </tr>
                `;
                sumCatalog += price;
            }
        });
        const HTML = `
        <div class="extraFavorites__wrapper">
            <div class="extraFavorites__wrapper-close" onclick="newFavorites.closeFavorites()"></div>
            <table>
                ${htmlCatalog}
                <tr>
                    <td class="extraFavorites__wrapper-descr">Итоговая сумма:</td>
                    <td class="extraFavorites__wrapper-price">${sumCatalog.toLocaleString()} р.</td>    
                </tr>
            </table>
        </div>
        `;
        ROOT_FAVORITES.innerHTML = HTML;
    }
}

const newFavorites = new Favorites();
