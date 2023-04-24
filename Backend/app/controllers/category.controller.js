const db = require("../models");
const Category = db.category;

exports.create = async (req, res) => {
  try {
    const category = new Category({
      name: req.body.name,
      image: req.body.image,
    });

    const data = await category.save();
    res.send(data);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the category.",
    });
  }
};


exports.findAll = async (req, res) => {
  try {
    const data = await Category.find();
    const filters = req.query;
    const filteredCategory = data.filter(product => {
      let values = true;
      for (key in filters) {
        values = values && product[key] == filters[key]
      }
      return values
    });
    res.send(filteredCategory);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving category.",
    });
  }
};


exports.findOne = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Category.findById(id);
    
    if (!data) {
      res.status(404).send({ message: "Not found category with id " + id });
    } else {
      res.send(data);
    }
  } catch (err) {
    res.status(500).send({ message: "Error retrieving category with id=" + id });
  }
};


exports.update = async (req, res) => {
  try {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!",
      });
    }

    const id = req.params.id;
    const data = await Category.findByIdAndUpdate(id, req.body, { useFindAndModify: false });

    if (!data) {
      res.status(404).send({
        message: `Cannot update category with id=${id}. Maybe category was not found!`,
      });
    } else {
      res.send({ message: "Category was updated successfully." });
    }
  } catch (err) {
    res.status(500).send({
      message: "Error updating category with id=" + id,
    });
  }
};


exports.delete = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Category.findByIdAndRemove(id);

    if (!data) {
      res.status(404).send({
        message: `Cannot delete category with id=${id}. Maybe category was not found!`,
      });
    } else {
      res.send({
        message: "Category was deleted successfully!",
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Could not delete category with id=" + id,
    });
  }
};


exports.deleteAll = async (req, res) => {
  try {
    const data = await Category.deleteMany({});
    res.send({
      message: `${data.deletedCount} Category were deleted successfully!`,
    });
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while removing all category.",
    });
  }
};


