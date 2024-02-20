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

const getUserById = ( id, callback ) => {
    const user = users.find( (user) => user.id === id);
    ( user ) ? callback( null, user ) : callback(`USUARIO no encontrado ${ id }`, null);
}

module.exports = { getUserById }