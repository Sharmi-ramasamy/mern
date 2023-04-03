/* eslint-disable no-undef */
module.exports = (mongoose) => {
    const User = mongoose.model(
      "user",
      mongoose.Schema(
        {
        //   productid: Number,
          name: String,
          email: String,
          password: String,
        },
        { timestamps: true }
      )
    );
  
    return User;
  };
  