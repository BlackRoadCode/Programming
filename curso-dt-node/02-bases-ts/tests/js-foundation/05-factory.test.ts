import { buildMakePerson } from "../../src/js-foundation/05-factory";

describe('js-foundation/05-factory.ts', () => {

    const getUUID = () => '123';
    const getAge = () => 35;

    test('buildMakePerson should return a function', () => {
        const makePerson = buildMakePerson({ getUUID, getAge });
        expect(typeof makePerson).toBe('function');
    });

    test('buildMakePerson should return a person object', () => {

        const makePerson = buildMakePerson({ getUUID, getAge });
        const juanPerez = makePerson({ name:'Juan Perez', birthdate:'1982-12-24' });

        expect(juanPerez).toEqual({
            id: '123',
            name: 'Juan Perez',
            birthdate: '1982-12-24',
            age: 35,
        });

    });

});
