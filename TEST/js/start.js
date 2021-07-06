function render() {}
let CATALOG = [];

fetch('../server/catalog.json')
    .then((res) => res.json())
    .then((body) => {
        CATALOG = body;
        render();
    })
    .catch((error) => {
        console.log('error');
    });
