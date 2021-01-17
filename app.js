const express = require("express"),
      app = express(),
      mongo = require("mongoose"),
      product = require("./routes/product_route");
mongo.connect("mongodb://localhost:27017/products", {useUnifiedTopology:true, useNewUrlParser: true}).then(()=> {
    console.log("connected");
});
app.get("/", function(req, res, next) {
    res.status(400).send("skf")
})
app.use("/products", product)
app.listen(3007, "localhost", ()=>{
    console.log("Server is running");
});