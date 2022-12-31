import { GetStaticProps, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import { Page } from '../components/Page';
import { components } from '../components/MDX';
import { Prose } from '../components/Prose';
import { getMeMdx } from '../lib/mdx';
import rehypePrism from 'rehype-prism-plus';

interface ContextProps extends ParsedUrlQuery {
  slug: string;
}

interface AboutProps {
  content: any;
}

const About: NextPage<AboutProps> = ({ content }) => {
  return (
    <Page title="Hi, I'm Noge">
      <Prose>
        <MDXRemote {...content} components={components} />
      </Prose>
    </Page>
  );
};

export const getStaticProps: GetStaticProps = async context => {
  const { data, content } = getMeMdx();

  const mdxContent = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [rehypePrism],
    },
    scope: data as Record<string, any>,
  });

  return {
    props: {
      content: mdxContent,
    },
  };
};

export default About;
