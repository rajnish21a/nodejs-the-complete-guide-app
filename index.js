const http = require("http");
const path = require("path");
const express = require("express");
const bodyParser = require('body-parser');
const adminRoutes = require("./routes/admin");
const shopRoute = require("./routes/shop");
const errorController = require("./controller/error");
const app = express();

app.set('view engine','ejs');
app.set('views','view');
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(adminRoutes);
app.use(shopRoute);
app.use(errorController.error404);

app.listen(3000);

