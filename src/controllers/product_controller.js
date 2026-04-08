const Product = require('../models/product'); 
const mongoose = require('mongoose');

class ProductController {
  static index(req, res) {
    mongoose.connect(process.env.MONGO_URI)
      .then(() => {
        Product.find({})
        .then((products) => {
          res.send
          (JSON.stringify({
            success: true,
            data: products

          }),
        );
          mongoose.connection.close();

        }).catch((err) => {
          mongoose.connection.close();
          res.send('QWERTY');
        }
      );
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send("Error");
      });
  }

  static show(req, res) {
    return Products[req.params.id];
  }

  static create(req, res) {
    const { name, description, brand } = req.body; 
    let product = {
      name: name,
      description: description,
      brand: brand,
    };

    Products[Products.length] = product; 
    
    return res.json(product);
  }

  static update(req, res) {
    const { id } = req.params;
    const { name, description, brand } = req.body;

    let product = Object(Products[id]);
    if (name !== undefined) product.name = name;
    if (description !== undefined) product.description = description;
    if (brand !== undefined) product.brand = brand;

    Products[id] = product;
    return res.json(product);
  }

  static delete(req, res) {
    const { id } = req.params;
    Products[id] = null;

    return res.json({ success: true });
  }
}
module.exports = ProductController;