module.exports = (mongoose) => {
  const Product = mongoose.model(
    "product",
    mongoose.Schema(
      {
        category: {
          type: String,
          required: true,
          match: /^[a-zA-Z\s]{3,20}$/
        },
        SubCategory: {
          type: String,
          required: true,
          match: /^[a-zA-Z]\s{3,20}$/
        },
        name: {
          type: String,
          required: true,
          match: /^[a-zA-Z\s]{3,20}$/
        },
        price: {
          type: String,
          required: true,
          match: /^[0-9]{1,}$/
        },
        desc: {
          type: String,
          required: true,
          match: /^[a-zA-Z0-9\s!@#$%*|(),.:]*$/
        },
        image: {
          type: String,
          required: true
        }
      },
      { timestamps: true }
    )
  )

  return Product
}
