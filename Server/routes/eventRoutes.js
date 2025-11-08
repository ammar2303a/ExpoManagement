import mongoose from "mongoose";
import { verifyadmin } from "../middleware/adminauth.js";
import express from "express"
import Events from "../models/Event.js";
import upload from "../middleware/uploadimage.js";

const router = express.Router();

router.post("/create", upload.single("cardImage"), async (req, res)=>{
    const {title, description,startDate, endDate,sessions}= req.body;
    const cardImage = req.file ? req.file.filename : null;
    const parsedSessions = sessions ? JSON.parse(sessions) : [];
    const saveEvent = new Events({title,description, startDate, endDate, cardImage, sessions: parsedSessions})
    await saveEvent.save();
    res.status(201).send("Event Inserted") 
} )

router.get("/", async (req, res) =>{
   const getEvent = await Events.find().populate("sessions.venue", "name")
   .populate("sessions.speakers", "name image")
   .populate("sessions.schedule", "dayTitle date");
   res.json({getEvent})
})



export default router
