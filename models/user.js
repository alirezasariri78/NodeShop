const { default: mongoose } = require('mongoose');

const schema=require('mongoose').Schema;
const userSchema= new schema({
    firstName:{
        type:String,
        required:false
    },
    lastName:{
        type:String,
        required:false
    },
    userName:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    createDate:{
        type:Date,
        default:Date.now()
    },
    rolse:[{
        type:schema.Types.ObjectId,
        required:true,
        ref:'Role',
    }]
});


module.exports=mongoose.model('User',userSchema);
