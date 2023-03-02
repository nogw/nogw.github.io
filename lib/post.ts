import path from 'path';
import { getMdx, getAllMdx } from './mdx';

export interface IPost {
  slug: string;
  title: string;
  description?: string;
  date: string;
  tags: string[];
}

const postsPath = path.join(process.cwd(), '/posts/articles');

const getMdxPost = (filename: string) => getMdx(filename, postsPath);
const getAllMdxPosts = () => getAllMdx(postsPath);

export { getMdxPost, getAllMdxPosts };
