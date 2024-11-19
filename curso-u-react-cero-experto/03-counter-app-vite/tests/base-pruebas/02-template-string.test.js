import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Pruebas al archivo <<- 02-template-string ->>', () => { 
    
    test('getSaludo() debe retornar "Hola Pepe"', () => { 
        const name = 'Pepe';
        const message = getSaludo(name);
        expect(message).toBe(`Hola ${name}`);
     });
    
     test('getSaludo() debe retornar "Hola Carlos" si no se envía argumento', () => { 
        const message = getSaludo();
        expect(message).toBe('Hola Carlos');
     });

 });