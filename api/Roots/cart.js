const Cart = require("../Models/Cart");

const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");
const { query } = require("express");

const router = require("express").Router();

//create Cart

router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newCart = new Cart(req.body);
  try {
    const saveCart = await newCart.save();
    res.status(200).json(saveCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE Cart
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Delete Cart

router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    await Cart.findByIdDelete(res.params.id);
    res.status(200).json("Cart has ben deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get Product

router.get("/find/:id", async (req, res) => {
  try {
    const product = await Product.findById(res.params.id);

    res.status(200).json(Product);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get Cart

router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const cart = await product.findOne({ userId: req.params.userId });
    res.status(200).json(Cart);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
