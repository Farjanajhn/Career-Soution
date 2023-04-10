import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import JobCart from '../JobCart/JobCart';

const JobDetail = () => {

  const [jobData, setJobData] = useState({});
/*   console.log(jobData); */
  const jobs = useLoaderData();
 console.log(jobs);   
  const params = useParams();
 /*   console.log(params);  */

 useEffect(() => {
  if(jobs)
  {
    const findData = jobs.find(job => job.id == params.jobDetailId);
   /*  console.log(findData); */
    setJobData(findData);
     }
  
  },[]) 
    
  return (
    <div>
      {
        
          <JobCart jobData={jobData}></JobCart>
      }
  
    </div>
  );
};

export default JobDetail;