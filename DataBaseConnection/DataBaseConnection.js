import mongoose from "mongoose";
import User from "../Models/UserDeatails.js";
import TaskModel from "../Models/TaskDetails.js"


function DataBaseConnection(url){
    mongoose.connect(url).then(()=>{
        console.log("Database Connected");
    }).catch(err => {"Connection issue",err})
} 

export default DataBaseConnection;