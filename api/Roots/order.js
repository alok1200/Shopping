const Order = require("../Models/Order");

const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");
const { query, response } = require("express");

const router = require("express").Router();

//create order

router.post("/", verifyToken, async (req, res) => {
  const newCart = new Cart(req.body);

  try {
    const saveOrder = await newOrder.save();
    res.status(200).json(saveOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE order
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Delete order

router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Order.findByIdDelete(res.params.id);
    res.status(200).json("Order  has ben deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get user order

router.get("/", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const order = await Order.find({ userId: req.params.userId });
    res.status(200).json(order);
  } catch (err) {
    response.status(500).json(err);
  }
});

//get all

router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(Orders);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get monthly income

router.get("/income", verifyTokenAndAdmin, async (req, res) => {
  const date = new Date();
  const lestMonth = new Date(date.setMonth(date.getMonth() - 1));
  const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));
  try {
    const income = await Order.aggregate([
      { $maths: { creatAt: { $get: previousMonth } } },
      {
        $project: {
          month: { $month: "$creatAt" },
          sales: "$amount",
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $um: "$sales" },
        },
      },
    ]);
    res.status(200).json(income);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
