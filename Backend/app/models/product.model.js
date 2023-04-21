module.exports = (mongoose) => {
    const Product = mongoose.model(
      "product",
      mongoose.Schema(
        {
          category: String,
          SubCategory: String,
          name: String,
          price: Number,
          desc: String,
          image: String
        },
        { timestamps: true }
      )
    );
  
    return Product;
  };