import React, { ReactNode } from "react";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

interface PlaygroundLayoutProps {
	title: string;
	description: string;
	children: ReactNode;
	blogContent: ReactNode;
}

const PlaygroundLayout: React.FC<PlaygroundLayoutProps> = ({
	title,
	description,
	children,
	blogContent,
}) => {
	return (
		<div className="min-h-screen bg-gray-50">
			<div className="container mx-auto px-4 py-8">
				<Link
					href="/playground"
					className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-4"
				>
					<FiArrowLeft className="mr-2" />
					Back to Playgrounds
				</Link>
				<h1 className="text-3xl font-bold mb-2 text-indigo-900">{title}</h1>
				<p className="text-gray-600 mb-6">{description}</p>
				<div className="bg-white rounded-lg shadow-md p-6 mb-8">
					<h2 className="text-2xl font-semibold mb-4 text-gray-800">
						Playground
					</h2>
					{children}
				</div>
				<div className="bg-white rounded-lg shadow-md p-6">
					<h2 className="text-2xl font-semibold mb-4 text-gray-800">
						What I Did
					</h2>
					<div className="prose max-w-none">{blogContent}</div>
				</div>
			</div>
		</div>
	);
};

export default PlaygroundLayout;
