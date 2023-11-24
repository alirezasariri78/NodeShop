const role=require('../models/auth/role')
const permission=require('../models/auth/permission')
const {permissionItems} =require('../config/permissionList')
async function seedDatabase()
{
    let permissions=await permission.find({});
    if(!permissions || ! await permission.exists({}))
      {
        for(p of permissionItems)
         {
            const res= await  permission.create({
                name:p
            });
            permissions.push(res);
         }
      }

    let ownerRole=await role.findOne({name:"owner"}).exec();
    if(!ownerRole)
    {
        ownerRole=new role()
        ownerRole.name='owner'
        ownerRole.permissions=permissions
      await  ownerRole.save();
    }
    let userRole=await role.findOne({name:"user"}).exec();
    if(!userRole)
    {
      userRole=new role()
      userRole.name='user'
      userRole.permissions=await permission.find({name:"General"});
      await userRole.save();
    }
}

module.exports={
    seedDatabase
}