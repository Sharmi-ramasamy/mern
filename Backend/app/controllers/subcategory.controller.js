const db = require("../models");
const SubCategory = db.subcategory;

exports.create = (req, res) => {

  const subcategory = new SubCategory({
    category: req.body.category,
    subcategory: req.body.subcategory,
  });

  subcategory
    .save(subcategory)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the subcategory.",
      });
    });
};

exports.findAll = (req, res) => {
  console.log(req.headers.authorization)
    SubCategory.find()
    .then((data) => {
      const filters = req.query;
      const filteredSubcategory = data.filter(product => {
        let values = true ;
        for(key in filters) {
          values = values && product[key] == filters[key]
        }
        return values
      })
      res.send(filteredSubcategory);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving subcategory.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  SubCategory.findById(id)
    .then((data) => {
      if (!data) res.status(404).send({ message: "Not found subcategory with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving subcategory with id=" + id });
    });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }

  const id = req.params.id;

  SubCategory.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update subcategory with id=${id}. Maybe subcategory was not found!`,
        });
      } else res.send({ message: "SubCategory was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating subcategory with id=" + id,
      });
    });
};

exports.updateAll = (req, res) => {
  SubCategory.updateMany({})
    .then((data) => {
      res.send({
        message: `${data.deletedCount} SubCategory were deleted successfully!`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while removing all category.",
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  SubCategory.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete subcategory with id=${id}. Maybe subcategory was not found!`,
        });
      } else {
        res.send({
          message: "SubCategory was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete subcategory with id=" + id,
      });
    });
};

exports.deleteAll = (req, res) => {
  SubCategory.deleteMany({})
    .then((data) => {
      res.send({
        message: `${data.deletedCount} SubCategory were deleted successfully!`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while removing all category.",
      });
    });
};
