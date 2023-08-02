const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
  {
    UserId: { type: String, require: true },
    Product: [
      {
        productId: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ], 

  },
  {
    timestamps: true,
  }
);

module.export = mongoose.model("Cart", CartSchema);
