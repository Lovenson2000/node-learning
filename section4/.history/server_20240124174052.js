const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require("./app");

dotenv.config({path: './config.env'})
const DB = process.env.DATABASE.replace('<PASSWORD>'), ;
mongoose.connect();

/************** START SERVER ****************/
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server listening on port${port}`);
});