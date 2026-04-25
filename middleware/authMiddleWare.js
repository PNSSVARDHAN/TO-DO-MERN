import jwt from "jsonwebtoken";

export const authMiddleWare = (req,res,next)=>{
    const token = req.headers.authorization;

    if(!token){
        res.send({message : "invalid request chcek the headers"});
    }

    const jwt_token = token.split(" ")[1];
    
    try{
        const decode = jwt.verify(jwt_token , "PNSSVARDHAN");
        req.user = decode;
        next();
    }catch(err){
        res.send({message : err.message})
    }
}