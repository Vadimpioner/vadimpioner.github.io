class LocalStorage {
    constructor() {
        this.keyName = 'card';
    }
    getCard() {
        const cardLocalStorage = localStorage.getItem(this.keyName);
        if (cardLocalStorage !== null) {
            return JSON.parse(cardLocalStorage);
        }
        return [];
    }

    putCard(id) {
        let card = this.getCard();
        let pushCard = false;
        const index = card.indexOf(id);

        if (index === -1) {
            card.push(id);
            pushCard = true;
        } else {
            card.splice(index, 1);
        }

        localStorage.setItem(this.keyName, JSON.stringify(card));

        return {
            pushCard,
            card,
        };
    }
}
const newLocalStorage = new LocalStorage();
