import React from 'react';

const Job = ({ job }) => {
  const {cover_image,job_name, job_amount } = job;
  return (
    <div className='pl-4 rounded-md w-56 h-56 pt-12 bg-purple-100'>
    
      
      <img className="w-16 h-16 rounded-md" src={cover_image} alt="" />
      <h4 className='text-2xl font-semibold pt-4'>{job_name}</h4>
      <p className='pt-3'>{ job_amount}</p>

      
    
    </div>
  );
};

export default Job;