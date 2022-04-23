const express = require('express');
const path = require('path');
const routes = express.Router();
const prods = [];

routes.get('/add-product',(req, res, next)=>{
    res.render('add-product',{
        pageTitle: 'Add Product',
        path:'/admin/add-product',
        formCSS:true,
        productCSS: true,
        activeAddProduct: true,
    });
    //res.sendFile(path.join(__dirname, '../', 'view', 'add-product.html'));
});

routes.post('/add-product',(req, res)=>{
    console.log(req.body);
    prods.push(req.body);
    res.redirect('/');
});

exports.prods = prods;
exports.routes = routes;