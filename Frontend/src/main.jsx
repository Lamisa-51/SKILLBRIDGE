import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import AuthProvider from "./context/AuthProvider.jsx";


const router = createBrowserRouter([
  {
    path: "/*",
    element: (
      <AuthProvider>
        <div className="dark:bg-slate-900 dark:text-white">
          <App />
        </div>
      </AuthProvider>
    ),
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
