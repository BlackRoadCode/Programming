import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('Pruebas en el archivo <<- 08-imp-exp ->>', () => { 
    
    test('getHeroeById() debe de retornar un héroe por ID', () => { 
        const heroId = 20;
        const hero = getHeroeById( heroId );
        const heroeData = heroes.find( (heroe) => heroe.id === heroId )

        expect( hero ).toEqual( { id: 20, name: 'Venom', owner: 'Marvel' } );
        expect( hero ).toEqual( heroeData );
        
     });
    
     test('getHeroeById() debe de retornar undefined si no existe el héroe', () => { 
        const heroId = 200;
        const hero = getHeroeById( heroId );

        expect( hero ).toEqual( undefined );
        expect( hero ).toBeFalsy();
        
     });
    
    test('getHeroesByOwner() debe de retornar un array de héroes por Owner', () => { 
        const owner = 'DC';
        const heroes = getHeroesByOwner( owner );

        expect( heroes.length ).toBe( 10 );
        expect( heroes ).toEqual( heroes.filter( (heroe) => heroe.owner === owner ) );
     });
    
    test('getHeroesByOwner() debe de retornar un array de length 10', () => { 
        const owner = 'Marvel';
        const heroes = getHeroesByOwner( owner );

        expect( heroes.length ).toBe( 10 );
     });
    
     test('getHeroesByOwner() debe de retornar un array vacío si el owner no existe', () => { 
        const owner = 'Aztec';
        const heroes = getHeroesByOwner( owner );

        expect( heroes ).toEqual( [] );
     });

 });