import Course from "../model/course.model.js";

export const getCourse = async(req, res) => {
    try {
        const course = await Course.find({});
        res.status(200).json(courses);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json(error);
    }
};
