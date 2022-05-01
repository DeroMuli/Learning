let express = require('express')
let ticketrouter = require("./routes/ticketsrouter")
let userrouter = require("./routes/userrouter")
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cor = require('cors')
const app = express()
app.use(cor())
let port = process.env.PORT || 8080;
app.use(bodyParser.json())
app.use(
    express.urlencoded({
        extended: false
    })
);
mongoose.connect('mongodb://localhost:27017/EIS')
app.use("/api/tickets",ticketrouter)
app.use("/api/users",userrouter)
app.listen(port);