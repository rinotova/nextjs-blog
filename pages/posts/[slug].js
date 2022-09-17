import Head from 'next/head';
import { Fragment } from 'react';
import PostContent from '../../components/posts/post-detail/post-content';
import { getAllPosts, getPostData } from '../../lib/posts-util';

const PostDetailPage = ({ post }) => {
  return (
    <Fragment>
      <Head>
        <title>{post.title}</title>
      </Head>
      <PostContent post={post} />
    </Fragment>
  );
};

export default PostDetailPage;

export const getStaticPaths = async () => {
  const posts = getAllPosts();
  const postsSlugs = posts.map((post) => post.slug);
  const paths = postsSlugs.map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps = (ctx) => {
  const { params } = ctx;
  const { slug } = params;
  let notFound = false;
  let post;
  try {
    post = getPostData(slug);
  } catch {
    notFound = true;
  }
  console.log(post);
  return {
    props: {
      post,
    },
    revalidate: 600,
    notFound,
  };
};
