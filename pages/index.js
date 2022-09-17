import { Fragment } from 'react';
import FeaturedPosts from '../components/HomePage/FeaturedPosts/FeaturedPosts';
import Hero from '../components/HomePage/Hero/Hero';
import { getFeaturedPosts } from '../lib/posts-util';

const HomePage = ({ featuredPosts }) => {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={featuredPosts} />
    </Fragment>
  );
};

export default HomePage;

export const getStaticProps = async () => {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      featuredPosts,
    },
  };
};
