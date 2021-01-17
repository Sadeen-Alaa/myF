const express = require("express"),
      router = express.Router(),
      product_controller = require("../Controller/product_controller");
      router.get("/getProducts", product_controller.getProducts);

      module.exports = router;