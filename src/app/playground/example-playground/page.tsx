import React from "react";
import PlaygroundLayout from "../PlaygroundLayout";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const title = "Playground Template";
const description =
	"This playground demonstrates the structure and implementation of the PlaygroundLayout component.";

const ExamplePlayground: React.FC = () => {
	return (
		<div className="p-4 bg-white rounded-lg shadow-md">
			<h2 className="text-2xl font-bold mb-4">Playground Content</h2>
			<p>
				This is where the main content of each playground will be displayed.
			</p>
			<p>I can add any React components or content here.</p>
		</div>
	);
};

const BlogContent: React.FC = () => (
	<div className="space-y-6">
		<section>
			<h3 className="text-xl font-semibold mb-2">Creating the Layout</h3>
			<p>
				In this playground, I focused on creating a reusable layout component
				for all playground pages. The PlaygroundLayout component provides a
				consistent structure for displaying playground content, title,
				description, and a blog section.
			</p>
			<p className="mt-2">
				Here&apos;s the key part of the PlaygroundLayout component:
			</p>
			<SyntaxHighlighter language="typescript" style={vscDarkPlus}>
				{`interface PlaygroundLayoutProps {
  title: string;
  description: string;
  children: ReactNode;
  blogContent: ReactNode;
}

const PlaygroundLayout: React.FC<PlaygroundLayoutProps> = ({ 
  children, 
  title, 
  description, 
  blogContent 
}) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2 text-indigo-900">{title}</h1>
        <p className="text-gray-600 mb-6">{description}</p>
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          {children}
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          {blogContent}
        </div>
      </div>
    </div>
  );
};`}
			</SyntaxHighlighter>
		</section>

		<section>
			<h3 className="text-xl font-semibold mb-2">Challenges Faced</h3>
			<p>
				One of the main challenges was designing a flexible layout that could
				accommodate various types of playground content. I needed to ensure that
				the layout could handle different content sizes and structures while
				maintaining a consistent look and feel across all playground pages.
			</p>
			<p>
				Another challenge was implementing proper TypeScript types for the
				layout props, ensuring type safety when using the component across
				different playgrounds.
			</p>
		</section>

		<section>
			<h3 className="text-xl font-semibold mb-2">Future Improvements</h3>
			<p>
				In the future, I&apos;d like to enhance the PlaygroundLayout component
				with additional features:
			</p>
			<ul className="list-disc list-inside mt-2">
				<li>
					Add a navigation component to easily switch between different
					playgrounds
				</li>
				<li>Implement a dark mode toggle for better accessibility</li>
				<li>
					Create a more sophisticated blog content structure, possibly with
					collapsible sections
				</li>
				<li>
					Add SEO optimization features, such as customizable meta tags for each
					playground
				</li>
			</ul>
		</section>
	</div>
);

const ExamplePlaygroundPage: React.FC = () => (
	<PlaygroundLayout
		title={title}
		description={description}
		blogContent={<BlogContent />}
	>
		<ExamplePlayground />
	</PlaygroundLayout>
);

export default ExamplePlaygroundPage;
