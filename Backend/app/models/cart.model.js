module.exports = (mongoose) => {
    const Cart = mongoose.model(
      "cart",
      mongoose.Schema(
        {
          category: {
            type: String,
            required: true,
          },
          SubCategory: {
            type: String,
            required: true,
          },
          name: {
            type: String,
            required: true
          },
          price:{
            type: String,
            required: true,
          },
          desc: {
            type: String,
            required: true,
          },
          image: {
            type: String,
            required: true,
          },
          email: {
            type: String,
            required: true,
          },
          quantity: {
            type: Number,
            required: true,
          },
          value: {
            type: Number,
            required: true,
          }
        },
        { timestamps: true }
      )
    );
  
    return Cart;
  };
  