
console.clear();

// setTimeout( () => {
//     console.log('Hola Mundo');
// }, 2000);

const getUsuarioByID = ( id, callback ) =>{

    const usuario = {
        id,
        nombre: 'Pepe'
    }

    setTimeout( () => {
       callback( usuario );
    }, 1500 );

}

getUsuarioByID( 10, ( { id, nombre } ) => {

    console.log( id );
    console.log( nombre.toUpperCase() );

});