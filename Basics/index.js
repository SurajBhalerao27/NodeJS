const app = require('./app')

console.log(app);
console.log(app.x);
console.log(app.y);
console.log(app.z());

const arr = [2, 4, 5, 6, 8, 9, 1, 2];

const res = arr.filter((item) => {
    return item > 5
})
console.log(res);