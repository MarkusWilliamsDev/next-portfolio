"use client";

import React, { useState } from "react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export function AccordionShowcase() {
	const [variant, setVariant] = useState<
		"default" | "bordered" | "custom" | "nested"
	>("default");

	const variants = ["default", "bordered", "custom", "nested"] as const;

	const renderAccordion = () => {
		switch (variant) {
			case "default":
				return (
					<Accordion type="single" collapsible className="w-full">
						<AccordionItem value="item-1">
							<AccordionTrigger>Is it accessible?</AccordionTrigger>
							<AccordionContent>
								Yes. It adheres to the WAI-ARIA design pattern.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="item-2">
							<AccordionTrigger>Is it styled?</AccordionTrigger>
							<AccordionContent>
								Yes. It comes with default styles that match the other
								components.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="item-3">
							<AccordionTrigger>Is it animated?</AccordionTrigger>
							<AccordionContent>
								Yes. It's animated by default, but you can disable it if you
								prefer.
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				);

			case "bordered":
				return (
					<Accordion type="single" collapsible className="w-full">
						<AccordionItem value="item-1" className="border rounded-lg mb-2">
							<AccordionTrigger className="px-4">Section One</AccordionTrigger>
							<AccordionContent className="px-4 pb-2">
								This is the content for section one.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="item-2" className="border rounded-lg mb-2">
							<AccordionTrigger className="px-4">Section Two</AccordionTrigger>
							<AccordionContent className="px-4 pb-2">
								This is the content for section two.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="item-3" className="border rounded-lg">
							<AccordionTrigger className="px-4">
								Section Three
							</AccordionTrigger>
							<AccordionContent className="px-4 pb-2">
								This is the content for section three.
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				);

			case "custom":
				return (
					<Accordion type="single" collapsible className="w-full">
						<AccordionItem
							value="item-1"
							className="mb-2 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg"
						>
							<AccordionTrigger className="px-4 py-3 text-indigo-800 font-medium">
								Customized Style
							</AccordionTrigger>
							<AccordionContent className="px-4 pb-3 text-indigo-700">
								This accordion has custom gradient backgrounds and typography.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem
							value="item-2"
							className="mb-2 bg-gradient-to-r from-pink-100 to-rose-100 rounded-lg"
						>
							<AccordionTrigger className="px-4 py-3 text-rose-800 font-medium">
								Colorful Variant
							</AccordionTrigger>
							<AccordionContent className="px-4 pb-3 text-rose-700">
								Each accordion item can have its own style and colors.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem
							value="item-3"
							className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg"
						>
							<AccordionTrigger className="px-4 py-3 text-amber-800 font-medium">
								Fully Customizable
							</AccordionTrigger>
							<AccordionContent className="px-4 pb-3 text-amber-700">
								You can customize these accordions to match your brand's visual
								identity.
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				);

			case "nested":
				return (
					<Accordion type="single" collapsible className="w-full">
						<AccordionItem value="item-1">
							<AccordionTrigger>Main Category 1</AccordionTrigger>
							<AccordionContent>
								<Accordion type="single" collapsible className="w-full">
									<AccordionItem value="nested-1" className="border-b-0">
										<AccordionTrigger>Subcategory 1.1</AccordionTrigger>
										<AccordionContent>
											Content for subcategory 1.1.
										</AccordionContent>
									</AccordionItem>
									<AccordionItem value="nested-2" className="border-b-0">
										<AccordionTrigger>Subcategory 1.2</AccordionTrigger>
										<AccordionContent>
											Content for subcategory 1.2.
										</AccordionContent>
									</AccordionItem>
								</Accordion>
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="item-2">
							<AccordionTrigger>Main Category 2</AccordionTrigger>
							<AccordionContent>
								<Accordion type="single" collapsible className="w-full">
									<AccordionItem value="nested-3" className="border-b-0">
										<AccordionTrigger>Subcategory 2.1</AccordionTrigger>
										<AccordionContent>
											Content for subcategory 2.1.
										</AccordionContent>
									</AccordionItem>
								</Accordion>
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				);

			default:
				return null;
		}
	};

	return (
		<div className="space-y-8">
			<div className="space-y-4">
				<h3 className="text-lg font-medium">Accordion Variants</h3>
				<div className="flex flex-wrap gap-4">
					{variants.map((v) => (
						<Button
							key={v}
							variant={variant === v ? "default" : "outline"}
							onClick={() => setVariant(v)}
						>
							{v.charAt(0).toUpperCase() + v.slice(1)}
						</Button>
					))}
				</div>
			</div>

			<div className="border rounded-md p-6">{renderAccordion()}</div>

			<div className="border rounded-md p-6 bg-gray-50">
				<h3 className="text-lg font-medium mb-4">Usage Code</h3>
				<pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto text-sm">
					{`<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Section Title</AccordionTrigger>
    <AccordionContent>
      Section content goes here
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
				</pre>
			</div>
		</div>
	);
}
