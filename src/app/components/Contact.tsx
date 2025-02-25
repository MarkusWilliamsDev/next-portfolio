import React from "react";
import {
	GrLinkedin as Linkedin,
	GrMail as Mail,
	GrGithub as Github,
} from "react-icons/gr";

export default function Contact() {
	const contactLogos = [
		{
			icon: Linkedin,
			name: "LinkedIn",
			href: "https://www.linkedin.com/in/markus-williams-dev/",
		},
		{
			icon: Mail,
			name: "Email",
			href: "mailto:markuswilliamsdev@gmail.com",
		},
		{
			icon: Github,
			name: "GitHub",
			href: "https://github.com/MarkusWilliamsDev",
		},
	];

	return (
		<div className="flex bg-gray-50 relative" id="contact" data-testid="contact-section">
			<div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
				<div className="flex flex-wrap justify-center p-2">
					{/* TODO: Resize & animate cards */}
					{contactLogos.map((contactLogo, index) => (
						<a
							href={contactLogo.href}
							target="_blank"
							rel="noreferrer"
							key={index}
						>
							<div className="p-6 mx-6 my-4 sm:m-4 w-36 sm:w-60 bg-gray-100 rounded-lg drop-shadow-md hover:drop-shadow-lg text-indigo-600 hover:text-purple-800 transition-colors duration-300 ">
								{<contactLogo.icon className="w-full h-12 mb-2 fill-current" />}
								<p className="text-center font-medium">{contactLogo.name}</p>
							</div>
						</a>
					))}
				</div>
			</div>
		</div>
	);
}