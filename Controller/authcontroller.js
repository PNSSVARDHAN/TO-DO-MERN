import User from "../Models/UserDeatails.js"

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

        if(users.Password == password){
            res.send({message : `welocome ${name}`});
        }

        else{
            res.send({message : "Invalid Password"});
        }

    }catch(error){
        res.send({message : error.message});
    }

}


export const User_data = async (req,res) =>{
    try{
        const data = await User.find();
        res.send(data);
    }catch(err){
        res.send({message : err.message});
    }
}

export const User_task = async (req,res) =>{
        try{
            const id = req.params.id;
            const data = await User.findOne({user_id : id});
            res.send(data);
        }catch(err){
            res.send({message : err.message});
        }
}