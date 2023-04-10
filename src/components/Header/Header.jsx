import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='md:flex justify-evenly  bg-gradient-to-r from-pink-500 to-violet-500 w-75 mx-auto h-32 items-center'>
      <div className='md:flex gap-64'>
        <h4 className='ml-4 text-4xl  '>Career-Solution</h4>
      
        <div className=''>
         <Link className='pl-6'  to='/'>Home</Link> 
        <Link className='pl-6'  to='/statistics'>Statistics</Link>
        <Link className='pl-6' to='/applied'>Applied Job</Link>
        <Link className='pl-6' to='/blog'>Blog</Link>
        </div>
      </div>
      <Link><button className='rounded-md w-32 border-solid border-2 border-indigo-600'>Start Applying</button></Link>
    </div>
  );
};

export default Header;