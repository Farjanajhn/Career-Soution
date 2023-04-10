import React from 'react';
import Banner from '../Banner/Banner';
import FeaturedJob from '../FeaturedJob/FeaturedJob';
import Header from '../Header/Header';
import JobCat from '../JobCat/JobCat';


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <JobCat></JobCat>
      <FeaturedJob></FeaturedJob>
      

    </div>
  );
};

export default Home;