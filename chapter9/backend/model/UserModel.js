const mongoose = require('mongoose');
const userschema = new mongoose.Schema({
    first_name : {
        type : String ,
        required : true
    } ,
    last_name : {
        type : String ,
        required : true
    } ,
    joining_date : {
        type : String ,
        required : true
    }
})

module.exports = mongoose.model("User", userschema)