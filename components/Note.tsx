import { ReactNode } from 'react';
import { Prose } from './Prose';

interface NoteProps {
  children: ReactNode;
}

export const Note: React.FC<NoteProps> = ({ children }) => {
  return (
    <aside>
      <Prose>{children}</Prose>
    </aside>
  );
};
