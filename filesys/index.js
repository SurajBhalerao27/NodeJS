const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname);

// for (let i = 1; i <= 5; i++) {
//     // fs.writeFileSync("demo.txt","DEMO FILE IS HERE");// this will create demo.txt file outside of the folder structure and also creates only one file.
//     fs.writeFileSync(dirPath + "/demo" + i + ".txt", "DEMO FILE IS HERE"); // this will create 5 files with diff names in the given directory
// }

// to read / display which files are present at the given directory
fs.readdir(dirPath,(err,file)=>{
    // console.log(file); // this will displays the all files present in the directory in the array form.
    file.forEach(data => {
        console.log(data); // this will gives us the all files in the directory separately diff files there.
    });
});
console.log(dirPath);