import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import rehypePrism from 'rehype-prism-plus';
import { getAllMdxPosts } from '../../lib/post';
import { IPost } from '../../lib/post';
import { Page } from '../../components/Page';
import { components } from '../../components/MDX';
import { Prose } from '../../components/Prose';

interface ContextProps extends ParsedUrlQuery {
  slug: string;
}

interface PostProps {
  metadata: IPost;
  content: any;
}

const Post: NextPage<PostProps> = ({ metadata, content }) => {
  return (
    <Page {...metadata}>
      <Prose>
        <MDXRemote {...content} components={components} />
      </Prose>
    </Page>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllMdxPosts();
  return {
    paths: posts.map(file => ({
      params: { slug: file.metadata.slug },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const { slug } = context.params as ContextProps;

  const posts = getAllMdxPosts();
  const index = posts.findIndex(p => p.metadata.slug === slug);
  const ipost = posts[index];

  const { metadata, content } = ipost;

  const mdxContent = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [rehypePrism],
    },
    scope: metadata as Record<string, any>,
  });

  return {
    props: {
      metadata,
      content: mdxContent,
    },
  };
};

export default Post;
