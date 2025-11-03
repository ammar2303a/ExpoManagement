
import Venue from "../models/Venue.js";
import mongoose from "mongoose";
import { verifyadmin } from "../middleware/adminauth.js";
import express from "express"

const router = express.Router();

router.post("/create",verifyadmin, async (req, res) =>{
    console.log("Request body:", req.body);
    const {name, address, city, mapLink, capacity, travelOptions, galleryImages} = req.body;
const ven = new Venue({ name, address, city, mapLink, capacity, travelOptions, galleryImages });


await ven.save();
    res.status(201).send("Venue Inserted")
})

router.get("/", async (req, res) =>{
    const getvenue = await Venue.find();
    res.json(getvenue)
})

export default  router