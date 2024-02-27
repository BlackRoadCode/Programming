import { heroes } from "../../src/js-foundation/02-destructuring";


describe('js-foundation/02-destructuring.ts', () => {

    test('heroes should contain Batman and Thor ', () => {

        expect(heroes).toContain('Batman');
        expect(heroes).toContain('Thor');

    });

    test('First heroe should be spiderman', ()=>{

        const [spiderman, batman] = heroes;

        expect(spiderman).toBe('Spiderman');
        expect(batman).toBe('Batman');

    });
    
});