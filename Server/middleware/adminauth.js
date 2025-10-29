import jwt from "jsonwebtoken"

export const verifytoken = (req,res, next)=>{
    // const token = localStorage.getItem('token')
      const authHeader = req.headers.authorization;

  // Token usually hota hai "Bearer <token>"
  const token = authHeader && authHeader.split(" ")[1];

    if(!token){
    return res.status(401).json({'error': 'Access Denied. No token provided.'})
}
try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = decoded
    next()
    
    
} catch (error) {
    return res.status(400).json({'error': 'Invalid Token'})
}
}

export const verifyadmin = (req,res, next) =>{
    verifytoken(req, res, ()=>{
        if(!req.user.isAdmin){
            return res.status(403).json({'error': 'Admin Only'})
            next()
        }
    })
}

