import React, { Children } from 'react';
import { Outlet } from 'react-router-dom';
import Banner from '../Banner/Banner';
import FeaturedJob from '../FeaturedJob/FeaturedJob';
import Header from '../Header/Header';
import JobCat from '../JobCat/JobCat';

const Main = () => {

  return (
    <div>
     <Header></Header>
      <Outlet ></Outlet>
     
      
     
    </div>
     
  );
 
};


export default Main;