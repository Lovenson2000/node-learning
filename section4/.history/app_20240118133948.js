const fs = require('fs');
const express = require('express');

const app = express();

// app.get('/', (req, res) => {
//     res
//         .status(200)
//         .json({ message: "Hello from the Express Server...", app: "Natours" });
// });

// app.post('/', (req, res) => {
//     res.status(200);
//     res.json({message: "You can post to this URL...😊", app: "Natours Project"});
// });

const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`));

app.get('api/v1/tours', (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            tours
        }
    })
})

const port = 3000;
app.listen(port, () => {
    console.log(`App running on port${port}...`);
})