interface User {
    id:number;
    name:string;
}

const users:User[] = [
    {
        id:1,
        name: 'Juan Pérez'
    },
    {
        id:2,
        name: 'Juana Peña'
    }
];

export const getUserById = ( id:number, callback: ( err?:string, user?:User ) => void ) => {
    const user = users.find( (user) => user.id === id);
    ( user ) ? callback( undefined, user ) : callback(`USUARIO no encontrado ${ id }`, undefined);
}
