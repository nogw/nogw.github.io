import { FaRegHeart } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="mt-auto py-8 flex align-center justify-center">
      <p className="text-neutral-600 font-medium flex content-center">
        Made with <FaRegHeart className="mt-1 mx-2 text-red-500" /> by Noge
      </p>
    </footer>
  );
};
