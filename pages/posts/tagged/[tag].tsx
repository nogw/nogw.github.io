import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { getAllMdxPosts } from '../../../lib/post';
import { IPost } from '../../../lib/post';
import { PostList } from '../../../components/PostList';
import { Page } from '../../../components/Page';
import slugify from 'slugify';

interface ContextProps extends ParsedUrlQuery {
  tag: string;
}

interface PostsProps {
  tag: string;
  posts: Array<IPost>;
}

const Posts: NextPage<PostsProps> = ({ tag, posts }) => {
  return (
    <>
      <Page title={`#${tag}`}>
        <PostList posts={posts} />
      </Page>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const mdxPosts = getAllMdxPosts().map(post => post.metadata);
  const tags = new Set(mdxPosts.map(file => file.tags).flat());

  return {
    paths: Array.from(tags).map(tag => {
      return {
        params: {
          tag: slugify(tag || ''),
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const { tag } = context.params as ContextProps;

  const mdxPosts = getAllMdxPosts().map(post => post.metadata);

  const postsByTag = mdxPosts.filter(post => {
    return post.tags?.includes(tag);
  });

  return {
    props: {
      tag,
      posts: postsByTag,
    },
  };
};

export default Posts;
