let express = require("express")
const userrouter = express.Router()
const User = require('../model/UserModel')

userrouter.post("/" , async (req,res) => {
    let first_name = req.body.first_name.trim()
    let last_name = req.body.last_name.trim()
    let joining_date = req.body.joining_date.trim()
    let user = new User({
        first_name ,
        last_name ,
        joining_date
    })
    try{
        await User.deleteMany({})
        let saveduser = await user.save()
        res.status(200).send(saveduser)
    }
    catch(err){
        res.json({message : err})
    }
})

userrouter.get("/" , async (req,res) => {
    try{
        const users = await User.find();
        res.json(users)
    }
    catch(err){
        res.json({message : err})
    }
})
module.exports = userrouter