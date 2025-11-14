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

router.put("/:id", upload.single("cardImage"), async (req, res) => {
  try {
    const { title, description, endDate, sessions } = req.body;

    const updatedData = {
      title,
      description,
      endDate,
    };

    // If new image uploaded
    if (req.file) {
      updatedData.cardImage = req.file.filename;
    }

    // If sessions update
    if (sessions) {
      updatedData.sessions = JSON.parse(sessions);
    }

    const updateEvent = await Events.findByIdAndUpdate(
      req.params.id,
      updatedData,
      { new: true }
    );

    if (!updateEvent) {
      return res.status(404).json({ message: "Event Not Found" });
    }

    res.json({ message: "Event Updated Successfully", updateEvent });
  } catch (error) {
    res.status(500).json({ message: "Update Failed", error });
  }
});


router.delete("/:id", async (req, res) => {
  try {
    const {id} = req.params
   const deletedEvent = await Events.findByIdAndDelete(id);
    
    if (!deletedEvent) {
      return res.status(404).json({ message: "Event Not Found" });
    }
    res.json({ message: "Event Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ message: "Delete Failed", error });
  }
});


export default router
