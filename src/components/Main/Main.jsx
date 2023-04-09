import React, { Children } from 'react';
import { Outlet } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import JobCat from '../JobCat/JobCat';

const Main = ({children}) => {
  return (
    <div>
     <Header></Header>
      <Outlet></Outlet>
      <Banner></Banner>
      <JobCat></JobCat>
      {children}
     
    </div>
     
  );
};

export default Main;