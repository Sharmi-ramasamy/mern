module.exports = (mongoose) => {
  const Checkout = mongoose.model(
    "checkout",
    mongoose.Schema(
      {
        name: {
          type: String,
          required: true,
          match: /^[a-zA-Z\s]{3,}$/
        },
        email: {
          type: String,
          required: true,
          match: /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/
        },
        address: {
          type: String,
          required: true,
          match: /^[a-zA-Z\s]{3,30}$/
        },
        city: {
          type: String,
          required: true,
          match: /^[a-zA-Z\s]{3,10}$/
        },
        state: {
          type: String,
          required: true,
          match: /^[a-zA-Z\s]{3,10}$/
        },
        zip: {
          type: Number,
          required: String,
          match: /^[0-9]{6}$/
        }
      },
      { timestamps: true }
    )
  )

  return Checkout
}
