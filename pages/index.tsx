import type { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import { Page } from '../components/Page';
import { PostList } from '../components/PostList';
import { getAllMdxPosts } from '../lib/post';
import { IPost } from '../lib/post';
import { description } from '../lib/settings';

interface HomeProps {
  posts: Array<IPost>;
}

const Home: NextPage<HomeProps> = ({ posts }) => {
  return (
    <Page title="Hi, I'm Noge" description={description.short}>
      <PostList posts={posts} />
      {/* <div className="mt-4">
        <Link
          href="/posts"
          className="group inline-flex items-center gap-2 text-sky-600"
        >
          View more posts
        </Link>
      </div> */}
    </Page>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const mdxPosts = getAllMdxPosts().map(post => post.metadata);

  return {
    props: {
      posts: mdxPosts.slice(0, 5),
    },
  };
};

export default Home;
