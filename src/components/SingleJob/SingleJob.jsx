import React from 'react';
import { CurrencyDollarIcon,MapPinIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const SingleJob = ({ featuredJob }) => {
  /* console.log(featuredJob); */
 const { id,img, job_title, company_name, job_type1, job_type2, location, salary } = featuredJob; 
  return (
    <div className='border border-purple-700  pt-4 pl-6 mt-12 rounded'>
        <img className="w-52" src={img} alt="" />
      <p className='text-2xl font-semibold'>{job_title}</p>
      <p>{ company_name}</p>
        <div className='flex gap-4 mt-2'>
        <p className='w-18 border-2 px-3 rounded border-purple-700 text-purple-950'>{job_type1}</p>
        <p className=' w-22 h-8 border-2 px-1 rounded border-purple-700 text-purple-950'>{job_type2}</p>
        </div>
        <div className='flex gap-4 mt-2'>
          <div className='flex'>
            <p><MapPinIcon className="h-6 w-6 text-blue-500" /></p>
          <p>{location}</p>
          </div>
          
          <div className='flex'>
            <p><CurrencyDollarIcon className="h-6 w-6 text-blue-500" /></p>
            <p>salary:{salary}
            </p>
          </div>
        </div>
       <Link to={`/jobDetail/${id}`}> <button className=' text-white w-30% bg-purple-700 py-2 rounded mt-4 hover:bg-purple-300'><span className='px-4'>View details</span></button></Link>
    </div>
    
  );
};

export default SingleJob;