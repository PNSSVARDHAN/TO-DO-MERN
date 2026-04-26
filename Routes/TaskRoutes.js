import express from "express";
import { TaskCreate , AllTasks , EditTask, specific_task } from "../Controller/taskcontroller.js";
import {authMiddleWare} from "../middleware/authMiddleWare.js";


const router = express.Router();

router.post("/tasks",authMiddleWare,TaskCreate);
router.get("/tasks",authMiddleWare,AllTasks);
router.patch("/tasks/:id",authMiddleWare,EditTask);
router.get("/tasks/:id",authMiddleWare,specific_task);

export default router;