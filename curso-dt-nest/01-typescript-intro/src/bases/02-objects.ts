
export const pokemonIds = [1,20,38,15,40];

interface Pokemon {
    id:number;
    name: string;
    age?:number;
}

export const pikachu:Pokemon = {
    id: 1,
    name: 'Pikachu',
    age: 2
}

export const charmander:Pokemon ={
    id: 2,
    name: 'Charmander'
}

export const pokemons:Pokemon[] = [];

pokemons.push( pikachu, charmander );

console.log( pokemons );


