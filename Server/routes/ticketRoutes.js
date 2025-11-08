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

export default router