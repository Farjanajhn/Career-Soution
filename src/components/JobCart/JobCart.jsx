import React from 'react';

const JobCart = ({ jobData }) => {
  console.log({ jobData });
  console.log(jobData)
  return (
    <div className='flex justify-around items-center mx-24 mt-12 pt-12'>
      <div className='max-w-3xl  border border-blue-400 py-6 px-6'>
        <h1 className='mt-6'><span className='text-xl font-semibold'>Description:</span>An IT specialist is responsible for maintaining and supporting an organization's computer systems and networks. They must have a strong understanding of hardware, software, and networking technologies, as well as the ability to troubleshoot and resolve technical issues. They collaborate with other teams to ensure that IT systems meet business requirements and are properly integrated with other systems.</h1>
        <h1 className='mt-6'><span className='text-md font-semibold'>Responsibility:</span>Install, configure, and maintain computer hardware, software, and peripherals</h1>
        <h1 className='mt-6'><span className='text-md font-semibold'>Experience:</span>2+years</h1>
      </div>
      <div className='bg-purple-100 w-62 border border-red-700'>
        <p>Email</p>
        <p>Phone</p>
        <p>Address</p>


      </div>
    </div>
  );
};

export default JobCart;