import React, { Children } from 'react';
import { Outlet } from 'react-router-dom';
import Banner from '../Banner/Banner';
import FeaturedJob from '../FeaturedJob/FeaturedJob';
import Header from '../Header/Header';
import JobCat from '../JobCat/JobCat';

const Main = ({ children }) => {

  return (
    <div>
     <Header></Header>
      <Outlet children={children}></Outlet>
      <Banner></Banner>
      <JobCat></JobCat>
      <FeaturedJob></FeaturedJob>
      
     
    </div>
     
  );
 
};


export default Main;