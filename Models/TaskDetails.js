import mongoose from "mongoose";
import User from "./UserDeatails.js";

const TasKDetails = mongoose.Schema({
    name :{
        type : String,
        required : true,
    },
    priority : {
        type: String,
        enum : ["Easy" , "Medium" , "High" , "Important"],
        default : "Easy"
    },
    user_id :{  
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    }
},
{
    timestamps : true
})

const TaskModel = mongoose.model("task" , TasKDetails);

export default TaskModel;