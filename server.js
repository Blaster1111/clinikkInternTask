import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDb from './config/db.js';
import mediaRoutes from "./routes/media.route.js";

dotenv.config();
connectDb();

const app = express();
app.use(cors());
app.use(express.json());


app.use("/api", mediaRoutes);

app.get("/",(req,res)=>{
    res.send("Clinikk Intern Task Runnig");
})

const PORT = 3000;
app.listen(PORT, ()=> {
    console.log(`Server running on ${PORT}`);
})