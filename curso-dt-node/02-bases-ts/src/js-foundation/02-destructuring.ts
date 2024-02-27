
const { NODE, NUMBER_OF_PROCESSORS, USERNAME } = process.env;

// console.log( NODE );
// console.log( NUMBER_OF_PROCESSORS );
// console.log( USERNAME );


console.log({ NODE, NUMBER_OF_PROCESSORS, USERNAME });
console.table({ NODE, NUMBER_OF_PROCESSORS, USERNAME });

export const heroes = ['Spiderman', 'Batman', 'Ironman', 'Thor',];

const [ , , , miHeroe ] = heroes;

console.log( miHeroe );