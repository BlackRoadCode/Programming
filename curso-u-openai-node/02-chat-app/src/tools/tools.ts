
const getTimeOfDay = ():string => {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';    

    hours = hours % 12;
    hours = hours ? hours : 12; // El mediodía es 12 PM

    const formattedTime = `${hours}:${minutes} ${ampm}`;
    return formattedTime;
}

const getOrderStatus = (orderId:string):string => {
    console.log( `Obteniendo el estatus de la orden ${ orderId }` );
    const orderAsNumber = parseInt(orderId);
    return ( orderAsNumber % 2 == 0 ) ? 'IN_PROGRES' : 'COMPLETED';
}

const getOrderStatus_api = async (orderId: string): Promise<string> => {
    console.log( `Obteniendo el estatus de la orden ${ orderId }` );
    const orderAsNumber: number = parseInt(orderId);

    if (orderAsNumber % 2 === 0) {
        const response = await fetch('https://rickandmortyapi.com/api/character/2');
        const data = await response.json();
        return data.name;
    } else {
        const response = await fetch('https://rickandmortyapi.com/api/character/1');
        const data = await response.json();
        return data.name;
    }
}

export {
    getTimeOfDay,
    getOrderStatus
}