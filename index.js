import express from "express";
import DataBaseConnection from "./DataBaseConnection/DataBaseConnection.js";
import UserRoutes from "./Routes/UserRoutes.js"
import TaskRoutes from "./Routes/TaskRoutes.js"


const app = express();
app.use(express.json());

DataBaseConnection("mongodb://127.0.0.1:27017/TO-DO");

app.use("/",UserRoutes);
app.use("/api",UserRoutes)
app.use("/api",TaskRoutes);

app.listen(5000,()=>{
    console.log("Server is running on Port 5000");
})

