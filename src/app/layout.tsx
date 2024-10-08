import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Markus Williams Developer Portfolio",
	description:
		"Experienced full-stack developer specializing in modern web technologies. Explore my projects showcasing expertise in React, Next.js, Sitecore, and other innovative solutions for complex development challenges",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="bg-gray-50/75">
			<body className={inter.className}>
				<Navbar />
				<main>{children}</main>
			</body>
		</html>
	);
}
