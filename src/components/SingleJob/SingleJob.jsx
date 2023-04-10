import React from 'react';
import { CurrencyDollarIcon,MapPinIcon } from '@heroicons/react/24/solid'

const SingleJob = ({ featuredJob }) => {
console.log(featuredJob)
 const { img, job_title, company_name, job_type1, job_type2, location, salary } = featuredJob; 
  return (
    <div className='border border-gray-300  pt-4 pl-6 mt-12'>
        <img className="w-52" src={img} alt="" />
      <p className='text-2xl font-semibold'>{job_title}</p>
      <p>{ company_name}</p>
        <div className='flex gap-4 mt-2'>
        <p className='w-18 border-2 px-3 rounded border-purple-400 text-purple-950'>{job_type1}</p>
        <p className=' w-22 h-8 border-2 px-1 rounded border-purple-400 text-purple-950'>{job_type2}</p>
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
        <button className=' w-30% bg-purple-400 py-2 rounded font-bold mt-4 hover:bg-purple-300'>View details</button>
    </div>
    
  );
};

export default SingleJob;