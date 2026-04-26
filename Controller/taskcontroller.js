import TaskModel from "../Models/TaskDetails.js";
import User from "../Models/UserDeatails.js";


export const TaskCreate = async(req,res) =>{
        try{
            let Task_data = req.body;
            const data = {
                ...Task_data,
                "user_id": req.user.userId
            }
            await TaskModel.create(data);
            res.send({message : "Task created Successfully"});
        }catch(err){
            res.send({message : err.message});
        }
}

export const EditTask = async (req,res) =>{
        try{
            const result = await TaskModel.findOneAndUpdate(
                 {_id : req.params.id},
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
        })
        res.json(alltask)
    }
    catch(err){
        res.send({message: err.message});
    }
}

export const specific_task = async (req,res)=>{
        try{
            const task_id = req.params.id;
            const task_details = await  TaskModel.findById(task_id);
            const user_details = req.user.userId;
            if(task_details.user_id != user_details){
                res.send({message : "Invalid Task Id"});
            }
            else{
                res.send(task_details);
            }
        }
        catch(err){
            res.send({message : err.message});

        }
    }