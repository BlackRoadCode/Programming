
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

// ------------------------------------------ second lap

const marvelPublicKey = '123';
const marvelPrivateKek = '123';
const marvelCall = fetch(`https://gateway.marvel.com/v1/public/series?limit=10&apikey=${ marvelPublicKey }`);

marvelCall
    .then( resp => resp.json() )
    .then( ( { data } ) => {

        console.log( data.results );

        data.results.forEach( result => {
            const { title } = result;
            const h2 = document.createElement('h2');
            h2.innerText = title;
            document.body.append( h2 );
        });

    })
    .catch( console.warn );