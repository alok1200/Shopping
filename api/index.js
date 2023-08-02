const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./Roots/user");
const authRoute = require("./Roots/auth");
const productRoute = require("./Roots/product");
const cartRoute = require("./Roots/cart");
const OrderRoute = require("./Roots/order");
dotenv.config();
const cors = require("cors")

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("data base connected successfully"))
  .catch((error) => console.log("error"));

  app.use(cors())
app.use(express.json());
app.use("/api/auth", authRoute);  
app.use("/api/users", userRoute);
app.use("/api/products",productRoute);
app.use("/api/carts",cartRoute);
app.use("/api/orders", OrderRoute);

app.listen(process.env.PORT || 4000, () =>  {     
  console.log("backend server running!");
});
