import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { settings } from '../lib/settings';

export const Header = () => {
  const { pathname } = useRouter();

  return (
    <header className="py-8 flex justify-between items-center">
      <Link href={'/'} className="text-neutral-800 font-bold">
        {settings.avatar ? (
          <span className="flex">
            <Image
              className="rounded-md"
              src={settings.avatar}
              width={48}
              height={48}
              alt={settings.name}
              priority
            />
          </span>
        ) : (
          settings.name
        )}
      </Link>
      <nav>
        <ul className="flex">
          {settings.routes.map((route, index) => {
            const isActive = route.path === pathname;

            return (
              <li
                key={index}
                aria-current={isActive ? 'page' : undefined}
                className={clsx('text-neutral-500  font-medium text-lg')}
              >
                {index > 0 && index < settings.routes.length ? (
                  <span className={'mx-4'}>/</span>
                ) : null}
                <Link
                  href={route.path}
                  key={index}
                  className={clsx(
                    'hover:text-neutral-900',
                    isActive ? 'text-neutral-900' : 'text-neutral-500',
                  )}
                >
                  {route.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
