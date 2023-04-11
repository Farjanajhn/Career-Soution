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

import JobDetail from './components/JobDetail/JobDetail';

import ErrorHandle from './components/ErrorHandle/ErrorHandle';
import HandleJobCart from './components/HandleJobCart/HandleJobCart';
/*  import cartProductsLoader from './lodears/loaders';  */


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element:<Home></Home>,
      },
     
      {
        path: 'jobDetail/:jobDetailId',
        element: <JobDetail></JobDetail>,
        loader:({params})=>fetch('/data.json')
       
          
        
      },
      {
        path: 'handleJobCart',
        element: <HandleJobCart></HandleJobCart>,
 /*       loader: cartProductsLoader, */
       
        
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
