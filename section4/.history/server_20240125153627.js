const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require("./app");
const { string } = require('prop-types');

dotenv.config({path: './config.env'})

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);
mongoose
    // .connect(process.env.DATABASE_LOCAL, {
    .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => console.log('DB Connection successful'));


const Tour = mongoose.model('Tour', tourSchema);

const testTour = new Tour({
    name: "The Park Camper",
    price: 997
});
testTour.save().then(doc => {
    console.log(doc);
}).catch(error => {
    console.log('ERROR', error);
})


/************** START SERVER ****************/
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});