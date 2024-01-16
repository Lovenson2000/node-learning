
// console.log(arguments);
// console.log(require('module').wrapper);

const C = require('./test-module1');

const calc1 = new C();
console.log(calc1.add(4, 6));

const calc2 = require('./test-module2');
console.log(calc2.add(12, 4));
console.log(calc2.multiply(12, 4));
console.log(calc2.divide(12, 4));
