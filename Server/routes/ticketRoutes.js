import { verifyadmin } from "../middleware/adminauth.js";
import expres from "express"
import Ticket from "../models/Ticket.js";
import upload from "../middleware/uploadimage.js";

const router = expres.Router();

router.post("/create", verifyadmin, async (req, res) =>{
    const {name,price,quantity,sold} = req.body;
    const  ticketSave = new Ticket({name, price,quantity, sold})
    await ticketSave.save();
    res.status(201).send("Ticket Inserted") 
})

router.get("/", async (req, res)=>{
    const getTicket = await Ticket.find();
    res.json({getTicket})
})

router.delete("/:id", async (req,res)=>{
   try {
     const {id} = req.params

    const deleteticket = await Ticket.findByIdAndDelete(id)
    if (!deleteticket) {
      return res.status(404).json({ message: "Ticket Not Found" });
    }
    res.json({ message: "Ticket Deleted Successfully" });
   } catch (error) {
    res.status(500).json({ message: "Delete Failed", error });
   }
    
})


export default router