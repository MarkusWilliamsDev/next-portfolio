import fs from "fs";
import path from "path";
import Link from "next/link";

export default function PlaygroundPage() {
	const playgroundDir = path.join(process.cwd(), "src/app/playground");
	const playgrounds = fs
		.readdirSync(playgroundDir, { withFileTypes: true })
		.filter((dirent) => dirent.isDirectory())
		.map((dirent) => dirent.name);

	return (
		<div className="container mx-auto px-4 py-8 mt-16">
			{" "}
			{/* Added mt-16 for top margin */}
			<h1 className="text-3xl font-bold mb-6">Code Playgrounds</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{playgrounds.map((playground) => (
					<Link
						href={`/playground/${playground}`}
						key={playground}
						className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
					>
						<h2 className="text-xl font-semibold mb-2">
							{playground.replace(/-/g, " ")}
						</h2>
						<p className="text-gray-600">Explore this playground</p>
					</Link>
				))}
			</div>
		</div>
	);
}
