const input = process.argv;
const fs = require('fs');

/* arguments starts from the 2 place because the process have many of the arguments by default present and if we prints the 
  arguments then their is pre-defined two arguments present their 
   one is the file directory and another is also the default directory there so it starts to take arguments from the 2nd place.
*/

if (input[2] == 'add') {  //it is shows that the argument at 2 place in the terminal is accepted and process further.
    fs.writeFileSync(process.argv[3], process.argv[4]);
} else if (input[2] == 'remove') {
    fs.unlinkSync(process.argv[3]);
} else {
    console.log("Invalid input")
}