import React, { PureComponent } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Line } from 'recharts';


const Statistics = () => {
  const data = [
    {
      name: 'Assignment 1',
      assignment_title:'new year new mission',
      marks:60,
    },
    {
      name: 'Assignment 2',
     assignment_title:'responsive G3-Architects website',
     marks:57
    },
    {
      name: 'Assignment 3',
     assignment_title:'responsive landing page ',
     marks:57,
    },
      {
      name: 'Assignment 4',
     assignment_title:'basic javascript problem solving',
     marks:58,
    },
      {
      name: 'Assignment 5',
     assignment_title:'Geometry Genius Assignment requirements',
     marks:58,
    },
      {
      name: 'Assignment 6',
     assignment_title:'AI Universe API and ES6 ',
     marks:53,
    },
      {
      name: 'Assignment 7',
     assignment_title:'devTool amd debug',
     marks:60,
    },
      {
      name: 'Assignment 8',
     assignment_title:'Knowledge cafe',
     marks:60,
    },
  
  
  ];


    
  return (
    <div className='mt-12'>
       <h2 className='text-4xl font-bold text-center'>Assignment Statistics</h2>
    <p className='text-center mt-4'>Here you can find all my assignment marks which I have obtain in throughout this course</p>
   

   

        <ResponsiveContainer width="100%" height={400}>
          <ScatterChart
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid />
            <XAxis  dataKey="name"  />
            <YAxis  dataKey="marks"   />
            <Tooltip />
            <Scatter name="Assignment marks" data={data} fill="#8884d8" />
          </ScatterChart>
      </ResponsiveContainer>
      </div>
      );
    
  
  
 /*  const marksArray = [
    {
      name: 'Assignment 1',
      assignment_title:'new year new mission',
      marks:60,
    },
    {
      name: 'Assignment 2',
     assignment_title:'responsive G3-Architects website',
     marks:57
    },
    {
      name: 'Assignment 3',
     assignment_title:'responsive landing page ',
     marks:57,
    },
      {
      name: 'Assignment 4',
     assignment_title:'basic javascript problem solving',
     marks:58,
    },
      {
      name: 'Assignment 5',
     assignment_title:'Geometry Genius Assignment requirements',
     marks:58,
    },
      {
      name: 'Assignment 6',
     assignment_title:'AI Universe API and ES6 ',
     marks:53,
    },
      {
      name: 'Assignment 7',
     assignment_title:'devTool amd debug',
     marks:60,
    },
      {
      name: 'Assignment 8',
     assignment_title:'Knowledge cafe',
     marks:60,
    },
  
  
  ];
  return (
    <div>
      <ScatterChart width={500} height={400} data={marksArray}>
   <Line dataKey='marks'></Line>
   <Line dataKey='assignment-title'></Line>
    </ScatterChart>
    </div>
  ); */
};

export default Statistics;