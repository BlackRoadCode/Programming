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

export function getUserById( id:number, callback: ( err?:string, user?:User ) => void ){
    const user = users.find( function(user){
        return user.id === id;
    });

    if( !user ){
        return callback(`USUARIO no encontrado ${ id }`, undefined);
    }

    return callback( undefined, user );
}
