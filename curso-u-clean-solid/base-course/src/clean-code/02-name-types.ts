(() => {

    // arreglo de temperaturas celsius
    const celsiusList = [33.6, 12.34];

    // Dirección ip del servidor
    const serverAddress = '123.123.123.123';

    // Listado de usuarios
    const users = [
        { id: 1, email: 'fernando@google.com' },
        { id: 2, email: 'juan@google.com' }, 
        { id: 3, email: 'melissa@google.com' }
    ];

    // Listado de emails de los usuarios
    const usersEmails = users.map( user => user.email );

    // Variables booleanas de un video juego
    const canJump = false;
    const canRun = true;
    const hasItems = false;
    const isLoading = true;

    // Otros ejercicios
    // tiempo inicial
    const startTime = new Date().getTime();
    //....
    // 3 doritos después
    //...
    // Tiempo al final
    const endTime = new Date().getTime() - startTime;

    // Funciones
    // Obtiene los libros
    function getBooks() {
        throw new Error('Function not implemented.');
    }

    // obtiene libros desde un URL
    function getBooksFromUrl( endpointUrl: string) {
        throw new Error(`Function not implemented. ${ endpointUrl }`);
    }
    
    // obtiene el área de un cuadrado basado en sus lados
    function getSquareArea( side: number ) {
        throw new Error(`Function not implemented. ${ side }`);
    }

    // imprime el trabajo
    function printJob() {
        throw new Error('Function not implemented.');
    }

    // bien
    function sendEmail( toWhom:string, from:string, body:string ): boolean{
        return false;
    }

    // no muy bien
    function sendEmail( numero:number, numero2:number, otracosa:number ): boolean{
        return false;
    }

    sendEmail( 'param', 'param', 'param');
    sendEmail( 1,2,3);


})();
