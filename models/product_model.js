const mongoose = require("mongoose"),
      Schema = mongoose.Schema;
let product_schema = new Schema ({
    id : String,
    name: {type: String, required: true},
    category : [{type: String, maxlength: 40}],
    description: {type: String}
})
module.exports = mongoose.model('product', product_schema, "product");