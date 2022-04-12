import { getHeroeById } from "./08-import-export";

export const getHeroeByIdAsync = ( id ) => {
    return new Promise( ( resolve, reject ) => {

        setTimeout(() => {    
            const heroe = getHeroeById( id );

            if( heroe ){
                resolve(heroe);
            } else {
                reject('No se encontró al héroe solicitado.');
            }

        }, 1500 );
    
    });
}