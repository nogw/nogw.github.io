import Link from 'next/link';
import slugify from 'slugify';
import { formatDate } from '../lib/utils';
import { IPost } from '../lib/post';
import { Prose } from './Prose';
import { Tag } from './Tag';
import clsx from 'clsx';

interface PostListProps {
  posts: Array<IPost>;
}

export const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <ul className="flex flex-col divide-y -mt-8">
      {posts.map((post, index) => {
        return (
          <li key={index} className="py-8">
            <article>
              <time className={clsx('block mb-1 text-neutral-500 text-sm')}>
                {formatDate(post.date)}
              </time>
              <h2 className="font-bold text-xl text-neutral-700">
                <Link href={`/posts/${post.slug}`}>{post.title}</Link>
              </h2>
              {post.description ? (
                <div>
                  <Prose>
                    <p className="text-neutral-700">{post.description}</p>
                  </Prose>
                </div>
              ) : null}
              {post.tags ? (
                <ul className={clsx('mt-4 flex flex-wrap space-x-2')}>
                  {post.tags.map((tag, index) => {
                    return (
                      <li key={index}>
                        <Tag href={`/posts/tagged/${slugify(tag)}`}>{tag}</Tag>
                      </li>
                    );
                  })}
                </ul>
              ) : null}
            </article>
          </li>
        );
      })}
    </ul>
  );
};
