const express = require('express');
const {getAll, getById, create, update, deleteAc, activityCompleted} = require('../controll/activityControll');

const routerProduct = express.Router();

routerProduct.get('/', getAll);
routerProduct.get('/:idActivity', getById);
routerProduct.put('/complete/:idActivity', activityCompleted);
routerProduct.post('/', create);
routerProduct.put('/:idActivity', update);
routerProduct.delete('/:idActivity', deleteAc);

module.exports = routerProduct;
