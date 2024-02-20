
const { getAge, getUUID, buildLogger } = require('./plugins');
// const { buildMakePerson } = require('./js-foundation/05-factory');
// const { emailTemplate } = require('./js-foundation/01-template');
// require('./js-foundation/02-destructuring');
// const { getUserById } = require('./js-foundation/03-callbacks');
// const { getUserById } = require('./js-foundation/04-arrow');

// const {getPokemonById, getAlternativeDataByCode} = require('./js-foundation/06-promises');

// getPokemonById(4)
//     .then( (pokemon) => console.log({pokemon}))
//     .catch( ( err ) => console.error(err) )
//     .finally( () => console.log('Finalizado') );

const logger = buildLogger('app.js');

logger.log('Hola Mundo');
logger.error('Este es un error');


// getAlternativeDataByCode(3354483).then( (data) => console.log(data));

//! Referencia a la función factory y uso
// const makePerson = buildMakePerson({getAge, getUUID});
// const obj = { name: 'Juan Perez', birthdate: '1982-12-24' };
// const pepe = makePerson( obj );
// console.log({ pepe });

//* kajshdasjkdhaskjda

// todo alskjdsakldjalksdjaks

// ? kashdjkasdhasjkdhjkasd

