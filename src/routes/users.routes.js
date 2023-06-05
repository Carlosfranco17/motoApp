const express = require("express")



const usercontroller=require('./../controllers/users.controllers')


const router=express.Router();





router
.route('/')
.get(usercontroller.findPUsers)
.post(usercontroller.createUser)

router
.route('/:id')
.get(usercontroller.findUser)
.patch(usercontroller.updateUsers)
.delete(usercontroller.deleteUsers)