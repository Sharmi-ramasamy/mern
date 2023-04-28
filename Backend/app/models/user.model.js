module.exports = (mongoose) => {
    const User = mongoose.model(
      "user",
      mongoose.Schema(
        {
          name:{
            type: String,
            required: true,
            minLength:3,
            match: /^[a-zA-Z\s]{3,}$/
          },
          email: {
            type:String,
            required: true,
            unique: [true,{message:"Email already exists..!!"}],
            match: /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/
          },
          password: {
            type: String,
            required: true,
            minLength: 9,
            maxLength: 20,
            match: /^(?=.*[0-9])(?=.*[!@#$%*])(?=.*[A-Z])([a-zA-Z0-9!@#$%*]{9,20})$/,
          }
        },
        { timestamps: true }
      )
    );
  
    return User;
  };
  