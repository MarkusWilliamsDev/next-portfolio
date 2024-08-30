import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Markus Williams Developer Portfolio",
	description: "tbd",
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
