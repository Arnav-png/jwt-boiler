const jwt = require('jsonwebtoken')
require('dotenv').config()

const verify = async(req,res,next)=>{

    const token = req.headers.authorization

    if(token){
       jwt.verify(token , process.env.SECRET_KEY,(err,user)=>{
            if(err){
                return res.status(401).json({message :"Token not valid"})
            }

            req.user = user
            next();
       })
    }
    else{
        res.status(401).json({error:"Token missing"})
    }
}


module.exports = verify