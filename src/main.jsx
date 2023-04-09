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


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
    
      {
        path: 'applied',
        element:<JobApplication></JobApplication>
    },
      {
        path: 'statistics',
        element: <Statistics></Statistics>
      },
   
      {
        path: 'blog',
        element:<Blog></Blog>
      }
    
  
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)
