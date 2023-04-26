module.exports = (mongoose) => {
    const Product = mongoose.model(
      "product",
      mongoose.Schema(
        {
          category: {
            type: String,
            required: true
          },
          SubCategory: {
            type: String,
            required: true
          },
          name: {
            type: String,
            required: true
          },
          price: {
            type: String,
            required: true
          },
          desc: {
            type: String,
            required: true
          },
          image: {
            type: String,
            required: true
          }
        },
        { timestamps: true }
      )
    );
  
    return Product;
  };