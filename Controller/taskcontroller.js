import TaskModel from "../Models/TaskDetails.js";

export const TaskCreate = async(req,res) =>{
        try{
            const Task_data = req.body
            await TaskModel.create(Task_data);
            res.send({message : "Task created Successfully"});
        }catch(err){
            res.send({message : err.message});
        }
}