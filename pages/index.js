import { Fragment } from 'react';
import FeaturedPosts from '../components/HomePage/FeaturedPosts/FeaturedPosts';
import Hero from '../components/HomePage/Hero/Hero';

const HomePage = () => {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts />
    </Fragment>
  );
};

export default HomePage;
