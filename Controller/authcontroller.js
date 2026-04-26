import User from "../Models/UserDeatails.js"
import jwt from "jsonwebtoken";

export const RegisterUser = async (req,res)=>{
    try{
        const user_data = req.body;
        await User.create(user_data);
        res.send({message : "User registered Successfully"});
    }catch(error){
        res.send({message : error.message});
    }
}

export const LoginUser = async (req,res) =>{
    try{
        const {name , password} = req.body;
         const users = await User.findOne({name});

        if(!users){
            res.send({message : "User Not Found"});
        }

        if(users.Password != password){
            res.send({message : "Invalid Password"});
        }

        const token = jwt.sign(
            {userId : users._id},
            "PNSSVARDHAN",
            {expiresIn:"1d"}
        );
        
        res.send({
            message :"Welcome" , token
        });

    }catch(error){
        res.send({message : error.message});
    }

}


export const User_data = async (req,res) =>{
    try{
        const id = req.user.userId;
        const data = await User.findById(id);
        const user_data = {
            "id" : data._id,
            "name" : data.name,
            "user_id" : data.user_id
        }
        res.send(user_data);
    }catch(err){
        res.send({message : err.message});
    }
}

