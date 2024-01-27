// this is first task to load variables.
let a = 10;
let b = 0;
// this is second task that load this function
setTimeout(() => {
    b = 20;
}, 2000)
// this is third task that load this statement
console.log(a+b)
console.log('Above in late not able to print the addition bcoz of that reason');
console.log();
console.log();
console.log('Below is wated for and then print result properly');
/* But i asynchronous programming node does not wait for second as it takes 2 sec to execute so it will jump on next 
    statement and run that first and then the second will execute here.

    This is the drawback of it  so then we have multiple ways to handle it
    1. use promises
    2. use callbacks
    3. use async await

    let's see 1. using promises
*/

let waitingData = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(20)
    },2000)
}).then((data)=>{
    b=data;
    console.log(a+b);
})

