"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

	return (
		<nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-16">
					<div className="flex items-center">
						<Link href="/" className="flex-shrink-0 flex items-center">
							<span className="text-xl font-bold text-indigo-600 hover:text-purple-800 transition-colors duration-200">
								MW
							</span>
						</Link>
					</div>
					<div className="hidden sm:ml-6 sm:flex sm:items-center">
						<div className="flex space-x-4">
							<NavLink href="/">Home</NavLink>
							<NavLink href="/playground">Playgrounds</NavLink>
							<NavLink href="/#work">Work</NavLink>
							<NavLink href="/#contact">Contact</NavLink>
						</div>
					</div>
					<div className="flex items-center sm:hidden">
						<button
							onClick={toggleMenu}
							className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-purple-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-800 transition-colors duration-200"
						>
							<span className="sr-only">Open main menu</span>
							{isMenuOpen ? (
								<X className="block h-6 w-6" />
							) : (
								<Menu className="block h-6 w-6" />
							)}
						</button>
					</div>
				</div>
			</div>

			{isMenuOpen && (
				<div className="sm:hidden">
					<div className="pt-2 pb-3 space-y-1">
						<MobileNavLink href="/" onClick={toggleMenu}>
							Home
						</MobileNavLink>
						<MobileNavLink href="/playground" onClick={toggleMenu}>
							Playgrounds
						</MobileNavLink>
						<MobileNavLink href="/#work" onClick={toggleMenu}>
							Work
						</MobileNavLink>
						<MobileNavLink href="/#contact" onClick={toggleMenu}>
							Contact
						</MobileNavLink>
					</div>
				</div>
			)}
		</nav>
	);
}

function NavLink({
	href,
	children,
}: {
	href: string;
	children: React.ReactNode;
}) {
	return (
		<Link
			href={href}
			className="text-slate-600 hover:text-purple-800 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
		>
			{children}
		</Link>
	);
}

function MobileNavLink({
	href,
	onClick,
	children,
}: {
	href: string;
	onClick: () => void;
	children: React.ReactNode;
}) {
	return (
		<Link
			href={href}
			onClick={onClick}
			className="text-slate-600 hover:text-purple-800 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
		>
			{children}
		</Link>
	);
}
