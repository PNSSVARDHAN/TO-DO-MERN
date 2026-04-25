import express from "express";
import { RegisterUser,LoginUser,User_data,User_task } from "../Controller/authcontroller.js";
import {authMiddleWare} from "../middleware/authMiddleWare.js"

const router = express.Router();

router.post("/register",RegisterUser);
router.post("/login",LoginUser);
router.get("/",authMiddleWare,User_data);
router.get("/user/:id",User_task);

export default router;
