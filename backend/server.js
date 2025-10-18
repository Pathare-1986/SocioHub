import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/db.js';
import { inngest, functions } from "./inngest/index.js"

const app = express();
const PORT = process.env.PORT || 8080;

await connectDB();

app.use(cors());
app.use(express.json());
app.use("/api/inngest", serve({ client: inngest, functions }));

app.get("/",(req,res)=>{
    res.send("server is running")
})

app.listen(PORT,()=>{
    console.log(`Server is running on Port: ${PORT} `)
})