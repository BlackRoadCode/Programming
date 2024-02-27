import { getPokemonNameById } from '../../src/js-foundation/06-promises';

describe('js-foundation/06-promises.ts', () => {

    test('getPokemonById should return a pokemon', async() => {
        const pokemonId = 1;
        const pokemonName = await getPokemonNameById(pokemonId);

        expect(pokemonName).toBe('bulbasaur');
    });

    test('getPokemonById should return undefined', async() => {

        const pokemonId = 999999999999;

        try {
            await getPokemonNameById(pokemonId);
            expect(true).toBeFalsy();
        } catch (error) {
            expect(error).toBe(`Pokemon not found with id ${ pokemonId }`);
        }

    });
    
});