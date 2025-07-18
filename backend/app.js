import { configDotenv } from 'dotenv';
import express from 'express';
let app = express();
import mongoose from 'mongoose';
import router from './allRouts/allRoute.js'
import cors from 'cors'

configDotenv()

app.use(cors({
  origin: "https://task-1-frontend-g1q1.onrender.com",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

export const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGOOSE_URL);
    console.log(" MongoDB connected");
  } catch (err) {
    console.error(" MongoDB connection error:", err.message);
  }
};
startServer();


app.use('/',router)

app.get('/',(req,res)=>{
    res.send('port working')
})

export default app; 
