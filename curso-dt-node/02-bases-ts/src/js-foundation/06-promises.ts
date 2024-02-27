import { httpClient } from "../plugins";

export const getPokemonNameById = async ( id:string|number ):Promise<string> => {

    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${ id }`;
        const pokemon = await httpClient.get( url );
        return pokemon.name;
    } catch (error) {
        throw `Pokemon not found with id ${ id }`;
    }

}

export const getAlternativeDataByCode = async ( code:string ):Promise<string> => {
    const url = `https://andreamx.vtexcommercestable.com.br/api/catalog_system/pub/products/search/${ code }`;
    return await httpClient.get( url );
}
