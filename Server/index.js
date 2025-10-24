import express from 'express'
import mongoose from 'mongoose';
import dotenv, {config} from "dotenv"
import authRoutes from "./routes/auth.js"
import prodRoutes from "./routes/prodRoutes.js"
import cors from 'cors'

const app = express();
dotenv.config()
app.use(express.json())
app.use(cors())

app.get('/test', (req, res) => {
    res.json({'msg': 'testing api'})
})
mongoose.connect(process.env.MONGO_URI).then(
    ()=>{console.log("Connect to DB");
    }
).catch(err =>{console.log(err);
})

app.use("/api/auth", authRoutes)
app.use('/api/product', prodRoutes)

app.listen(5000, ()=>{
console.log('Applictation running on port 5000')
})





