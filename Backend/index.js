import express from "express";
import dotenv from  "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import courseRoute from "./route/course.route.js"
import userRoute from "./route/user.route.js"
const app = express();
app.use(cors());
app.use(express.json())

dotenv.config();
const PORT = process.env.PORT||4000;

const URI = process.env.MongoDBURI;

try {
    mongoose.connect(URI, {});
    console.log("Connected to mongoDB");
} catch (error) {
    console.log("Error: ", error);
}




app.use("/course",courseRoute)
app.use("/user",userRoute)
app.get("/", (req, res) => res.send("API Working!"))

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`)
})