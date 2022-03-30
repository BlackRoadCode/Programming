import _ from 'lodash';

const data = [
  {
    username: 'pepe',
    role: 'admin'
  },
  {
    username: 'karina',
    role: 'seller'
  },
  {
    username: 'hector',
    role: 'seller'
  },
  {
    username: 'iker',
    role: 'seller'
  }
];

const rta = _.groupBy(data, (item) => item.role);
console.log(rta);
