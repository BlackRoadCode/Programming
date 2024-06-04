
import { HttpAdapter, PokeApiAdapter, PokeApiFetchAdapter } from "../api/pokeApi.adapter";
import { PokeapiResponse } from "../interfaces/pokeapi-response.interface";

export class Pokemon{

    get imageUrl() : string{
        return `https://pokemon.com/${ this.id }.jpg`;
    }

    constructor(
        public readonly id: number, 
        public name: string,
        private readonly http: HttpAdapter
    ){}

    scream(){
        console.log(`${ this.name.toUpperCase() }!!!`);
    }

    speak(){
        console.log(`${ this.name }, ${ this.name }`);
    }

    async getMoves(){
        const data = await this.http.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');
        console.log( data.moves[0]);
        return data.moves;
    }    

}

const pokeApiAxios = new PokeApiAdapter();
const pokeApiFetch = new PokeApiFetchAdapter();

export const pikachu = new Pokemon(1, 'Pikachu', pokeApiAxios );
export const charmander = new Pokemon(4, 'Charmander', pokeApiFetch );

charmander.getMoves();
