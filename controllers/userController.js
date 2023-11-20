const userRepo=require('./../Repositories/userRepository')

const getAllUsers=async (req,res)=>{
    res.json(await userRepo.getAllUsers);
}


module.exports={
    getAllUsers
}