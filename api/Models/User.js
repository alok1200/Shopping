const mongoose = require ("mongoose");


const userSchema = new mongoose.Schema({
  username: {
    type: String, 
    required: [true ,"username is required!!!"],
    unique: true},
  email: { 
    type: String, 
    required:[true, "Email id is required!!"], 
    unique:true},
  password: {type:String, required        :true},
  isAdmin: {
    type: Boolean, require:false, default: false
  },
}, { timestamps: true });
const User = mongoose.model('User', userSchema);
module.exports = User





