import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

import JobCart from '../JobCart/JobCart';

const JobDetail = () => {

  const [jobData, setJobData] = useState({});
/*   console.log(jobData); */
  const jobs = useLoaderData();
/*  console.log(jobs);    */
  const params = useParams();
  /*   console.log(params);  */
  /* const [cart, setCart] = useState([]);  */


 /*  const handleJobCart = (id) => {
  
    const previousJob = localStorage.getItem('jobCart');

    if (previousJob) {
      const newCart = [...cart, id];
      setCart(newCart);
      localStorage.setItem('jobCart',newCart)
    }
    else {
      localStorage.setItem('jobCart',id)
    }
  } */
 /*  const handleJobCart = () => {
    console.log('added')
  } */

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
        
        <JobCart key={ jobData.id} jobData={jobData}></JobCart>
      }
  
    </div>
  );
};

export default JobDetail;