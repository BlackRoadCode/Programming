import { getHeroeById, getHeroeByOwner } from "./bases/08-import-export";

// const promesa = new Promise( ( resolve, reject ) => {

//     setTimeout(() => {

//         const heroe = getHeroeById(2);
//         resolve(heroe);
//         // reject('No se pudo encontrar el héroe solicitado.');
//     }, 2000 );

// });

// promesa.then( ( heroe ) => {
//     console.log('Héroe: ', heroe);
// }).catch( ( err ) => console.error(err) )

const getHeroeByIdAsync = ( id ) => {
    return new Promise( ( resolve, reject ) => {

        setTimeout(() => {    
            const heroe = getHeroeById( id );

            if( heroe !== undefined ){
                resolve(heroe);
            } else {
                reject('No se encontró al héroe solicitado.');
            }

        }, 2000 );
    
    });
}

getHeroeByIdAsync( 1 )
    .then( (heroe) => console.log('Héroe: ', heroe))
    .catch( err => console.warn( err ) );


const getHeroeByIdAsyncProfe = ( id ) => {
    return new Promise( ( resolve, reject ) => {

        setTimeout(() => {    
            const heroe = getHeroeById( id );

            if( heroe ){
                resolve(heroe);
            } else {
                reject('No se encontró al héroe solicitado.');
            }

        }, 2000 );
    
    });
}

getHeroeByIdAsyncProfe( 3 )
    .then( console.log )
    .catch( console.warn );

// -------------------------------------------- second lap

const getHeroeByIdAsyncSecond = ( id ) => {

    return new Promise( ( resolve, reject ) => {

        setTimeout(() => {
            const heroe = getHeroeById(id);
            ( heroe )? resolve( heroe ) : reject('No se pudo encontrar el héroe solicitado.');
        }, 2000);
    
    });

};

getHeroeByIdAsyncSecond( 17 )
    .then( console.log )
    .catch( console.warn);