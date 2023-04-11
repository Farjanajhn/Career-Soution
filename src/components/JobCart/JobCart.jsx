import React from 'react';
import { BeakerIcon, MegaphoneIcon ,CurrencyDollarIcon,BriefcaseIcon, PhoneIcon,EnvelopeIcon,MapPinIcon} from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const JobCart = ({ jobData,handleJobCart }) => {
  const { id,job_description,responsibility,experience,salary,job_title,location,email,phone } = jobData;
/*   console.log(jobData);  */
  return (
    <div className='mt-12'>
    <h2 className='text-4xl font-bold text-center'>Job Details</h2>
 <p className='text-center mt-4'>You can find all the job information here about a particular job</p>
    <div className='flex justify-around items-center mx-24 mt-12 pt-8  border border-blue-400'>
      <div className='max-w-3xl py-4 px-6'>
        <h1 className='mt-6'><span className='text-xl font-semibold'>Description:</span>{job_description}</h1>
        <h1 className='mt-6'><span className='text-md font-semibold'>Responsibility:</span>{responsibility}</h1>
        <h1 className='mt-6'><span className='text-md font-semibold'>Experience:</span>{experience}</h1>
      </div>
      <div>
        <div className='bg-purple-100 w-96 h-96 rounded mb-4 pl-6 pt-6' >
          <h1 className='text-xl border-b-2 border-gray-500'>Job Details</h1>
          <div>
            <div className='flex mt-6 '>
              <CurrencyDollarIcon class="h-6 w-6 text-blue-500" />
              <p className='ml-2'>Salary:{salary}</p>

            </div>

            <div className='flex mt-6'>
              <BriefcaseIcon class="h-6 w-6 text-blue-500" />
              <p className='ml-2'>Job Title:{job_title}</p>
            </div>
          </div>
          <h1 className='text-xl border-b-2 border-gray-500 mt-6'>Contact Information</h1>
          <div className='flex mt-6'>
            <PhoneIcon class="h-6 w-6 text-blue-500" />
            <p className='ml-2'>Phone:{phone}</p>
          </div>
        
          <div className='flex mt-6'>
            <EnvelopeIcon class="h-6 w-6 text-blue-500" />
            <p className='ml-2'>{email}</p>
          </div>

          <div className='flex mt-6'>
            <MapPinIcon class="h-6 w-6 text-blue-500" />
            <p className='ml-2'>Address:{location}</p>
          </div>
      
      </div>
        <Link to='/handleJobCart'><button onClick={()=>handleJobCart(id)} className='rounded w-96 bg-purple-700 py-2 text-white items-center  mb-4' >Apply Now</button></Link>
   </div>
      </div>
      </div>
  );
};

export default JobCart;