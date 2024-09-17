import React,{useEffect,useState } from 'react'
import Cards from './Cards';
import axios from "axios";

function Courses() {
  const [course,setCourse] = useState([]);
const API_BASE_URL = process.env.REACT_APP_API_URL || "https://skillbridge-api.vercel.app";
  
  useEffect(() => {
    
    console.log("API Base URL:", API_BASE_URL);
  const getCourse = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/course`);
      
      if (res.headers['content-type'].includes('application/json')) {
        setCourse(res.data);
      } else {
        console.error("Response is not JSON:", res);
      }
    } catch (error) {
      console.error("API Error:", error);
    }
  };
  
  getCourse();
}, [API_BASE_URL]);


  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500"> Here!</span>
          </h1>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
          {course.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>  
    </>
  );

}

export default Courses
