import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

import JobCart from '../JobCart/JobCart';
import { addToDb } from '../Uitilities/fakedb';


const JobDetail = () => {

  const [jobData, setJobData] = useState({});
/*   console.log(jobData); */
  const jobs = useLoaderData();
/*  console.log(jobs);    */
  const params = useParams();
  

 useEffect(() => {
  if(jobs)
  {
    const findData = jobs.find(job => job.id == params.jobDetailId);
   /*  console.log(findData); */
    setJobData(findData);
     }
  
  },[]) 
  const handleAddToCart = (id) => {
    console.log(id);
    addToDb(id)
    }
  return (
    <div>
      {
        
        <JobCart key={ jobData.id} jobData={jobData} handleAddToCart={handleAddToCart}></JobCart>
      }
  
    </div>
  );
};

export default JobDetail;