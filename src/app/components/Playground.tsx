import Link from "next/link";
import { FiExternalLink as LinkIcon } from "react-icons/fi";

export default function Playground() {
	return (
		<div className="relative bg-gray-50 flex justify-center flex-col h-44 px-4">
			<h1 className="text-indigo-900 text-center font-mono font-semibold text-2xl sm:text-4xl p-4">
				Code Playground
			</h1>
			<div className="flex justify-center">
				<p className="text-gray-600 text-center">
					Code playgrounds are a great way for me to learn new technologies and
					to practice my skills.
				</p>
			</div>
			<Link
				href={"/playground"}
				className="flex items-center w-auto m-auto justify-center bg-gray-200 space-x-2 rounded-lg shadow-sm p-4 text-center hover:outline outline-purple-800 text-slate-600 hover:text-purple-800 fill-slate-600 hover:fill-purple-800 hover:bg-gray-300 hover:shadow-md transition-all duration-200"
			>
				<p className="font-mono">view all playgrounds</p>
			</Link>
		</div>
	);
}
