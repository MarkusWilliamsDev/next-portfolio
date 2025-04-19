"use client";

import React from "react";
import PlaygroundLayout from "../PlaygroundLayout";

// Import components
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ButtonShowcase } from "./component-showcases/button-showcase";
import { CardShowcase } from "./component-showcases/card-showcase";
import { AccordionShowcase } from "./component-showcases/accordion-showcase";
import { CarouselShowcase } from "./component-showcases/carousel-showcase";
import { DialogShowcase } from "./component-showcases/dialog-showcase";
import { SliderShowcase } from "./component-showcases/slider-showcase";
import { ToggleShowcase } from "./component-showcases/toggle-showcase";
import { SelectShowcase } from "./component-showcases/select-showcase";

const title = "Shadcn Component Library";
const description =
	"A showcase of various Shadcn UI components with different variants and styling options.";

export default function ShadcnComponentsPage() {
	return (
		<PlaygroundLayout
			title={title}
			description={description}
			blogContent={<BlogContent />}
		>
			<div className="w-full">
				<Tabs defaultValue="about" className="w-full">
					<TabsList className="grid grid-cols-3 md:grid-cols-9 mb-8">
						<TabsTrigger value="about">About</TabsTrigger>
						<TabsTrigger value="buttons">Buttons</TabsTrigger>
						<TabsTrigger value="cards">Cards</TabsTrigger>
						<TabsTrigger value="accordions">Accordions</TabsTrigger>
						<TabsTrigger value="carousels">Carousels</TabsTrigger>
						<TabsTrigger value="dialogs">Dialogs</TabsTrigger>
						<TabsTrigger value="sliders">Sliders</TabsTrigger>
						<TabsTrigger value="toggles">Toggles</TabsTrigger>
						<TabsTrigger value="selects">Selects</TabsTrigger>
					</TabsList>

					<TabsContent value="about" className="space-y-6">
						<div className="p-6 border rounded-lg bg-white">
							<div className="space-y-6">
								<section>
									<h3 className="text-2xl font-semibold mb-3">
										About Shadcn UI
									</h3>
									<p className="text-gray-700">
										Shadcn UI is a collection of reusable components built using
										Radix UI and Tailwind CSS. It's not a traditional component
										library but rather a collection of re-usable components that
										you can copy and paste into your apps.
									</p>
									<p className="mt-2 text-gray-700">
										The components are designed to be accessible, customizable,
										and type-safe, making them perfect for React applications.
									</p>
								</section>

								<section>
									<h3 className="text-xl font-semibold mb-2">
										Component Customization
									</h3>
									<p className="text-gray-700">
										One of the major strengths of Shadcn UI is its customization
										options. Each component can be styled to match your brand
										identity simply by modifying the Tailwind classes.
									</p>
									<p className="mt-2 text-gray-700">
										In this playground, you can explore various components with
										different variants and styling options to showcase the
										flexibility of the library.
									</p>
								</section>

								<section>
									<h3 className="text-xl font-semibold mb-2">
										How To Use This Playground
									</h3>
									<p className="text-gray-700">
										Use the tabs above to navigate between different component
										showcases. Each showcase lets you:
									</p>
									<ul className="list-disc list-inside mt-2 text-gray-700 ml-4 space-y-1">
										<li>View different variants of each component</li>
										<li>
											See the components in action with interactive examples
										</li>
										<li>
											Find usage code snippets to implement in your own projects
										</li>
										<li>Explore customization options for each component</li>
									</ul>
								</section>

								<section>
									<h3 className="text-xl font-semibold mb-2">Resources</h3>
									<p className="text-gray-700">
										To learn more about Shadcn UI and how to customize these
										components further, check out the following resources:
									</p>
									<ul className="list-disc list-inside mt-2 ml-4 space-y-2">
										<li>
											<a
												href="https://ui.shadcn.com"
												className="text-blue-600 hover:underline"
												target="_blank"
												rel="noreferrer"
											>
												Shadcn UI Documentation
											</a>
										</li>
										<li>
											<a
												href="https://tailwindcss.com"
												className="text-blue-600 hover:underline"
												target="_blank"
												rel="noreferrer"
											>
												Tailwind CSS Documentation
											</a>
										</li>
										<li>
											<a
												href="https://www.radix-ui.com"
												className="text-blue-600 hover:underline"
												target="_blank"
												rel="noreferrer"
											>
												Radix UI Documentation
											</a>
										</li>
									</ul>
								</section>
							</div>
						</div>
					</TabsContent>

					<TabsContent value="buttons" className="space-y-4">
						<ButtonShowcase />
					</TabsContent>
					<TabsContent value="cards" className="space-y-4">
						<CardShowcase />
					</TabsContent>
					<TabsContent value="accordions" className="space-y-4">
						<AccordionShowcase />
					</TabsContent>
					<TabsContent value="carousels" className="space-y-4">
						<CarouselShowcase />
					</TabsContent>
					<TabsContent value="dialogs" className="space-y-4">
						<DialogShowcase />
					</TabsContent>
					<TabsContent value="sliders" className="space-y-4">
						<SliderShowcase />
					</TabsContent>
					<TabsContent value="toggles" className="space-y-4">
						<ToggleShowcase />
					</TabsContent>
					<TabsContent value="selects" className="space-y-4">
						<SelectShowcase />
					</TabsContent>
				</Tabs>
			</div>
		</PlaygroundLayout>
	);
}

const BlogContent = () => (
	<div className="space-y-6">
		<section>
			<h3 className="text-xl font-semibold mb-2">Implementation Details</h3>
			<p>
				Each component showcased here has been implemented with multiple
				variants. For example, buttons come in different styles (default,
				outline, destructive, etc.) and sizes.
			</p>
			<p className="mt-2">
				The tab interface allows for easy navigation between different component
				types, making it simple to explore the various options available.
			</p>
		</section>

		<section>
			<h3 className="text-xl font-semibold mb-2">When to Use Shadcn UI</h3>
			<p>Shadcn UI is ideal for projects where you need:</p>
			<ul className="list-disc list-inside mt-2 ml-4">
				<li>High quality, accessible components</li>
				<li>Flexibility and customization options</li>
				<li>
					Components that integrate seamlessly with Next.js and Tailwind CSS
				</li>
				<li>Full control over your component implementation</li>
			</ul>
		</section>

		<section>
			<h3 className="text-xl font-semibold mb-2">Installation</h3>
			<p>To add Shadcn UI to your project, you can use their CLI:</p>
			<pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto text-sm mt-2">
				{`npx shadcn@latest init`}
			</pre>
			<p className="mt-2">Then add individual components as needed:</p>
			<pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto text-sm mt-2">
				{`npx shadcn@latest add button card tabs`}
			</pre>
		</section>
	</div>
);
