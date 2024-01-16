
// console.log(arguments);
// console.log(require('module').wrapper);

const C = require('./test-module1');

const calc1 = new C();
console.log(calc1.add(4, 6));

const calc2 = require('./test-module2');
calc2.
