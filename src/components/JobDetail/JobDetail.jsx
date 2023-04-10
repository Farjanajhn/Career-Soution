import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import JobCart from '../JobCart/JobCart';

const JobDetail = () => {
/*   const [jobDetails, setJobDetails] = useState([]);
  useEffect(() => {
    fetch('jobs.json')
    .then
  },[]) */
 /*  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
    .then(data=>console.log(data))
  },[]) */
  const [jobData, setJobData] = useState({});
  console.log(jobData);
  const job = useLoaderData();
/*   console.log(job);  */
  const params = useParams();
 /*  console.log(params); */

  useEffect(() => {
   
    if (job) {
      const findData = job.find(j=>j.id == params.id);
      setJobData(findData);
}
  
  
  },[]) 
  


  

 
  return (
    <div>
      
      <JobCart jobData={jobData}></JobCart>
    </div>
  );
};

export default JobDetail;