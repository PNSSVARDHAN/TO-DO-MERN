import TaskModel from "../Models/TaskDetails.js";
import User from "../Models/UserDeatails.js";


export const TaskCreate = async(req,res) =>{
        try{
            const Task_data = req.body
            await TaskModel.create(Task_data);
            res.send({message : "Task created Successfully"});
        }catch(err){
            res.send({message : err.message});
        }
}

export const EditTask = async (req,res) =>{
        try{
            const result = await TaskModel.findOneAndUpdate(
                {id : req.params.id},
                req.body,
                {new : true , runValidators:true}
            )
            res.send({message : 'Updated Successfully'});

        }catch(err){
            res.send({message : err.message});
        }
}

export const AllTasks = async (req,res)=>{
    try{
        console.log(req.user);
        const alltask = await TaskModel.find({
            user_id : req.user.userId
        }).populate("user_id");
        res.json(alltask)
    }
    catch(err){
        res.send({message: err.message});
    }
}