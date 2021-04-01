const postData = async(url, data) => { // async говорит о том,что код у нас ассихронный
    const res = await fetch(url, { // await указывает чего нам нужно дождаться. в данном случае запроса
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    });

    return await res.json();
};

const getResource = async(url) => { // async говорит о том,что код у нас ассихронный
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }
    return await res.json();
};

export { postData };
export { getResource };