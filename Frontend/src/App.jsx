import React from "react";
import Home from "./Home/Home";
import { Route, Routes } from "react-router-dom";
import Course from "./Course/Course";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";


function App() {

  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Course />}/>
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;



