module.exports = (mongoose) => {
    const SubCategory = mongoose.model(
      "SubCategory",
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