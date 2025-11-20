import Link from 'next/link';

type Playground = {
  name: string;
  link: string;
};

export default function Playground() {
  return (
    <section
      className="relative bg-gray-50 flex justify-center flex-col px-4 pb-24"
      aria-labelledby="playground-heading"
    >
      <h1
        id="playground-heading"
        className="text-indigo-900 text-center font-semibold text-4xl mb-8"
      >
        Code Playground
      </h1>
      <div className="flex justify-center">
        <p className="text-gray-600 text-center max-w-2xl mx-auto">
          Small projects where I experiment with new technologies and practice my development
          skills. These playgrounds help me learn and grow as a developer.
        </p>
      </div>
      <Link
        href={'/playground'}
        className="mt-6 flex items-center w-auto m-auto justify-center bg-gray-200 space-x-2 rounded-lg shadow-sm p-4 text-center hover:outline outline-purple-800 text-slate-600 hover:text-purple-800 fill-slate-600 hover:fill-purple-800 hover:bg-gray-300 hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-800 focus:ring-offset-2"
        aria-label="View all code playground projects"
      >
        <p>View All Playgrounds</p>
      </Link>
    </section>
  );
}
