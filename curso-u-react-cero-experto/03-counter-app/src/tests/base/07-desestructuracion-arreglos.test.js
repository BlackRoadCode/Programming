import '@testing-library/jest-dom';
import { returnArray } from '../../base/07-desestructuracion-arreglos';

describe('Pruebas en 07-desestructuracion-arreglos.js', () => { 

    test('returnArray debe de retornar un string y un number', () => { 
        
        const arr = returnArray();
        const [ letras, numeros ] = returnArray(); // ['ABC', 123]

        expect( arr ).toEqual( [ 'ABC', 123 ] );

        expect( letras ).toBe( 'ABC' );
        expect( typeof letras ).toBe( 'string' );
        expect( numeros ).toBe( 123 );
        expect( typeof numeros ).toBe( 'number' );

     });

});