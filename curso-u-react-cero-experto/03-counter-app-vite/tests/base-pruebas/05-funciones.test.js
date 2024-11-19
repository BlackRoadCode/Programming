import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas en el archivo <<- 05-funciones ->>', () => { 

    test('getUser debe de retornar un objeto', () => { 

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect( testUser ).toEqual( user );

     });

     test('getUsuarioActivo() debe de retornar un objeto con el nombre/param', () => {

        const name = 'Pepe';
        const usuarioActivo = getUsuarioActivo( name );

        expect( usuarioActivo ).toEqual( {
            uid: 'ABC567',
            username: name
        });

     });

 });