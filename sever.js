import express from "express";
import dotenv from "dotenv";
import path from "path";
import connectDB from "./config/db";
import { errorResponserHandler } from "./middleware/errorHandler";
import { invalidPathHandler } from "./middleware/errorHandler";

//routes
import userRoutes from "./routes/userRoutes";
import postRoutes from "./routes/postRoutes";
import commentRoutes from "./routes/commentRoutes";

dotenv.config();
connectDB();  
const app = express();
app.use(express.json());
 
app.get("/",(req, res)=>{
    res.send("sever is runing...");
});

app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/comments', commentRoutes);

//static assets
app.use("/uploads",express.static(path.join(__dirname, "/uploads")));

app.use(invalidPathHandler);
app.use(errorResponserHandler);


const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>console.log(`server is running on port ${PORT}`));