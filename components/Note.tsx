import { Prose } from './Prose';

interface NoteProps {
  children: React.ReactNode;
}

export const Note: React.FC<NoteProps> = ({ children }) => {
  return (
    <aside>
      <Prose>{children}</Prose>
    </aside>
  );
};
