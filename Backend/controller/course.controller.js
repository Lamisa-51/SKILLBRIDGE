import Course from "../model/course.model.js";

export const getCourse = async(req, res) => {
    try {
        const course = await Course.find({});
        res.status(200).json(courses);
    } catch (error) {
       console.error("Error fetching courses:", error);
    res.status(400).json({ message: "Server Error", error });
    }
};


