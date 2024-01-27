const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'crud');
const filePath = `${dirPath}/apple.txt`;

// create 
fs.writeFileSync(filePath, 'This file is created!');

// read
fs.readFile(filePath, 'utf8', (err, item) => {
    console.log(item)
})

// update 
fs.appendFile(filePath, ' and by calling this name this is updated', (err) => {
    if (!err) console.log('Done!');
})

// rename
fs.rename(filePath, `${dirPath}/fruit.txt`, (err) => {
    if (err) console.log('Rename Done!');
})

// delete
fs.unlinkSync(`${dirPath}/fruit.txt`)
