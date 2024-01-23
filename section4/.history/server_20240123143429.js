const app = require("./app");
const dotenv = require('dotenv');


console.log(process.env);

/************** START SERVER ****************/
const port = 3000;
app.listen(port, () => {
    console.log(`Server listening on port${port}`);
});