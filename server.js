const express=require('express')
const dotenv=require('dotenv')
const router=require('./routes/userController')
const dbConnect=require('./config/db')
const path=require('path')
const cookieParser=require('cookie-parser')
const restricToLoggedinUserOnly=require('./middleware/auth')
const homeRouter = require('./routes/homeRouter')

dotenv.config();
dbConnect();
const app=express();
app.use(cookieParser());


app.set("view engine",'ejs')
app.set('views',path.resolve('./views'))

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use("/",router)
app.use('/',restricToLoggedinUserOnly,homeRouter)

const port=process.env.PORT || 5008;

app.listen(port,()=>{
  console.log(`Server is running on http://localhost:${port}`)
})