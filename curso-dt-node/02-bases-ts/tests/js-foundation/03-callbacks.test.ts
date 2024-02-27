import { getUserById } from "../../src/js-foundation/03-callbacks";

describe("js-foundation/03-callbacks.ts", () => {

    test('getUserById should return an error', (done) => {

        const id = 10;
        getUserById( id, ( error, user ) => {
            expect(error).toBe(`USUARIO no encontrado ${ id }`);
            expect(user).toBeUndefined();

            done();
        });

    });
   
    test('getUserById should return Juan Pérez user', (done) => {

        const id = 1;

        getUserById( id, ( error, user ) => {
            expect(user).toStrictEqual( { id:1, name:'Juan Pérez' } );
            expect(error).toBeUndefined();

            done();
        });

    });

});