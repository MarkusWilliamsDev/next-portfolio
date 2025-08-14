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
		<footer className="bg-purple-800 text-white relative z-10" id="contact">
			<div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-8">
					<h2 className="text-4xl font-semibold mb-4">Get In Touch</h2>
					<p className="text-purple-100">
						Let's connect and build something amazing together
					</p>
				</div>
				<div className="flex flex-wrap justify-center items-center gap-8">
					{contactLogos.map((contactLogo, index) => (
						<a
							href={contactLogo.href}
							target="_blank"
							rel="noreferrer"
							key={index}
							className="flex flex-col items-center text-white hover:text-purple-200 transition-colors duration-300"
						>
							<div className="w-10 h-10 flex items-center justify-center">
								<contactLogo.icon className="w-8 h-8 fill-current" />
							</div>
						</a>
					))}
				</div>
			</div>
		</footer>
	);
}
