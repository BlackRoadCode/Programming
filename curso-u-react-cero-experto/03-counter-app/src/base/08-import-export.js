
import heroes from '../data/heroes';

const getHeroeById = ( id ) => {
    return heroes.find( heroe => heroe.id === id );
}

const getHeroeByOwner = ( owner ) => {
    return heroes.filter( ( heroe ) => heroe.owner === owner );
};

export {
    getHeroeById,
    getHeroeByOwner
}