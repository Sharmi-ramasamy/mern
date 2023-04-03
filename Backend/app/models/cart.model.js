/* eslint-disable no-undef */
module.exports = (mongoose) => {
    const Cart = mongoose.model(
      "cart",
      mongoose.Schema(
        {
          category: String,
          SubCategory: String,
          name: String,
          price: String,
          desc: String,
          image: String,
          email: String,
          quantity: Number,
          value: Number,
        },
        { timestamps: true }
      )
    );
  
    return Cart;
  };
  