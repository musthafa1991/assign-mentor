console.log("hoi");
console.log("dev");
import express from "express";
import { MongoClient } from "mongodb";


const app=express();
const PORT=4000;
const Mongo_url="mongodb://localhost:27017"

async function createConnection(){
    const client=new MongoClient(Mongo_url)
    await client.connect();
    console.log("mongo connected");
    return client;
}
 export const client= await createConnection();

app.listen(PORT,()=>console.log(`server started in port ${PORT}`));