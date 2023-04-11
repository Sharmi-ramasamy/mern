const db = require("../models");
const Category = db.category;

exports.create = (req, res) => {
  const category= new Category({
    name: req.body.name,
    image: req.body.image,
  });

  category
    .save(category)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the category.",
      });
    });
};

exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

  Category.find(condition)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving catgeory.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Category.findById(id)
    .then((data) => {
      if (!data) res.status(404).send({ message: "Not found category with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving category with id=" + id });
    });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }

  const id = req.params.id;

  Category.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update category with id=${id}. Maybe category was not found!`,
        });
      } else res.send({ message: "Category was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating category with id=" + id,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Category.findByIdAndRemove(id)
    .then((data) => {POST
      if (!data) {
        res.status(404).send({
          message: `Cannot delete category with id=${id}. Maybe category was not found!`,
        });
      } else {
        res.send({
          message: "Category was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete category with id=" + id,
      });
    });
};

exports.deleteAll = (req, res) => {
  Category.deleteMany({})
    .then((data) => {
      res.send({
        message: `${data.deletedCount} Category were deleted successfully!`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while removing all category.",
      });
    });
};

