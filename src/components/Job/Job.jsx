import React from 'react';

const Job = ({ job }) => {
  const {Category_logo,Category_name, job_available } = job;
  return (
    
    <div className='pl-4 rounded-md w-64 h-56 pt-8 bg-purple-100'>
    
      
      <img className="w-16 h-16 rounded-md" src={Category_logo} alt="" />
      <h4 className='text-2xl font-semibold pt-4'>{Category_name}</h4>
      <p className='pt-3'>{ job_available}</p>

      
    
    </div>
  );
};

export default Job;