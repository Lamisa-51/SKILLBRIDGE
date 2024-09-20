import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Course from "./Course/Course";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";


function App() {
  const [authUser,setAuthUser] = useAuth();
  console.log(authUser);
  const router = createBrowserRouter([
    {
      path: "/*",
      element: <Home />
    },
    {
      path: "/course",
      element: authUser? <Course />:< Navigate to ="/Signup"/>
    },
    {
      path: "/signup",
      element:<Signup />
    },
  ]);
  
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
     
      <RouterProvider router={router} />
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={authUser? <Course />:< Navigate to ="/Signup"/>}/>
          <Route path="/signup" element={<Signup />} />
        </Routes> */}
         
        <Toaster />
      </div>
    </>
  );
}

export default App;
