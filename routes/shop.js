const express = require('express');
const path = require('path');
const routes = express.Router();
const adminData = require("./admin");

routes.get('/',(req, res)=>{
    res.render('shop',{
        pageTitle: "Shop",
        prods:adminData.prods,
        path:'/',
        formCSS:true,
        productCSS: true,
        activeAddProduct: true,
    });
    //res.sendFile(path.join(__dirname, '../','view', 'shop.html'));
});

module.exports = routes;