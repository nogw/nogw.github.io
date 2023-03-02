import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { IPost } from './post';

export interface IMatter<A> {
  metadata: A;
  content: any;
}

const getMdx = (filename: string, postsPath: string): IMatter<IPost> => {
  const filePath = path.join(postsPath, filename);
  const fileSlug = path.parse(filename).name;
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  const { data, content } = matter(fileContent);

  return {
    metadata: { ...data, slug: fileSlug } as IPost,
    content,
  };
};

const getAllMdx = (postsPath: string): Array<IMatter<IPost>> => {
  const mdxPaths = fs.readdirSync(postsPath);
  const mdxContents = mdxPaths.map(mdx => getMdx(mdx, postsPath));

  return mdxContents.sort((a, b) => {
    return (
      new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
    );
  });
};

const getMeMdx = () => {
  const filePath = path.join(process.cwd(), 'public/about.mdx');
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  const { data, content } = matter(fileContent);

  return { data, content };
};

export { getMdx, getAllMdx, getMeMdx };
