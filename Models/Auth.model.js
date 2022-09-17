const mongoose = require('mongoose')

const authScehema  = mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const authModel = mongoose.model("authModel" , authScehema);
module.exports =  authModel;