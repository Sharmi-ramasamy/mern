module.exports = (mongoose) => {
    const Checkout = mongoose.model(
      "checkout",
      mongoose.Schema(
        {
          name: String,
          email: String,
          address: String,
          city: String,
          state: String,
          zip: String,
        },
        { timestamps: true }
      )
    );
  
    return Checkout;
  };
  