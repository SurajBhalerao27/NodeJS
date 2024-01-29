const express = require('express');
const app = express();

app.get('', (req, res) => {
    // console.log("data send by browser===>",req.query.name);
    res.send(`
        <input type="text" placeholder="Enter Here" value = "${req.query.name}"/>
        <button> Add </button>
    `);
});

app.get('/about', (req, res) => {
    res.send(
        {
            name:"Suraj",
            email:"Suraj@gmail.com"
        }
    );
});

app.get('/help', (req, res) => {
    res.send('This is help page');
});
app.listen(5000);