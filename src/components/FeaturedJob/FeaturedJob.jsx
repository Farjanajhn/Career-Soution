import React, { useEffect, useState } from 'react';
import { BeakerIcon,CurrencyDollarIcon,MapPinIcon } from '@heroicons/react/24/solid'
import SingleJob from '../SingleJob/SingleJob';

const FeaturedJob = () => {
  const [featuredJobs, setFeaturedJobs] = useState([]);
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
    .then(data=>setFeaturedJobs(data))
  },[])
  return (
    <div className='mt-12'>
      <h2 className='text-4xl font-bold text-center'>Featured Jobs</h2>
      <p className='text-center mt-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>
      <div className='grid grid-cols-2 gap-4 w-75% justify-around'>
        {
          featuredJobs.map(featuredJob => <SingleJob
          featuredJob={featuredJob}></SingleJob>)
        }
     </div>
    </div>
    
  );
};

export default FeaturedJob;
