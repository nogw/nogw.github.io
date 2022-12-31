import path from 'path';
import { getMdx, getAllMdx } from './mdx';

export interface IPost {
  slug: string;
  title: string;
  description?: string;
  date: string;
  tags: string[];
}

const rootPath = process.cwd();
const postsPath = path.join(rootPath, 'posts/articles');

const getMdxPost = (filename: string) => getMdx<IPost>(filename, postsPath);
const getAllMdxPosts = () => getAllMdx<IPost>(postsPath);

export { getMdxPost, getAllMdxPosts };
