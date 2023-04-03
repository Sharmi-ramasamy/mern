module.exports = (mongoose) => {
    const Product = mongoose.model(
      "product",
      mongoose.Schema(
        {
          category: String,
          subcategory: String,
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