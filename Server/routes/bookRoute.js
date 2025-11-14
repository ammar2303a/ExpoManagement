import Booking from "../models/Booking.js"
import Ticket from "../models/Ticket.js";
import express from 'express';

const router = express.Router();

router.post("/create", async (req, res) =>{
    const {userId,eventId,ticketId,venueId,speakersId,scheduleId,quantity} = req.body;
    const ticket = await Ticket.findById(ticketId)
    
    if (!ticket) {
       res.status(404).send("Ticket Not Found") 
    }

    const available = ticket.quantity - ticket.sold
    if (available < quantity) {
      // res.status(400).send(`Ticekts available in just : ${ticket.quantity}`) 
      res.status(400).send("Ticekts quantity not available") 
    }
    const totalPrice = Number(ticket.price) * Number(quantity);
    
    const savebook = new Booking({userId,eventId,ticketId,venueId,speakersId,scheduleId,quantity,totalPrice})

    await savebook.save();
    ticket.quantity -= quantity
    ticket.sold += Number(quantity)
    await ticket.save();
   
     res.status(201).json({message:"Booking Succesfull", savebook, updataedTicket: ticket})
})

router.get("/:id", async (req, res) => {
  try {
    const {userId} =req.params.id
    //  console.log("Frontend se userId:", userId);
    const getBooking = await Booking.find(userId)
      .populate("userId", "name email")
      .populate({
        path: "eventId",
        populate: [
          { path: "sessions.venue" },
          { path: "sessions.speakers" },
          { path: "sessions.schedule" }
        ]
      })
      .populate("ticketId", "name price")
      .exec();

    res.json({ getBooking });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching bookings" });
  }
});

// DELETE EVENT



export default router