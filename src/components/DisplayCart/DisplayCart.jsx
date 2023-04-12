import React from 'react';
import { CurrencyDollarIcon,MapPinIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const DisplayCart = ({ job }) => {
  const { id, img, job_title, company_name, job_type1, job_type2, location, salary } = job;


  return (
    
     
      <div className='border border-purple-700 w-3/4 pt-2 pl-6 mt-12 rounded flex grow mx-auto py-12 justify-stretch ' >
        <div className='flex gap-6'>
        <div>
          <img className="w-52" src={img} alt="" />
        </div>
       
     <div> <p className='text-2xl font-semibold'>{job_title}</p>
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
        </div>
   </div>
      <div className='ml-64 my-12'>
      <Link   to={`/jobDetail/${id}`}><button className=' text-white w-30% bg-purple-700 py-2 rounded mt-4 hover:bg-purple-300'><span className='px-4 '>View details</span></button></Link>
        </div>
      
    </div>

  );
};

export default DisplayCart;