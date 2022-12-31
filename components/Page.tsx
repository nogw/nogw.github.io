import clsx from 'clsx';
import Head from 'next/head';
import { formatDate } from '../lib/utils';
import { settings } from '../lib/settings';
import { Prose } from './Prose';

interface PageProps {
  date?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}

export const Page: React.FC<PageProps> = ({
  date,
  title,
  description,
  children,
}) => {
  const metaTitle = `${title} - ${settings.name}`;
  const metaDescription = description ? description : settings.description;

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="og:url" content={settings.url} />
        <meta property="og:title" content={metaTitle} />
        <meta name="description" content={metaDescription} />
        <meta name="og:description" content={metaDescription} />
      </Head>
      <header className={clsx('mb-8 pb-8 border-b', 'border-gray-200')}>
        {date ? (
          <time className={clsx('block mb-2', 'text-gray-500')}>
            {formatDate(date)}
          </time>
        ) : null}
        <h1 className="font-bold text-4xl text-neutral-700">{title}</h1>
        {description ? (
          <div className="mt-4 text-neutral-600">
            <Prose>
              <p>{description}</p>
            </Prose>
          </div>
        ) : null}
      </header>
      {children}
    </>
  );
};
