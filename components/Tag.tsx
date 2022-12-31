import Link from 'next/link';
import slugify from 'slugify';

interface TagProps {
  href: string;
  children: string;
}

export const Tag: React.FC<TagProps> = ({ href, children }) => {
  return (
    <Link href={href} className="text-neutral-500">
      #{slugify(children)}
    </Link>
  );
};
