import mongoose from "mongoose";

const courseSchema = mongoose.Schema({
    name: String,
    title: String,
    Description:String,
    price: Number,
    category: String,
    image: String,
    
});
const Course = mongoose.model("Course", courseSchema);

export default Course;