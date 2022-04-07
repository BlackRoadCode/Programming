
const person = {
    name:'Tony',
    lastName:'Stark',
    age:45,
    direction:{
        city:'New York',
        street:'Main street',
        sipcode: 90210,
        lat: 14.3232,
        lng: 50.1212
    }
};

const person2 = {...person};
person2.name = 'Peter';

// console.table( person );
console.log( person );
console.log( person2 );