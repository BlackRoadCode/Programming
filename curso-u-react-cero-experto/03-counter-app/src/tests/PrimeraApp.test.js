import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';

describe('Pruebas en PrimeraApp componente React', () => {

    test('Debe de mostrar el mensaje "Hola, soy, Goku" ', ( ) => {
        const saludo = 'Hola, Soy Goku';
        const { getByText } = render( <PrimeraApp saludoProp={ saludo } /> );

        expect( getByText(saludo) ).toBeInTheDocument();

     });

});