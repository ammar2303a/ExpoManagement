import mongoose from "mongoose";
import express from "express";
import User from "../models/User.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

const router = express.Router();

router.post('/register', async (req,res) =>{
    const {name, email, password, isadmin} = req.body;
    const hashed = await bcrypt.hash(password, 10);
    const newuser = User({name, email, password: hashed, isadmin});

    await newuser.save()
    res.status(201).send("user registered")

})

router.get('/', async(req,res) =>{
    const getUsers = await User.find()
    res.json(getUsers)
})

router.post('/login', async (req,res)=>{
    const {email, password} =req.body;

    const user = await User.findOne({email})
    if (!user) {
        res.status(404).send("User not found")
    }
    
    const passmatch = await bcrypt.compare(password, user.password)

    if(!passmatch){
        res.status(400).send('Invalid Credentias')
    }
    const token = jwt.sign({userId: user._id, isadmin: user.isAdmin}, process.env.JWT_SECRET, {expiresIn: "1h"});

    // res.status(200).json({'msg': 'User logged In', token})
    res.json({token, user:{
        id: user._id,
        name:user.name,
        email: user.email,
        password: user.password,
        isAdmin: user.isAdmin
    }})
    

})
export default router