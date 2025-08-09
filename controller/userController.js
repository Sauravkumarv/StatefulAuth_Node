const USER = require("../model/user");
const { v4: uuidv4 } = require('uuid');


const createUser=async(req,res)=>{
const {username,email,password}=req.body;

const users=await USER.create({
  username,
  email,
  password,
})
console.log(users)
return res.redirect('/login')

}

const loginUser=async(req,res)=>{
  const{email,password}=req.body;
const user= await USER.findOne({
  email,password
})
if(!user){
  res.redirect('/login')
  console.log("User Not Found")
}
const sessionId=uuidv4();
setUser=(sessionId, user)

res.cookie("uid",sessionId)
res.redirect('/')
console.log("Login Successful")

}

module.exports={createUser,loginUser}