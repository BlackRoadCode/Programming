
describe( 'Agrupador de pruebas inicial', () =>{

    test('Debe de ser true', () => { 
        const isActive = false;
    
        if ( isActive ){
            throw new Error('Está inactivo');
        } 
     });

});
