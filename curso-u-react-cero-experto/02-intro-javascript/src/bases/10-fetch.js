
const apiKey = 'Zu4W46cElN9RIfbPbgrubW7KT0tNiDQu';
const call = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

call
    .then( resp => resp.json() )
    .then( ({ data }) => {
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    })
    .catch( console.warn );