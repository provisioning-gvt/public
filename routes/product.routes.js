module.exports = app => {
  const products = require("../controllers/product.controller.js");
  var router = require("express").Router();

  // Create a new Product
  router.post("/", products.create);

  // Retrieve all Products
  router.get("/", products.findAll);

  // Update a Product with id
  router.put("/:id", products.update);

  app.use('/api/products', router);
};
