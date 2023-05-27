const express = require('express')
const User = require('../models/user_model')
const jwt = require("jsonwebtoken");
const router = express.Router();

router.post("/login", (req, res, next) => {
    let fetchedUser;
  
    User.user_model.findOne({username:req.body.username}).then(user=>{
        console.log("USER"+user);
        console.log("name"+req.body.password);
        console.log("password"+req.body.password);
      if(!user || (user.password !== req.body.password)){
        return res.status(401).json({
          message: "Autenticação falhou ..."
        })
      }

      const token = jwt.sign(
        { username: user.username, userId: user._id },
        "secret_this_should_be_longer",
        { expiresIn: "1h" }
      );
      res.status(200).json({
        token: token,
        expiresIn: 3600,
        userId: user._id
      });
      
    })
    .catch(e=>{
      console.log(e)
    
    })
  })


  module.exports = router;