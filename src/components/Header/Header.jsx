import React from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
  return (
    <div className='flex md:flex justify-evenly bg-gradient-to-r from-pink-500 to-violet-500 w-64 lg:w-75 mx-auto h-32 items-center'>
      <div className='flex md:flex gap-32 lg:gap-64'>
        <h4 className='ml-4 text-4xl '>Career-Solution</h4>
      
        <div className='flex lg:flex-row gap-4'>
         <ActiveLink className='ml-6' to='/'>Home</ActiveLink> 
        <ActiveLink className='ml-6'  to='/statistics'>Statistics</ActiveLink>
        <ActiveLink className='ml-6' to='/handleCart'>Applied Job</ActiveLink> 
        <ActiveLink className='ml-6' to='/blog'>Blog</ActiveLink>
        </div>
      </div>
      <Link><button className='rounded w-30% bg-purple-100 py-2  w-32  '>Start Applying</button></Link>
    </div>
  );
};

export default Header;