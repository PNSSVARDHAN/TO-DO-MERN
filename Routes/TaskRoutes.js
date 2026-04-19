import express from "express";
import { TaskCreate } from "../Controller/taskcontroller.js";


const router = express.Router();

router.post("/add-task",TaskCreate);

export default router;