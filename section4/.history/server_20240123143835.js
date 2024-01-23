const app = require("./app");
const dotenv = require('dotenv');
const { path } = require("./app");


dotenv.config({path: './config.env'})
console.log(process.env);

/************** START SERVER ****************/
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server listening on port${port}`);
});