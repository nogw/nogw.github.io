import { Page } from '../../components/Page';
import { PostList } from '../../components/PostList';
import { getAllMdxPosts } from '../../lib/post';
import { IPost } from '../../lib/post';

interface PostsProps {
  posts: Array<IPost>;
}

const Posts: React.FC<PostsProps> = ({ posts }) => {
  return (
    <Page title="Articles">
      <PostList posts={posts} />
    </Page>
  );
};

export const getStaticProps = async () => {
  const mdxFiles = getAllMdxPosts().map(mdx => mdx['metadata']);

  return {
    props: {
      posts: mdxFiles,
    },
  };
};

export default Posts;
