const authModel = require('../Models/Auth.model.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const dotenv = require("dotenv")
dotenv.config()


exports.authController = async(req,res)=>{
    const{email,name,password} = req.body
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password,salt);
    let user = new authModel({
        email,name,password:hashPassword
    })
    try {
        const oldUser = await authModel.findOne({email})
        if(oldUser){
            return res.status(401).send("user already exists!!")
        }
        await user.save();
        res.send("user registered")
    } catch (error) {
        res.status(500).send("something went wrong")
        console.log(error)
    }
}
exports.login = async(req,res)=>{
    const{email,password} = req.body
    
    try {
        const user = await authModel.findOne({email})
        if(user){
            const Pass = bcrypt.compare(password,user.password);
            if(Pass){
                const token = jwt.sign({user}, process.env.SECRET_KEY)
                res.status(200).json({token})
            }
            else{
                res.status(401).json("Wrong password")
            }
        }
        else{
            res.status(401).json("User does not exist Pls register")

        }
        
        
    } catch (error) {
        res.status(500).send("something went wrong")
        console.log(error)
    }
}



