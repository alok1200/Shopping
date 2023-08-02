const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
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
    amount: { type: Number, require: true },
    address: { type:Object, require:true},
    status: {type:String, default:"pending"}
  },
  {
    timestamps: true,
  }
);

module.export = mongoose.model("order", OrderSchema);
