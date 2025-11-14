import mongoose from "mongoose";
import { verifyadmin } from "../middleware/adminauth.js";
import express from "express"
import Speaker from "../models/Speaker.js";
import upload from "../middleware/uploadimage.js";

const router = express.Router();

router.post("/create", verifyadmin, upload.single("image"), async (req,res)=>{
    const {name, bio, designation, venueId} = req.body;
    const image = req.file ? req.file.filename : null
    const speak = new Speaker({name, bio, image, designation, venueId});
    await speak.save();
     res.status(201).send("Speaker Inserted") 
})

router.get('/', async (req, res) =>{
    const getSpeaker = await Speaker.find().populate("venueId", "name")
    res.json(getSpeaker)
})

router.delete("/:id", async (req,res)=>{
   try {
     const {id} = req.params

    const deleteSpeaker = await Speaker.findByIdAndDelete(id)
    if (!deleteSpeaker) {
      return res.status(404).json({ message: "Speaker Not Found" });
    }
    res.json({ message: "Speaker Deleted Successfully" });
   } catch (error) {
    res.status(500).json({ message: "Delete Failed", error });
   }
    
})

export default router;