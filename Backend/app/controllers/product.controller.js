const db = require("../models")
const Product = db.product

exports.addProduct = (req, res) => {
  const product = new Product({
    category: req.body.category,
    SubCategory: req.body.SubCategory,
    name: req.body.name,
    price: req.body.price,
    desc: req.body.desc,
    image: req.body.image
  })

  product
    .save(product)
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(404).send({
        message: err.message || "Some error occurred while creating the product."
      })
    })
}

exports.findAllProduct = (req, res) => {
  Product.find(req.query)
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(404).send({
        message: err.message || "Some error occurred while retrieving product."
      })
    })
}

exports.findProductById = (req, res) => {
  const id = req.params.id

  Product.findById(id)
    .then((data) => {
      if (!data) res.status(404).send({ message: "Not found product with id " + id })
      else res.send(data)
    })
    .catch(() => {
      res.status(404).send({ message: "Error retrieving product with id=" + id })
    })
}

exports.updateProductById = (req, res) => {
  if (!req.body) {
    return res.status(404).send({
      message: "Data to update cannot be empty!"
    })
  }

  const id = req.params.id

  Product.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update product with id=${id}. Maybe product was not found!`
        })
      } else res.send({ message: "Product was updated successfully." })
    })
    .catch(() => {
      res.status(404).send({
        message: "Error updating product with id=" + id
      })
    })
}

exports.deleteProductById = (req, res) => {
  const id = req.params.id

  Product.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete product with id=${id}. Maybe product was not found!`
        })
      } else {
        res.send({
          message: "Product was deleted successfully!"
        })
      }
    })
    .catch(() => {
      res.status(404).send({
        message: "Could not delete product with id=" + id
      })
    })
}

exports.deleteAllProducts = (req, res) => {
  Product.deleteMany({})
    .then((data) => {
      res.send({
        message: `${data.deletedCount} Products were deleted successfully!`
      })
    })
    .catch((err) => {
      res.status(404).send({
        message: err.message || "Some error occurred while removing all products."
      })
    })
}
