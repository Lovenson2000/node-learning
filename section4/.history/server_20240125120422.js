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

const tourSchema = new mongoose.Schema({
    name: {
        type: String,
        required: ['true', 'A name is required'],
        unique: true
    },
    rating: {
        type: Number,
        default: 4.5
    },
    price: {
        type: Number,
        required: ['true', 'A price is required']
    },
});

const Tour = mongoose.model('Tour', tourSchema);


/************** START SERVER ****************/
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});