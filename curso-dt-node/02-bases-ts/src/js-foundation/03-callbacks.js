const users = [
    {
        id:1,
        name: 'Juan Pérez'
    },
    {
        id:2,
        name: 'Juana Peña'
    }
];

function getUserById( id, callback ){
    const user = users.find( function(user){
        return user.id === id;
    });

    if( !user ){
        return callback(`USUARIO no encontrado ${ id }`, null);
    }

    return callback( null, user );
}

module.exports = { getUserById }