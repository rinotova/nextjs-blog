import { Fragment } from 'react';
import FeaturedPosts from '../components/HomePage/FeaturedPosts/FeaturedPosts';
import Hero from '../components/HomePage/Hero/Hero';

export const DUMMY_POSTS = [
  {
    slug: 'post-1',
    title:
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    excerpt:
      'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    date: '1983-12-20',
    image: 'post-1.png',
  },
  {
    slug: 'post-2',
    title:
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    excerpt:
      'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    date: '1983-12-20',
    image: 'post-1.png',
  },
  {
    slug: 'post-3',
    title:
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    excerpt:
      'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    date: '1983-12-20',
    image: 'post-1.png',
  },
  {
    slug: 'post-4',
    title:
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    excerpt:
      'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    date: '1983-12-20',
    image: 'post-1.png',
  },
];

const HomePage = () => {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  );
};

export default HomePage;
