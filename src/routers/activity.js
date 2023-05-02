const express = require('express');
const { getAll, getById, create, update } = require('../controll/activityControll')


const routerProduct = express.Router();


routerProduct.get('/', getAll);
routerProduct.get('/:idActivity', getById);
routerProduct.post('/', create);
routerProduct.put('/', update);



module.exports = routerProduct;