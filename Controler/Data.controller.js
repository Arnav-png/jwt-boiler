const authModel = require('../Models/Auth.model.js')

exports.UserData = async(req,res)=>{

    try {
        const users = await authModel.find({})

        res.status(200).json(users)

    } catch (error) {
        res.json(error)
        console.log(error)
    }
}
