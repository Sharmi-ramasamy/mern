module.exports = (mongoose) => {
    const Checkout = mongoose.model(
      "checkout",
      mongoose.Schema(
        {
          name: {
            type: String,
            required: true
          },
          email: {
            type: String,
            required: true
          },
          address: {
            type: String,
            required:true
          },
          city: {
            type: String,
            required: true
          },
          state: {
            type: String,
            required: true
          },
          zip: {
            type: Number,
            required: String
          }
        },
        { timestamps: true }
      )
    );
  
    return Checkout;
  };
  