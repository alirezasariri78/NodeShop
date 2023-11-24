const mongoose=require('mongoose');
require('dotenv').config();
const connect=()=>{

    try 
    {
        mongoose.connect(process.env.CONNECTION_STRING);
    }
    catch(err)
    {
        console.log(err);
    }
}

module.exports={
    connect
};