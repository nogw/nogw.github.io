import clsx from 'clsx';
import { HtmlHTMLAttributes, ReactNode } from 'react';
import { Prose } from './Prose';

interface PreProps extends HtmlHTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const Pre: React.FC<PreProps> = ({ className, children }) => {
  return (
    <pre
      className={clsx(
        'rounded-none py-2 border-y-2 border-t-4 border-gray-100',
        className,
      )}
    >
      {children}
    </pre>
  );
};
