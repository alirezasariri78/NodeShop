const {Schema, model}=require('mongoose');
const roleSchema=new Schema({
    name:{
        type:String,
        required:true
    },

    permissions:[{type:Schema.Types.ObjectId,ref:"Permission"}]
});

module.exports=model('Role',roleSchema);