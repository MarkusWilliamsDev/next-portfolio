import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Playground from "./components/Playground";

export default function Home() {
	return (
		<main>
			<Hero />
			<Skills />
			<Work />
			<Playground />
			<Contact />
		</main>
	);
}

