const mongoose =require('mongoose');
const jwt=require('jsonwebtoken');
const schema=mongoose.Schema({
id:String,
fname:String,
lname:String,
email:String,
password:String,
tokens:[
    {
        token:String
    }
]
});
schema.methods.generateToken=async function(){
    const token =await jwt.sign({_id:this._id.toString()},process.env.SECRET_KEY);
    this.tokens=this.tokens.concat({token});
    return token;
};
module.exports=mongoose.model('users',schema);