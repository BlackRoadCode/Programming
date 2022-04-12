
export const getImage = async () => {
    try {
        const apiKey = 'Zu4W46cElN9RIfbPbgrubW7KT0tNiDQu ----';
        const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await response.json()
    
        const { url } = data.images.original;
        
        return url;
    } catch (error) {
        return 'No existe';
    }
}
