const mongoose = require('mongoose');
const ticketschema = new mongoose.Schema({
  email : {
      type : String ,
      required : true
  } ,
  department : {
      type : String ,
      required : true
  } ,
  issuetype : {
      type : String ,
      required : true
  } ,
  comment : {
      type : String ,
      required : true 
  } ,
  date : {
      type : String ,
      required : true
  }
})

module.exports = mongoose.model('Ticket',ticketschema)