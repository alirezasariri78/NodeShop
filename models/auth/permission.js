const {Schema, model}=require('mongoose');
const permissionSchema=new Schema({
    name:{
        type:String,
        required:true
    },
});

module.exports=model('Permission',permissionSchema);