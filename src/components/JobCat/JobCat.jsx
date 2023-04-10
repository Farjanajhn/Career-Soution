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
    <div className='  mt-12'>
      <div className=' mt-6'>
      <h1 className='text-4xl font-bold text-center'>Job Category List</h1>
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