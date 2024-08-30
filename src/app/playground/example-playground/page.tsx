import React from "react";
import PlaygroundLayout from "../PlaygroundLayout";

const title = "Example Playground";
const description =
	"This is an example playground demonstrating the new layout structure.";

const ExamplePlayground: React.FC = () => {
	return (
		<div>
			<p>This is where your playground code would be.</p>
			<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
				Click me!
			</button>
		</div>
	);
};

const BlogContent: React.FC = () => (
	<div>
		<h3>What I Learned</h3>
		<p>
			In this playground, I explored the basics of creating a TypeScript React
			component in Next.js. I learned how to properly type my components and use
			the PlaygroundLayout to structure my page.
		</p>
		<h3>Challenges Faced</h3>
		<p>
			One of the main challenges was ensuring that all the types were correctly
			defined, especially when working with the layout component.
		</p>
		<h3>Future Improvements</h3>
		<p>
			In the future, I'd like to add more interactive elements to this
			playground, such as a form with proper TypeScript validation.
		</p>
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
