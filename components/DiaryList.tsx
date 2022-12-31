import { formatDate } from '../lib/utils';
import { IMatter } from '../lib/mdx';
import { IDiary } from '../lib/diary';
import { Prose } from './Prose';
import { Tag } from './Tag';

import Link from 'next/link';
import clsx from 'clsx';

import { MDXRemote } from 'next-mdx-remote';
import { components } from './MDX';

interface DiaryListProps {
  diary: Array<IMatter<IDiary>>;
}

export const DiaryList: React.FC<DiaryListProps> = ({ diary }) => {
  return (
    <ul className="flex flex-col divide-y -mt-8">
      {diary.map(({ metadata, content }, index) => {
        return (
          <li key={index} className="py-8">
            <article>
              <time className={clsx('block mb-1 text-neutral-500 text-sm')}>
                {formatDate(metadata.date)}
              </time>
              <h2 className="font-bold text-xl mb-2 text-neutral-700">
                <Link href={`/diary/${metadata.slug}`}>{metadata.title}</Link>
              </h2>
              <div className="line-clamp-3">
                <Prose>
                  <MDXRemote {...content} components={components} />
                </Prose>
              </div>
            </article>
          </li>
        );
      })}
    </ul>
  );
};
