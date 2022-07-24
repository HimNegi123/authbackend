require('dotenv').config()
const express=require('express');
const app=express();
app.use(express.json());
require('./basicMongoose');
const bcrypt=require('bcryptjs');
const model=require('./models');
app.get('',(req,res)=>{
    res.send("ok its woking");
})
app.post('/signin',async(req,res)=>{
const value=await Product(req.body.password);
req.body.password=value;
const data=new model(req.body);
token= await data.generateToken();
await data.save();
res.send(token);
});
Product=async(value)=>{
  const  hashcode=await bcrypt.hash(value,10);
  return hashcode;
}
app.listen(process.env.PORT||5000);