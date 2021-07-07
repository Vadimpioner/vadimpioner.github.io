class NumberHeart {
    openFavorites() {
        newFavorites.render();
    }

    render(count) {
        const HTML = `
       
            <div onclick="newNumberHeart.openFavorites();">
                <div>
                    <div class="counter-heart">${count}</div>
                    <img src="img/heart.png" alt="heart">
                </div>
                <span>Избранное</span>
            </div>
           
        `;

        ROOT_HEART.innerHTML = HTML;
    }
}

const newNumberHeart = new NumberHeart();

const heartStore = newLocalStorageHeart.getHeart();
newNumberHeart.render(heartStore.length);
