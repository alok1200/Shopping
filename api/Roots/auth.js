const { response } = require("express");
const User = require("../Models/User.js");
const router = require("express").Router();
const cryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken"); 

const hashPass = (data) => {
  return CryptoJS.AES.encrypt(
    data,
    process.env.PASS_SEC
  ).toString()
}


// register
router.post("/register", async (req, res) => {
  if (req.body.password.length < 5 || req.body.password.length > 16 ) {
      return res.status(400).json({sucess: false,message: "password length should be in range of 5 to 16 charecter"})
  };
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: cryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC.toString()),
  });
  try {
    const saveduser = await newUser.save();
    const {password, ...others} = saveduser._doc; 

    const accessToken = jwt.sign({
      id: saveduser._id, 
      isAdmin: saveduser.isAdmin,

    }, process.env.JWT_SEC, {expiresIn: process.env.JWT_SECRET_EXPIRE || "3d"});


    res.status(201).json({...others, accessToken}); 
    
  } catch (err) {
      console.log(err)
      if(err.code === 11000) { 
        return res.status(400).json({sucess: false,message: "account with this email already exist"}) 
      } else if (err.name === "ValidationError") {
          if (err.name == 'ValidationError') {
            for (field in err.errors) {
              return res.status(400).json({sucess: false,message: err.errors[field].message}); 
            }
          }
      } else {
      console.log(`Logged Error from register user : ${err}`)
      return res.status(500).json({sucess: false,message: "internal server error"})
      }

      
  }
  
});

//login
router.post("/login", async (req, res) => {

  console.log(req.body)
  if(!req.body.email || !req.body.password) {
    return res.status(400).json({sucess: false,message: "please provide email and password"})
  }

  try {
    const user = await User.findOne({email: req.body.email});
      if (!user) {
        return res.status(401).json({sucess: false,message: "user with this emil dosent exist"})
      } 
      
      //checking if this login req is for admin
      if(req.body.forAdmin) {
        if (!user.isAdmin) {
          return res.status(401).json({sucess: false,message: "wrong credentials"}) 
        }
      }

      //matching pass
      const hashedpass = await cryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);
      const pass = await hashedpass.toString(cryptoJS.enc.Utf8);
      console.log(`db pass = ${pass}`)
      console.log(`user pass = ${req.body.password}`)
      if(pass !== req.body.password) {
        return res.status(401).json({sucess: false,message: "wrong credentials"}) 
      }
      
      const accessToken = jwt.sign({
        id:user._id, 
        isAdmin: user.isAdmin,

      }, process.env.JWT_SEC, {expiresIn: process.env.JWT_SECRET_EXPIRE || "3d"}); 
      
      const {password,resetPasswordToken,resetPasswordExpire, ...others} = user._doc
      res.status(200).json({...others, accessToken})
    
  } catch (err) {
    console.log(`Logged Error from login user : ${err}`)
    return res.status(500).json({ // Worked
      sucess: false,message: "Internal server error",
    });
    
  }
})

module.exports = router;
