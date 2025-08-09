const mongoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config();

const dbConnect=async(req,res)=>{
  try{

    await mongoose.connect(process.env.MONGO_URL)
    console.log("mongo Connected")
  }catch(err){
    console.log(err)
  }

}

module.exports=dbConnect;