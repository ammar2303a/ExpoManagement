import mongoose from "mongoose";
import { verifyadmin } from "../middleware/adminauth.js";
import express from "express"
import Shedule from "../models/Shedule.js";
import upload from "../middleware/uploadimage.js";

const router = express.Router();

router.post("/create", verifyadmin, async (req,res) =>{
    const {dayTitle, date, sessions} = req.body;
    const SheduleSave = new Shedule({dayTitle,date,sessions})
    await SheduleSave.save();
    res.status(201).send("Shedule Inserted") 
})

router.get("/", async(req, res)=>{
    const getShedule = await Shedule.find()
    .populate("sessions.speaker", "name image")
    .populate("sessions.venue", "name");
    res.json({getShedule})
})

router.delete("/:id", async (req,res)=>{
   try {
     const {id} = req.params

    const deleteShedule = await Shedule.findByIdAndDelete(id)
    if (!deleteShedule) {
      return res.status(404).json({ message: "Shedule Not Found" });
    }
    res.json({ message: "Shedule Deleted Successfully" });
   } catch (error) {
    res.status(500).json({ message: "Delete Failed", error });
   }
    
})
export default router;