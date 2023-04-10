import React from 'react';

const Blog = () => {
  return (
    <div className='mt-12'>
       <h2 className='text-4xl font-semibold text-center'>Blog</h2>
      <p className='text-center mt-4'>You would find most important question answer about react router</p>
      <div className='mx-12 text-center border-2 border-purple-400 rounded mt-12 pb-4'>
        <h1 className='text-2xl font-semibold text-center mt-4 '>When we have to use context API?</h1>
        <p className='text-center mt-4'>when we need to pass data from a parent component down to a child component, but that data is not used by any other components in between. If we have data that multiple components in our application need to access we can also use Context API.</p>

        <h1 className='text-2xl font-semibold text-center mt-4'>What is custom hook?</h1>
        <p className='text-center mt-4'>A custom hook in React is a JavaScript function that allows you to reuse stateful logic across multiple components. It's a way to extract stateful logic from a component so that it can be reused in other components.Custom hooks follow a specific naming convention: their names should start with "use". This naming convention is important because it lets React know that this function is a hook and that it follows the rules of hooks.</p>
        <h1 className='text-2xl font-bold text-center mt-4'>What is useRef?</h1>

        <p className='text-center mt-4'>useRef is a built-in hook in React that returns a mutable ref object. Refs are a way to access and modify the properties of a DOM element or a child component directly. The ref object can be passed as a prop to a child component or used directly in a function or method.</p>

        <h1 className='text-center mt-4'></h1>
        <p className='text-center mt-4'>useMemo is a hook in React that allows for optimization of expensive computations that are used in rendering. It takes a function and an array of dependencies, and returns a memoized value.

The memoized value is only re-computed when one of the dependencies has changed. This can be used to prevent unnecessary re-renders caused by a re-computation of the expensive value, when the dependencies haven't actually changed.</p>


      </div>
    </div>
  );
};

export default Blog;