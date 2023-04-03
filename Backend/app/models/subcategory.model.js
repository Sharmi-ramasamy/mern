module.exports = (mongoose) => {
    const SubCategory = mongoose.model(
      "subCategory",
      mongoose.Schema(
        {
          category: String,
          subcategory: String,
        },
        { timestamps: true }
      )
    );
  
    return SubCategory;
  };