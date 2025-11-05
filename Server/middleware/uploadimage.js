import multer from "multer"
import path from "path"

// Storage Configuration
const storage = new multer.diskStorage({
    destination : (req, file, cb)=>{
        cb(null, "uploads/")
    },
    filename: (req, file,cb) =>{
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

// File Filter
const fileFilter = (req,file,cb) =>{
    const allowed = /jpeg|jpg|png|gif/
    const extname = allowed.test(path.extname(file.originalname).toLowerCase())
    const mimetype = allowed.test(file.mimetype)

    if(extname && mimetype) cb(null, true)
    else cb(new Error("Only Images are allowed"))
}

const upload = multer({storage, fileFilter})

export default upload