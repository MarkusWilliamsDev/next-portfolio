import { GrReactjs as ReactJS } from "react-icons/gr";
import {
	SiJavascript as JS,
	SiTailwindcss as Tailwind,
	SiCsharp as CSharp,
	SiNodedotjs as NodeJS,
	SiOpenai as OpenAI,
} from "react-icons/si";
import {
	TbBrandNextjs as NextJS,
	TbBrandTypescript as TS,
} from "react-icons/tb";
import SitecoreLogo from "../assets/logos/SitecoreLogo";
import SitecoreSearchLogo from "../assets/logos/SitecoreSearchLogo";
import SitecoreXMCLogo from "../assets/logos/SitecoreXMCLogo";
import SitecoreCDPLogo from "../assets/logos/SitecoreCDPLogo";
import Marquee from "react-fast-marquee";

export default function Logos() {
	const logos = [
		{ icon: JS, name: "JavaScript" },
		{ icon: TS, name: "TypeScript" },
		{ icon: ReactJS, name: "ReactJS" },
		{ icon: NextJS, name: "NextJS" },
		{ icon: Tailwind, name: "Tailwind" },
		{ icon: NodeJS, name: "NodeJS" },
		{ icon: CSharp, name: "C# .NET" },
		{ icon: SitecoreLogo, name: "Sitecore" },
		{ icon: SitecoreXMCLogo, name: "Sitecore XM Cloud" },
		{ icon: SitecoreSearchLogo, name: "Sitecore Search" },
		{ icon: SitecoreCDPLogo, name: "Sitecore CDP" },
	];
	return (
		<div className="bg-gray-50 relative">
			<div className="max-w-7xl mx-auto pt-12 px-4 sm:px-6 lg:px-8">
				<h1 className="text-indigo-900 text-center font-mono font-semibold text-2xl sm:text-4xl p-4 mb-8">
					Skilled with
				</h1>
				<Marquee gradient={false} speed={50} className="py-4">
					{logos.map((logo, index) => (
						<div
							className="flex flex-col items-center justify-center mx-8 group cursor-pointer"
							key={index}
						>
							<logo.icon className="w-20 h-20 text-indigo-800 group-hover:text-purple-700 transition-colors duration-300 mb-2" />
							<p className="text-sm text-indigo-800 group-hover:text-purple-700 font-medium transition-colors duration-300">
								{logo.name}
							</p>
						</div>
					))}
				</Marquee>
			</div>
		</div>
	);
}
