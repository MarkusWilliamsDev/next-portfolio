import { ReactNode } from "react";
import Navbar from "../components/Navbar";

type PlaygroundLayoutProps = {
	children: ReactNode;
};

const PlaygroundLayout = ({ children }: PlaygroundLayoutProps) => {
	return (
		<div className="min-h-screen bg-gray-50/75">
			<main>{children}</main>
		</div>
	);
};

export default PlaygroundLayout;
