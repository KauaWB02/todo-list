const express = require('express');
const routerProduct = require('./routers/activity');
const cors = require('cors')

const app = express();

app.use(cors())
app.use(express.json());

app.use('/activity', routerProduct);


module.exports = app;