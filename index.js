const http = require("http");
const path = require("path");
const express = require("express");
const bodyParser = require('body-parser');
const adminData = require("./routes/admin");
const shopRoute = require("./routes/shop");
const app = express();

app.set('view engine','ejs');
app.set('views','view');
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(adminData.routes);
app.use(shopRoute);

app.use((req,res)=>{
    res.render('404',{pageTitle: "Page Not Found"});
    //res.status(404).sendFile(path.join(__dirname, 'view','404.html'));
});

app.listen(3000);

