import '@testing-library/jest-dom';
import { getImage } from '../../base/11-async-await';

describe('Pruebas en 11-async-await', () => { 
    
    test('getImage debe de regresar una url de gif random', async() => { 
        
        const url = await getImage();

        console.log(url);

        expect( typeof url ).toBe('string');

     });
    
     test('getImage debe de regresar un mensaje de error si la api key no existe', async() => { 
        
        const url = await getImage();

        console.log(url);

        expect( url.includes('https://') ).toBe( false );

     });

 })