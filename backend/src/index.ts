import express from 'express';
import cors from 'cors'
import mongoose from "mongoose";
require('dotenv').config()


mongoose.connect(process.env.DATABASE_URL as string).then(()=>{
    console.log("Connected to database!!");
});

const app = express();

app.use(express.json())
app.use(cors())

app.get("/api/recipes/search",async (req,res)=>{
    res.json({message:'success!'})
})


app.listen(5100, ()=>{
    console.log("server ruinning on localhost:5100");
})

