import express from "express";
import { TaskCreate , AllTasks } from "../Controller/taskcontroller.js";
import {authMiddleWare} from "../middleware/authMiddleWare.js";


const router = express.Router();

router.post("/add-task",TaskCreate);
router.get("/alltasks",authMiddleWare,AllTasks);

export default router;