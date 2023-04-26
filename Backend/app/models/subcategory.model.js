module.exports = (mongoose) => {
    const SubCategory = mongoose.model(
      "SubCategory",
      mongoose.Schema(
        {
          category: {
            type: String,
            required: true
          },
          subcategory: {
            type: String,
            required: true
          }
        },
        { timestamps: true }
      )
    );
  
    return SubCategory;
  };