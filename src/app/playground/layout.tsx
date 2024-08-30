import { ReactNode } from "react";
import Navbar from "../components/Navbar";

type PlaygroundLayoutProps = {
	children: ReactNode;
};

const PlaygroundLayout = ({ children }: PlaygroundLayoutProps) => {
	return (
		<>
			<main>{children}</main>
		</>
	);
};

export default PlaygroundLayout;
