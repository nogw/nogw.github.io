import path from 'path';
import { getMdx, getAllMdx } from './mdx';

export interface IDiary {
  slug: string;
  date: string;
  title: string;
}

const rootPath = process.cwd();
const diaryPath = path.join(rootPath, 'posts/diary');

const getMdxDiary = (filename: string) => getMdx<IDiary>(filename, diaryPath);
const getAllMdxDiaries = () => getAllMdx<IDiary>(diaryPath);

export { getMdxDiary, getAllMdxDiaries };