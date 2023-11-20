const {MongoClient}=require("mongodb")

class UserRepository
{
    constructor(){
        Connect();
        const dB=MongoClient.db("ShopDB");
        this.UserTable=db.collection("Users");
    }


    async Connect()
    {
        const uri=process.env.CONNECTION_STRING;
       await MongoClient.connect(uri)
    }


    async getAllUsers()
    {
       return await this.UserTable.find({}) ;
    }

}

module.exports=UserRepository;