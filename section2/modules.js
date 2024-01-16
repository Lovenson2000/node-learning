
// console.log(arguments);
// console.log(require('module').wrapper);

const C = require('./test-module1');

const calc1 = new C();
console.log(calc1.add(4, 6));

const { add, multiply, divide } = require('./test-module2');

console.log(add(12, 4)); // 16
console.log(multiply(12, 4)); // 48
console.log(divide(12, 4)); // 3

//Caching

require('./test-module3')();
require('./test-module3')();
require('./test-module3')();
