
import heroes, { owners } from "../data/heroes";

// console.log(owners);

const getHeroeById = ( id ) => {
    return heroes.find( heroe => heroe.id === id );
}
// console.log( getHeroeById(3) );

// const getHeroeByIdProfe = ( id ) => heroes.find( ( heroe ) => heroe.id === id );
// console.log( getHeroeByIdProfe(3) );

const getHeroeByOwner = ( owner ) => {
    return heroes.filter( ( heroe ) => heroe.owner === owner );
};
// console.log( getHeroeByOwner('Marvel') );

// const getHeroeByOwnerProfe = ( owner ) => heroes.filter( ( heroe ) => heroe.owner === owner );
// console.log( getHeroeByOwnerProfe('DC') );

export {
    getHeroeById,
    getHeroeByOwner
}