const getFlightAvailability = ( flightDestiny:string ):string => {
    switch (flightDestiny) {
        case 'LAX':
        case 'AYP':
        case 'BGW':
            return 'AVAILABLE';
        case 'BAH':
        case 'BBA':
        case 'BWI':
        case 'BKO':
            return 'NOT_AVAILABLE';
        default:
            return 'NOT_AVAILABLE';
    }
}

const reserveFlightByDestiny = ( ):string => {
    return 'RES1234';
}

export { 
    getFlightAvailability, 
    reserveFlightByDestiny 
}
