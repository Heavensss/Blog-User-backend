import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
import { errorResponserHandler } from "./middleware/errorHandler";
import { invalidPathHandler } from "./middleware/errorHandler";
//routes
import userRoutes from "./routes/userRoutes"

dotenv.config();
connectDB();  
const app = express();
app.use(express.json());
 
app.get("/",(req, res)=>{
    res.send("sever is runing...");
});

app.use('/api/users',userRoutes);
app.use(invalidPathHandler);
app.use(errorResponserHandler);


const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>console.log(`server is running on port ${PORT}`));