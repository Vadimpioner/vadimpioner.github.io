class LocalStorageHeart {
    constructor() {
        this.keyheart = 'heart';
    }
    getHeart() {
        const heartLocalStorage = localStorage.getItem(this.keyheart);
        if (heartLocalStorage !== null) {
            return JSON.parse(heartLocalStorage);
        }
        return [];
    }
    putHeart(id) {
        let heart = this.getHeart();
        let pushHeart = false;
        const index = heart.indexOf(id);
        if (index === -1) {
            heart.push(id);
            pushHeart = true;
        } else {
            heart.splice(index, 1);
        }
        localStorage.setItem(this.keyheart, JSON.stringify(heart));
        return {
            pushHeart,
            heart,
        };
    }
}

const newLocalStorageHeart = new LocalStorageHeart();
// LocalStorageHeart.putHeart('el1');
