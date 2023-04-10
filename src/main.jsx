import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Main from './components/Main/Main';

import Blog from './components/Blog/Blog';
import JobApplication from './components/JobApplication/JobApplication';
import Banner from './components/Banner/Banner';
import JobDetail from './components/JobDetail/JobDetail';
import JobDetailsLoader from './components/JobDetailsLoader/JobDetailsLoader';
import ErrorHandle from './components/ErrorHandle/ErrorHandle';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element:<Home></Home>
     },
      {
        path: 'job/:jobId',
        element: <JobDetail></JobDetail>,
      
     },
      {
        path: 'statistics',
        element: <Statistics></Statistics>
      },
      {
        path: 'applied',
        element:<JobApplication></JobApplication>
     },
      {
        path: 'blog',
        element:<Blog></Blog>
      },
      {
        path: '*',
        element:<ErrorHandle></ErrorHandle>
      }
    
  
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)
