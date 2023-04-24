const express = require('express');
const app = express();

const userRoutes = require('./user.routes');
const categoryRoutes = require("./category.routes");
const subcategoryRoutes = require("./subcategory.routes");
const productRoutes = require("./product.routes");
const cartRoutes = require("./cart.routes");

app.use(cartRoutes,productRoutes,subcategoryRoutes,categoryRoutes,userRoutes)