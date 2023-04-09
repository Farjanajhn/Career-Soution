import React from 'react';


const Banner = () => {
  return (
    <div className=' rounded-md w-full h-96 bg-white'>
     
      <div className='flex w-full h-full justify-center'>
        <div className=' w-96 
         justify-center pt-24'>
          <h1 className="text-5xl font-bold pl-4">
         One Step Closer To You <span className='text-red-500'>Dream Job</span>
          </h1>
          <p className='text-sm text-center pt-4'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
          <button className='bg-fuchsia-200  rounded-sm w-56 ml-24 mt-6'>Apply Now</button>
        </div>
        <div className=' h-96 ml-24 '>
<img className=' h-full rounded-md' src="https://www.legalzoom.com/sites/lz.com/files/inline-images/articles/xwomanbusiness.jpg.pagespeed.ic.X22I1cEaN2.webp" alt="" />
        </div>
      </div>
    
    </div>
  );
};

export default Banner;