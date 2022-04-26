const express = require('express');
const path = require('path');
const routes = express.Router();
const adminData = require("./admin");
const productsController = require('../controller/products');

routes.get('/',productsController.getProduct);

module.exports = routes;