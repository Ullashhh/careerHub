import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Statistics from "./components/Statistics/Statistics";
import Jobs from "./components/Jobs/Jobs";
import Blogs from "./components/Blogs/Blogs";
import Header from "./components/Header/Header.jsx";
import Home from './components/Home/Home';
import Details from "./components/Details/Details.jsx";
import savedJobLoader from "./utilities/loader.js";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/details/:dataId",
        element: <Details></Details>,
        loader: ({ params }) =>
          fetch(`http://localhost:4000/allJobs/${params.dataId}`),
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/applied_jobs",
        element: <Jobs></Jobs>,
        loader: savedJobLoader
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
