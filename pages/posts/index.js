import AllPosts from '../../components/posts/all-posts';
import { getAllPosts } from '../../lib/posts-util';

const AllPostsPage = ({ posts }) => {
  return <AllPosts posts={posts} />;
};

export default AllPostsPage;

export const getStaticProps = async () => {
  const posts = getAllPosts();
  return {
    props: {
      posts,
    },
  };
};
