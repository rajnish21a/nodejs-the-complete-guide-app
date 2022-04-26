const Product = require("./../model/product");

exports.getAddProduct = (req, res, next)=>{
    res.render('add-product',{
        pageTitle: 'Add Product',
        path:'/admin/add-product',
        formCSS:true,
        productCSS: true,
        activeAddProduct: true,
    });
}

exports.postNewProduct = (req, res)=>{
    const product1 = new Product(req.body.title);
    product1.save();
    res.redirect('/');
}

exports.getProduct = (req, res)=>{
    res.render('shop',{
        pageTitle: "Shop",
        products: Product.fetchAll(),
        path:'/',
        formCSS:true,
        productCSS: true,
        activeAddProduct: true,
    });
}