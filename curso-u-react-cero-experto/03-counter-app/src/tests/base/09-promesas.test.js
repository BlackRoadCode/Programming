import '@testing-library/jest-dom';
import { getHeroeByIdAsync } from '../../base/09-promesas';
import heroes from '../../data/heroes';

describe('Pruebas en 09-promesas', () => {

    test('getHeroeByIdAsync debe de retornar un héroe async', ( done ) => { 
        
        const id = 3;

        getHeroeByIdAsync( id )
            .then( h => {

                expect( h ).toBe( heroes[ id - 1 ] );
                done();

            })

     });

     test('getHeroeByIdAsync debe de enviar un error si no encuentra al héroe', ( done ) => { 
        
        const id = 30;
        getHeroeByIdAsync( id )
            .catch( err => {
                expect( err ).toBe('No se encontró al héroe solicitado.');
                done();
            })

     });

     // Caso de prueba que valida ambos paths
     test('getHeroeByIdAsync debe de retornar un héroe async', ( done ) => { 
        
        const id = 30;

        getHeroeByIdAsync( id )
            .then( h => {

                expect( h ).toBe( heroes[ id - 1 ] );
                done();

            })
            .catch( err => {
                expect( err ).toBe('No se encontró al héroe solicitado.');
                done();
            })

     });

});