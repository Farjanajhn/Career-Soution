import React from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
  return (
    <div className='md:flex justify-evenly  bg-gradient-to-r from-pink-500 to-violet-500 w-75 mx-auto h-32 items-center'>
      <div className='md:flex gap-64'>
        <h4 className='ml-4 text-4xl  '>Career-Solution</h4>
      
        <nav className=''>
         <ActiveLink className='pl-6'  to='/'>Home</ActiveLink> 
        <ActiveLink className='pl-6'  to='/statistics'>Statistics</ActiveLink>
        <ActiveLink className='pl-6' to='/applied'>Applied Job</ActiveLink>
        <ActiveLink className='pl-6' to='/blog'>Blog</ActiveLink>
        </nav>
      </div>
      <Link><button className='rounded-md w-32 border-solid border-2 border-indigo-600'>Start Applying</button></Link>
    </div>
  );
};

export default Header;