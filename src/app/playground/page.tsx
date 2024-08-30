import fs from "fs";
import path from "path";
import Link from "next/link";
import { FiExternalLink as LinkIcon } from "react-icons/fi";

interface PlaygroundInfo {
	name: string;
	title: string;
	description: string;
}

function getPlaygroundInfo(playgroundName: string): PlaygroundInfo {
	const pagePath = path.join(
		process.cwd(),
		"src/app/playground",
		playgroundName,
		"page.tsx"
	);
	let title = playgroundName.replace(/-/g, " ");
	let description = "";

	try {
		const content = fs.readFileSync(pagePath, "utf8");

		const titleMatch = content.match(/const\s+title\s*=\s*["'](.*)["']/);
		if (titleMatch) {
			title = titleMatch[1].trim();
		}

		const descriptionMatch = content.match(
			/const\s+description\s*=\s*["'](.*)["']/
		);
		if (descriptionMatch) {
			description = descriptionMatch[1].trim();
		} else {
			description = "";
		}
	} catch (error) {
		console.error(`Error reading info for ${playgroundName}:`, error);
	}

	return {
		name: playgroundName,
		title,
		description,
	};
}

export default function PlaygroundPage() {
	const playgroundDir = path.join(process.cwd(), "src/app/playground");
	const playgrounds = fs
		.readdirSync(playgroundDir, { withFileTypes: true })
		.filter((dirent) => dirent.isDirectory())
		.map((dirent) => getPlaygroundInfo(dirent.name));

	return (
		<div className="relative bg-gray-50">
			<div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
				<h1 className="text-indigo-900 text-center font-mono font-semibold text-2xl sm:text-4xl p-4 mb-8">
					Code Playgrounds
				</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{playgrounds.map((playground) => (
						<div
							key={playground.name}
							className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full"
						>
							<div className="p-6 flex-grow">
								<h2 className="text-2xl font-semibold mb-3 text-gray-800">
									{playground.title}
								</h2>
								<p className="text-gray-500">{playground.description}</p>
							</div>
							<div className="p-6 pt-0">
								<Link
									href={`/playground/${playground.name}`}
									className="inline-flex items-center justify-center w-full bg-gray-200 space-x-2 rounded-lg shadow-sm p-2 text-center hover:outline outline-purple-800 text-slate-600 hover:text-purple-800 fill-slate-600 hover:fill-purple-800 hover:bg-gray-300 hover:shadow-md transition-all duration-200"
								>
									<p className="font-mono">Explore Playground</p>
									<LinkIcon />
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
