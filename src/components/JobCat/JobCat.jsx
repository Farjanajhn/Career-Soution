import React, { useEffect, useState } from 'react';
import Job from '../Job/Job';

const JobCat = () => {
  const [jobs, setJobs] = useState([])
  useEffect(() => {
    fetch('jobs.json')
      .then(res => res.json())
    .then(data=>setJobs(data))
  },[])
  return (
    <div className='border border-red-100  mt-12'>
      <div className='border border-red-100 mt-6'>
      <h1 className='text-2xl font-semibold text-center'>Job Category List</h1>
      <p className='text-center mt-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>
      </div>
      <div className='flex gap-12 items-center justify-center mt-12'>
        {
          jobs.map(job=><Job key={job.id} job={job}></Job>)
}
      </div>
    </div>
  );
};

export default JobCat;