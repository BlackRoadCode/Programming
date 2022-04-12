import '@testing-library/jest-dom';
import { getUsuario, getUsuarioActivo } from '../../base/05-funciones';

describe('Pruebas en 05-funciones.js', () => { 
    
    test('getUser debe de retornar un objeto', () => { 
        
        const userTest = {
            uid:'123456',
            username: 'User_1234'
        }

        const user = getUsuario();

        expect( user ).toEqual( userTest );

     });
    
     test('getUsuarioActivo debe de retornar un objeto', () => { 
        
        const username = 'User_456';

        const userTest = {
            uid:'123456',
            username: username
        }

        const user = getUsuarioActivo( username );

        expect( user ).toEqual( userTest );

     });


 });