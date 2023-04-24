module.exports = (mongoose) => {
    const User = mongoose.model(
      "user",
      mongoose.Schema(
        {
          name: String,
          email: {
            type:String,
            required: true,
            unique: [true,{message:"Email already exists..!!"}]
          },
          // email: String,
          password: String,
        },
        { timestamps: true }
      )
    );
  
    return User;
  };
  