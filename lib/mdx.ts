import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface IMatter<A> {
  metadata: A;
  content: any;
}

const rootPath = process.cwd();

const getMdx = <A>(filename: string, postsPath: string): IMatter<A> => {
  const filePath = path.join(postsPath, filename);
  const fileSlug = path.parse(filename).name;
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  const { data, content } = matter(fileContent);

  return {
    metadata: { ...data, slug: fileSlug } as A,
    content,
  };
};

const getAllMdx = <A>(postsPath: string): Array<IMatter<A>> => {
  const mdxPaths = fs.readdirSync(postsPath);
  const mdxContents = mdxPaths.map(mdx => getMdx<A>(mdx, postsPath));

  return mdxContents;
};

const getMeMdx = () => {
  const filePath = path.join(rootPath, 'public/about.mdx');
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  const { data, content } = matter(fileContent);

  return { data, content };
};

export { getMdx, getAllMdx, getMeMdx };
