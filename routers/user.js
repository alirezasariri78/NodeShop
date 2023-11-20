
const express=require('express');
const userController=require('./../controllers/userController');
const router=express.Router();
router.route("/users").get(userController.getAllUsers);
module.exports={
    router
};