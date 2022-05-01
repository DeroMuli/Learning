let express = require("express")
const ticketrouter = express.Router()
const Ticket = require('../model/TicketModel')
ticketrouter.get("/", async (req,res) => {
    try{
        const tickets = await Ticket.find();
        res.json(tickets);
    } catch (err) {
        res.json({ message: err });
    }
})

ticketrouter.post("/", async (req,res) => {
    let email = req.body.email.trim()
    let department = req.body.department.trim()
    let issuetype = req.body.issuetype.trim()
    let message = req.body.message.trim()
    let date = req.body.date.trim()
    const ticket = new Ticket(
        {
            email,
            department,
            issuetype,
            message,
            date
        }
    )
    try {
	    const savedticket = await ticket.save();
	    res.status(200).send(savedticket);
	} catch (err) {
	    res.json({ message: err });
	}
})

ticketrouter.delete("/:id" , async(req,res) =>{
    try{
	    const removed = await Ticket.deleteOne({ _id: req.params.id });
	    res.status(200).send(removed);
	} catch (err) {
	    res.send(err)
	}
} )

ticketrouter.get("/:id" , async(req,res) => {
    try {
        const ticket = await Ticket.findById(req.params.id);
        res.send(ticket);
        } 
        catch (err) {
        res.json({message: err});
    }
})
module.exports = ticketrouter