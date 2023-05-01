const express = require('express');
const routerProduct = require('./routers/activity');

const app = express();


app.use(express.json());

app.use('/activity', routerProduct);


module.exports = app;