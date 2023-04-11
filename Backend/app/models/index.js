const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.category = require("./category.model.js")(mongoose);
db.subcategory = require("./subcategory.model.js")(mongoose);
db.product = require("./product.model.js")(mongoose);
db.cart = require("./cart.model.js")(mongoose);
db.user = require("./user.model.js")(mongoose);
db.checkout = require("./checkout.model.js")(mongoose);
module.exports = db;
