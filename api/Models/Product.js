const mongoose = require ("mongoose");


const productSchema = new mongoose.Schema(
  {
    title: { type: String, require: true, unique: true},
    disc: { type: String, require:true,},
    img: {type:String, require:true},
    category: {type:Array,},
    size: {type:Array,},
    color: {type:Array,},
    price: {type:Number, require:true},
    inStock: {type:Boolean, require:true}
  },
  {
    timestamps: true
  }
);
const Product = mongoose.model('Products', productSchema);
module.exports = Product

