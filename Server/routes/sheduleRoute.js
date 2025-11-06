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
    .populate("sessions.speaker", "name")
    .populate("sessions.venue", "name");
    res.json({getShedule})
})

export default router;