import express from "express";
import { RegisterUser,LoginUser,User_data,User_task } from "../Controller/authcontroller.js";

const router = express.Router();

router.post("/register",RegisterUser);
router.post("/login",LoginUser);
router.get("/all-users",User_data);
router.get("/user/:id",User_task);

export default router;
