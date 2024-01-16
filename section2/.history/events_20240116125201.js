const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.on("newSale", () => {
    console.log("There was a new sale!");
})

myEmitter.on("newSale", () => {
    console.log("Customer name, Blatter");
})

myEmitter.on("newSale", stock => {
    console.log(`There are ${}`);
})

myEmitter.emit("newSale", 9);