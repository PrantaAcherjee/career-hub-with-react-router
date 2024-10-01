import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/root/Root.jsx';
import Home from './components/home/Home.jsx';
import { AppliedJobs } from './components/appliedJobs/AppliedJobs.jsx';
import { ErrorPage } from './components/errorPage/ErrorPage.jsx';
import { JobDetails } from './components/jobDetails/JobDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/applied",
        element: <AppliedJobs></AppliedJobs>,
        loader:()=>fetch('./jobs.json')
      },
      {
        path: "/job/:id",
        element: <JobDetails></JobDetails>,
        loader:()=>fetch('./jobs.json')
      },
    ],
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
