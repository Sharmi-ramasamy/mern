/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const db = require("../models");
const Cart = db.cart;

exports.create = (req, res) => {

  const cart= new Cart({
    category: req.body.category,
    SubCategory: req.body.SubCategory,
    name: req.body.name,
    price: req.body.price,
    desc: req.body.desc,
    image: req.body.image,
    email: req.body.email,
    quantity: req.body.quantity,
    value: req.body.value,
  });

  cart
    .save(cart)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the cart.",
      });
    });
};

exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

  Cart.find(condition)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving cart.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Cart.findById(id)
    .then((data) => {
      if (!data) res.status(404).send({ message: "Not found cart with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving cart with id=" + id });
    });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }

  const id = req.params.id;

  Cart.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update cart with id=${id}. Maybe Tutorial was not found!`,
        });
      } else res.send({ message: "Cart was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating cart with id=" + id,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Cart.findByIdAndRemove(id)
    .then((data) => {POST
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Cart with id=${id}. Maybe Cart was not found!`,
        });
      } else {
        res.send({
          message: "Cart was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete cart with id=" + id,
      });
    });
};

exports.deleteAll = (req, res) => {
  Cart.deleteMany({})
    .then((data) => {
      res.send({
        message: `${data.deletedCount} carts were deleted successfully!`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while removing all carts.",
      });
    });
};
