/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const db = require("../models");
const Checkout = db.checkout;

exports.create = (req, res) => {
  const checkout= new Checkout({
    name: req.body.name,
    email: req.body.email,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
  });

  checkout
    .save(checkout)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the checkout.",
      });
    });
};

exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

  Checkout.find(condition)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving checkout.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Checkout.findById(id)
    .then((data) => {
      if (!data) res.status(404).send({ message: "Not found checkout with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving checkout with id=" + id });
    });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }

  const id = req.params.id;

  Checkout.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update checkout with id=${id}. Maybe checkout was not found!`,
        });
      } else res.send({ message: "Checkout was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating checkout with id=" + id,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Checkout.findByIdAndRemove(id)
    .then((data) => {POST
      if (!data) {
        res.status(404).send({
          message: `Cannot delete checkout with id=${id}. Maybe checkout was not found!`,
        });
      } else {
        res.send({
          message: "Checkout was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete checkout with id=" + id,
      });
    });
};

exports.deleteAll = (req, res) => {
  Checkout.deleteMany({})
    .then((data) => {
      res.send({
        message: `${data.deletedCount} Checkout were deleted successfully!`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while removing all checkout.",
      });
    });
};
