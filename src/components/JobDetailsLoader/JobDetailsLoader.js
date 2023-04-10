import React from 'react';

const JobDetailsLoader = async() => {
  const loadedDetails = await fetch('jobs.json');
  const jobs = loadedDetails.json();
  console.log(jobs);
  return jobs;

};

export default JobDetailsLoader;