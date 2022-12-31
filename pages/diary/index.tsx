import { DiaryList } from '../../components/DiaryList';
import { Page } from '../../components/Page';
import { IDiary, getAllMdxDiaries } from '../../lib/diary';
import { IMatter } from '../../lib/mdx';
import { GetStaticProps, NextPage } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import rehypePrism from 'rehype-prism-plus';

interface DiaryProps {
  diary: Array<IMatter<IDiary>>;
}

const Diary: NextPage<DiaryProps> = ({ diary }) => {
  return (
    <Page title="Diary">
      <DiaryList diary={diary} />
    </Page>
  );
};

export const getStaticProps: GetStaticProps = async context => {
  const mdxFiles = getAllMdxDiaries();

  const mdxContents = await Promise.all(
    mdxFiles.map(async ({ metadata, content }) => {
      const data = await serialize(content, {
        mdxOptions: {
          remarkPlugins: [],
          rehypePlugins: [rehypePrism],
        },
        scope: metadata as Record<string, any>,
      });

      return { metadata, content: data };
    }),
  );

  return {
    props: {
      diary: mdxContents,
    },
  };
};

export default Diary;
