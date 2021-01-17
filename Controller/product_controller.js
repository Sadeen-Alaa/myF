const product = require('../models/product_model');
exports.getProducts = (req, res, next) => {
    product.find({}).then((Result) => {
        res.send(Result);
    }).catch()
    res.end();
}