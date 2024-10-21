
const getImage = async () => {
    try {
        const apiKey = 'Zu4W46cElN9RIfbPbgrubW7KT0tNiDQu';
        const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await response.json()
    
        const { url } = data.images.original;
        const img = document.createElement('img');
        
        img.src = url;
        document.body.append(img);
    } catch (error) {
        console.warn( error );
    }
}

getImage();

// ------------------------------------------ second lap

const marvelPublicKey = '123';

const getTitle = async ( idSerie ) => {

    const marvelCall = fetch(`https://gateway.marvel.com/v1/public/series/${ idSerie }?apikey=${ marvelPublicKey }`);
    const response = await marvelCall;
    const { data } = await response.json();
    const { title, thumbnail } = data.results[0];

    const h2 = document.createElement('h2');
    const img = document.createElement('img');

    h2.innerText = title;
    img.src = thumbnail.path + '.' + thumbnail.extension;
    
    document.body.append( h2 );
    document.body.append( img );
}

getTitle( 300 )