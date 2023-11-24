const userModel=require('../models/user')
const roleModel=require('./../models/auth/role')



const getAllUsers=async (req,res)=>{
    res.json(await userModel.find({}));
}


const createUser=async (req,res)=>{
    if(!req.body.userName || !req.body.password)
    {
        res.status(405);
        return  res.send('bad Request');
    }
    let user=await userModel.findOne({userName:req.body.userName}).exec();
    if(user) {
        res.status(403);
        return  res.send('duplicate');
    }

    const userRole=await roleModel.findOne({name:"user"}).exec();
    user=new userModel();
  
    if(req.body.firstName) 
        user.firstName=req.body.firstName;
    if(req.body.lastName)  
        user.lastName=req.body.lastName;

        user.userName=req.body.userName;
        user.password=req.body.password;
        user.rolse=userRole;
        user.save()
    res.json(user)
}





module.exports={
    getAllUsers,
    createUser
}