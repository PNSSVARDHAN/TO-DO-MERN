import express from "express";
import DataBaseConnection from "./DataBaseConnection/DataBaseConnection.js";


const app = express();
app.use(express.json());

DataBaseConnection("mongodb://127.0.0.1:27017/TO-DO");

app.listen(5000,()=>{
    console.log("Server is running on Port 5000");
})

