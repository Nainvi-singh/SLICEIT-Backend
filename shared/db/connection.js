import mongoose from "mongoose";
export const createConnection=async ()=>{
    try{
        const conInfo=await mongoose.connect(process.env.DB_URL);
        return conInfo;
        // console.log('DataBase Connection Created.... ');
        // console.log('DataBase Connection Created.... ',result);
    }catch(err){
        console.log('DataBase Connection Fails.... ',err);
        throw err;
    }
   
}