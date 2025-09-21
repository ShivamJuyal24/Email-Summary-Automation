import dotenv from 'dotenv'
import express from 'express'
import connectDb from './config/db.js'

dotenv.config();

const app= express();

app.use(express.json());

const PORT = process.env.PORT|| 5000;

connectDb().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Server running on PORT ${PORT}`);
        
    });
});