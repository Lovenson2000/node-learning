const app = require("./app");


console.log(process.env);
console.log(process.env.PWD);

/************** START SERVER ****************/
const port = 3000;
app.listen(port, () => {
    console.log(`Server listening on port${port}`);
});