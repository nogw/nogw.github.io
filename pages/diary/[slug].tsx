import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import rehypePrism from 'rehype-prism-plus';
import { getAllMdxDiaries } from '../../lib/diary';
import { IDiary } from '../../lib/diary';
import { Page } from '../../components/Page';
import { components } from '../../components/MDX';
import { Prose } from '../../components/Prose';

interface ContextProps extends ParsedUrlQuery {
  slug: string;
}

interface DiaryProps {
  metadata: IDiary;
  content: any;
}

const Diary: NextPage<DiaryProps> = ({ metadata, content }) => {
  return (
    <Page {...metadata}>
      <Prose>
        <MDXRemote {...content} components={components} />
      </Prose>
    </Page>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const diaries = getAllMdxDiaries();
  return {
    paths: diaries.map(file => ({
      params: { slug: file.metadata.slug },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const { slug } = context.params as ContextProps;

  const diaries = getAllMdxDiaries();
  const index = diaries.findIndex(p => p.metadata.slug === slug);
  const idiary = diaries[index];

  const { metadata, content } = idiary;

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

export default Diary;
