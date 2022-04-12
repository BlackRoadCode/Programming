const saludar2 =  (nombre) => `Hola, ${ nombre }`;

export const getUsuario = ( nombre ) => ({
    uid:'123456',
    username: 'User_1234'
});

export const getUsuarioActivo = ( nombre ) => ({
    uid:'123456',
    username: nombre
});
