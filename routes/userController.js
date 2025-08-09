const express=require('express');
const { createUser, loginUser } = require('../controller/userController');
const router=express.Router();

router.get('/signin',(req,res)=>{
  res.render('SignIn')
})
router.get('/login',(req,res)=>{
  res.render('login')
})


router.post("/signin",createUser)
router.post("/login",loginUser)

module.exports=router;  