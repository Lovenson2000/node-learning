const app = require("./app");
const dotenv = require('dotenv');
const { path } = require("./app");


dotenv.config({path: './config.env'})
console.log(process.env);

/************** START SERVER ****************/
const port = 3000;
app.listen(port, () => {
    console.log(`Server listening on port${port}`);
});