const { http } = require('../plugins');

const getPokemonById = async ( id ) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${ id }`;
    const pokemon = await http.get( url );
    return pokemon.name;
}

const getAlternativeDataByCode = async ( code ) => {
    const url = `https://andreamx.vtexcommercestable.com.br/api/catalog_system/pub/products/search/${ code }`;
    return data = await http.get( url );
}

module.exports = {getPokemonById, getAlternativeDataByCode};