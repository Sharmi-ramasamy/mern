module.exports = (mongoose) => {
    const User = mongoose.model(
      "user",
      mongoose.Schema(
        {
          name:{
            type: String,
            required: true
          },
          email: {
            type:String,
            required: true,
            unique: [true,{message:"Email already exists..!!"}]
          },
          password: {
            type: String,
            required: true,
            minLength: 8,
            maxLength: 20,
            match: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
          
            validate: {
              validator: function(v) {
                // custom validator to check password strength
                return v !== this.username; // password should not be same as username
              },
              message: props => `${props.value} should not be the same as the username`
            }}
        },
        { timestamps: true }
      )
    );
  
    return User;
  };
  