import { ReactNode } from 'react';

type WorkLayoutProps = {
  children: ReactNode;
  title: string;
  description: string;
};

const WorkLayout = ({ title, description, children }: WorkLayoutProps) => {
  return (
    <>
      <main className="mt-24 bg-gray-50">
        <h1>{title}</h1>
        <p>{description}</p>
        {children}
      </main>
    </>
  );
};

export default WorkLayout;
