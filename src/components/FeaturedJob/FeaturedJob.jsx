import React, { useEffect, useState } from 'react';
import { BeakerIcon,CurrencyDollarIcon,MapPinIcon } from '@heroicons/react/24/solid'
import SingleJob from '../SingleJob/SingleJob';
import './FeaturedJob.css'

const FeaturedJob = () => {
  const [featuredJobs, setFeaturedJobs] = useState([]);
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setFeaturedJobs(data))
  }, []);
  const [allJobs, setAllJobs] = useState(false);
  const handleAllJobs =()=> {
  setAllJobs(true)
}


  
  return (
    <div className='mt-12 relative'>
      <h2 className='text-4xl font-bold text-center'>Featured Jobs</h2>
      <p className='text-center mt-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>
      <div className='grid grid-cols-2 gap-4 w-75% justify-around'>
        {
          featuredJobs.slice(0,allJobs ? 6 : 4).map(featuredJob => <SingleJob
            key={featuredJob.id } featuredJob={featuredJob}></SingleJob>)
        }

      </div>
     <p onClick={handleAllJobs}> <button  className='button-see rounded bg-purple-700  right-0 my-6 place-content-center text-center py-3 text-white w-32  '>See More</button></p>
    </div>

  );
};

export default FeaturedJob;
