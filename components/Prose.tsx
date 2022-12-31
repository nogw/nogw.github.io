interface ProseProps {
  children: React.ReactNode;
}

export const Prose: React.FC<ProseProps> = ({ children }) => {
  return (
    <div className="max-w-none prose prose-a:text-sky-600 prose-h1:text-neutral-700 text-neutral-700">
      {children}
    </div>
  );
};
