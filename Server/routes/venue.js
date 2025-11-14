import Venue from "../models/Venue.js";
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

router.delete("/:id", async (req,res)=>{
   try {
     const {id} = req.params

    const deleteVenue = await Venue.findByIdAndDelete(id)
    if (!deleteVenue) {
      return res.status(404).json({ message: "Venue Not Found" });
    }
    res.json({ message: "Venue Deleted Successfully" });
   } catch (error) {
    res.status(500).json({ message: "Delete Failed", error });
   }
    
})

export default  router