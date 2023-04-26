module.exports = (mongoose) => {
  const Category = mongoose.model(
    "category",
    mongoose.Schema(
      {
        // name: String,
        // image: String,
        name : {
          type: String,
          required: true
        },
        image : {
          type: String,
          required: true
        }
      },
      { timestamps: true }
    )
  );

  return Category;
};
