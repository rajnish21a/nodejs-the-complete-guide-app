const express = require('express');
const path = require('path');
const productsController = require('./../controller/products');
const routes = express.Router();


routes.get('/add-product',productsController.getAddProduct);

routes.post('/add-product', productsController.postNewProduct);

module.exports = routes;