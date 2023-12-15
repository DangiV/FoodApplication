import { Router } from "express";
import express from 'express'
import { UserRegister, userLogin } from "../Controlle/adminController.js";
import { CreateFoodItem, GetAllFoodItem } from "../Controlle/foodController.js";

const route = express(Router)

route.get('/', (req, res)=>{
    res.send("hello world")
})

route.post('/register', UserRegister)
route.post('/login', userLogin)

route.post('/CreateFoodItem', CreateFoodItem)
route.get('/GetAllFoodItem' , GetAllFoodItem)


export default route;