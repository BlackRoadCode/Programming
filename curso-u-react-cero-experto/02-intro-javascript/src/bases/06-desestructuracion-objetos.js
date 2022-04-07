
const person = {
    name: 'Tony',
    age: 45,
    key: 'Ironman',
    range: 100,
    geolocal:{
        lat: 12.12145,
        long: 415.23565
    }
};

const ouseContext = ( { name, key, age, range = 50, geolocal } ) => {
    // console.log( `Han sido extraídos el nombre: ${ name } y la edad: ${ age } y su rango es: ${ range }` );

    return {
        nombreClave: key,
        edad: age,
        ubicacion: geolocal
    }

};

const { nombreClave, edad, ubicacion:{ lat, long } } = ouseContext( person );
console.log( nombreClave, edad );
console.log( lat, long );