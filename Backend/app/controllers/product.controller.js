const db = require("../models");
const Product = db.product;

exports.create = (req, res) => {

  const product= new Product({
    category: req.body.category,
    subcategory: req.body.subcategory,
    name: req.body.name,
    price: req.body.price,
    desc: req.body.desc,
    image: req.body.image
  });

  product
    .save(product)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the product.",
      });
    });
};

exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

  Product.find(condition)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving product.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Product.findById(id)
    .then((data) => {
      if (!data) res.status(404).send({ message: "Not found product with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving product with id=" + id });
    });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update cannot be empty!",
    });
  }

  const id = req.params.id;

  Product.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update product with id=${id}. Maybe product was not found!`,
        });
      } else res.send({ message: "Product was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating product with id=" + id,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Product.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete product with id=${id}. Maybe product was not found!`,
        });
      } else {
        res.send({
          message: "Product was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete product with id=" + id,
      });
    });
};

exports.deleteAll = (req, res) => {
  Product.deleteMany({})
    .then((data) => {
      res.send({
        message: `${data.deletedCount} Products were deleted successfully!`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while removing all products.",
      });
    });
};