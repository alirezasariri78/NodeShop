const express=require('express');
const app=express();
const Port=process.env.PORT||3500;
const mongoose=require('mongoose');
const dbConnection=require('./config/dbConnection');
const {seedDatabase}=require('./config/Initializer')


dbConnection.connect();
app.use(express.json());
app.use("/",require('./routers/home').router)
app.use("/user",require('./routers/user').router);
app.get("/",(req,res)=>{
    res.json({message:"nothing"})
})

mongoose.connection.once('open',()=>{
    console.log('Successfully Connected To Db');
    seedDatabase();

    app.listen(Port,()=>{
        console.log(`Server Started On Port ${Port}`);
    });
});
