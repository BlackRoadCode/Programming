import '@testing-library/jest-dom';
import { getHeroeById, getHeroeByOwner } from '../../base/08-import-export';
import heroes from '../../data/heroes';

describe('Pruebas en 08-import-export.js', () => {

    test('getHeroeById debe de retornar un héroe de acuerdo al id', () => { 

        const id = 1;
        const heroe = getHeroeById( id );

        const heroeData = heroes.find( h => heroe.id === id );

        expect( heroe ).toEqual( heroeData );

     });
    
     test('getHeroeById debe de retornar undefined si heroe no existe', () => { 
        
        const id = 10;
        const heroe = getHeroeById( id );

        expect( heroe ).toBe( undefined );

     });

     test('getHeroeByOwner debe de retornar un arreglo con los héroes del owner', () => { 
        
        const owner = 'DC';
        const arrHeroes = getHeroeByOwner( owner );
        const arrHeroesData = heroes.filter( h => h.owner === owner );

        expect( arrHeroes ).toEqual( arrHeroesData );

      });

      test('getHeroeByOwner debe de retornar un arreglo con los héroes de marvel', () => {

        const owner = 'Marvel';
        const arrHeroesData = heroes.filter( h => h.owner === owner );

        expect( arrHeroesData.length ).toBe( 2 );

       });

});