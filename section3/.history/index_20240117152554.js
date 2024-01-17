
const fs = require('fs');
const { dirname } = require('path');
const superagent = require('superagent');

// fs.readFile(`${__dirname}/dog.txt`, (err, data) => {

//     superagent
//         .get(`https://dog.ceo/api/breed/${data}/images/random`)
//         .end((err, res) => {
//             if (err) return console.log(err.message);
//             console.log(res.body.message);

//             fs.writeFile('dog-img.txt', res.body.message, err => {
//                 if (err) return console.log(err.message);
//                 console.log('Random Dog image saved to file');
//             })
//         });
// })

//Using Promises to fetch an API

// fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
//     superagent.get(`https://dog.ceo/api/breed/${data}/images/random`)
//         .then(res => {
//             console.log(res.body.message);
//             fs.writeFile('dog-img.txt', res.body.message, err => {
//                 if (err) return console.log(err.message);
//                 console.log('Random Dog image saved to file');
//             })
//         }).catch(err => {
//             console.log(err.message);
//         })
// })

const readFilePromise = file => {
    return new Promise((resolve, reject) => {
      fs.readFile(file, (err, data) => {
        if (err) reject('I could not find that file 😢');
        resolve(data);
      });
    });
  };
  
  const writeFilePromise = (file, data) => {
    return new Promise((resolve, reject) => {
      fs.writeFile(file, data, err => {
        if (err) reject('Could not write file 😢');
        resolve('success');
      });
    });
  };

readFilePromise(`${__dirname}/dog.txt`).then(data => {
    console.log(data);

    superagent.get(`https://dog.ceo/api/breed/${data}/images/random`)
        .then(res => {
            console.log(res.body.message);
            fs.writeFile('dog-img.txt', res.body.message, err => {
                if (err) return console.log(err.message);
                console.log('Random Dog image saved to file');
            })
        }).catch(err => {
            console.log(err.message);
        })
})

const getDocPIc = async () => {
    try {
        const data = await readFilePromise(`${__dirname}/dog.txt`);
        console.log(data);

        const res = await superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
        console.log(res.body.message);

        await write
        
    } catch (error) {
        
    }
}