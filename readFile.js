const fs = require('fs').promises;

fs.readFile('./readme.txt')
    .then((data) => {
        console.log(data);
        console.log(data.toString());
        return fs.writeFile('./readme.txt', '잘 읽었습니다.');
    })
    .then(() => {
        return fs.readFile('./readme.txt');
    })
    .catch((err) => {
        console.error(err);
    });














