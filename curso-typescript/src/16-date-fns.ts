// En esta clase se abordó el tema de las librerías que tienen soporte Javascript, se udó la librería date-fns muy buena para el manejo de fechas.
// https://date-fns.org/

import { subDays, format } from 'date-fns'

const date = new Date(1998, 2, 28);
const rta = subDays( date, 29 );
const str = format( rta, 'dd/MM/yyyy' )

console.log( str );
