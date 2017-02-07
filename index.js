"use strict";

const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Hello');
});

app.get('/login', function (req, res) {
    res.send('get login');
});

app.post('/login', function (req, res) {
    res.send('post login');
});

app.listen(3000, function () {
    console.log("servers started at port: 3000");
});
