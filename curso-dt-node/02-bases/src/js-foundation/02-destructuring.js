
const { NODE, NUMBER_OF_PROCESSORS, USERNAME } = process.env;

// console.log( NODE );
// console.log( NUMBER_OF_PROCESSORS );
// console.log( USERNAME );


console.log({ NODE, NUMBER_OF_PROCESSORS, USERNAME });
console.table({ NODE, NUMBER_OF_PROCESSORS, USERNAME });

const heroes = ['Batman', 'Ironman', 'Thor', 'Spiderman'];

const [ , , , miHeroe ] = heroes;

console.log( miHeroe );