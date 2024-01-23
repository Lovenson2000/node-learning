dotenv.config({path: './config.env'})
const dotenv = require('dotenv');
const app = require("./app");



console.log(process.env);

/************** START SERVER ****************/
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server listening on port${port}`);
});