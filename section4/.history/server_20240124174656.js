const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require("./app");

dotenv.config({path: './config.env'})

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);
mongoose
    .connect(process.env.DATABASE_LOCAL, {
    // .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => console.log('DB Connection successful'));

/************** START SERVER ****************/
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server listening on port${port}`);
});