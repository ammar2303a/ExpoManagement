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

export default router;