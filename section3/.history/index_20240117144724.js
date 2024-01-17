
const fs = require('fs');
const { dirname } = require('path');
const superagent = require('superagent');

fs.readFile(`${__dirname}/dog.txt`, (err, data) => {

    superagent
        .get(`https://dog.ceo/api/breed/${data}/images/random`)
        .end((err, res) => {
            if (err) return console.log(err.message);
            console.log(res.body.message);

            fs.writeFile('dog-img.txt', res.body.message, err => {
                if (err) return console.log(err.message);
                console.log('Random Dog image saved to file');
            })
        });
})


fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
    superagent.get(`https://dog.ceo/api/breed/${data}/images/random`)
        .then(res => {
            if (err) return console.log(err.message);
            console.log(res.body.message);

            fs.writeFile('dog-img.txt', res.body.message, err => {
                if (err) return console.log(err.message);
                console.log('Random Dog image saved to file');
        })  
    })
})