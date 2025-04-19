"use client";

import React, { useState } from "react";
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function CardShowcase() {
	const [currentVariant, setCurrentVariant] = useState<
		"default" | "simple" | "interactive" | "horizontal" | "image"
	>("default");

	const variants = [
		"default",
		"simple",
		"interactive",
		"horizontal",
		"image",
	] as const;

	return (
		<div className="space-y-8">
			<div className="space-y-4">
				<h3 className="text-lg font-medium">Card Variants</h3>
				<div className="flex flex-wrap gap-4">
					{variants.map((variant) => (
						<Button
							key={variant}
							variant={currentVariant === variant ? "default" : "outline"}
							onClick={() => setCurrentVariant(variant)}
						>
							{variant.charAt(0).toUpperCase() + variant.slice(1)}
						</Button>
					))}
				</div>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{currentVariant === "default" && (
					<Card>
						<CardHeader>
							<CardTitle>Default Card</CardTitle>
							<CardDescription>
								A standard card layout with header, content, and footer
							</CardDescription>
						</CardHeader>
						<CardContent>
							<p>
								This is the basic card layout with a header containing a title
								and description, a content area, and a footer with actions.
							</p>
						</CardContent>
						<CardFooter className="flex justify-between">
							<Button variant="outline">Cancel</Button>
							<Button>Submit</Button>
						</CardFooter>
					</Card>
				)}

				{currentVariant === "simple" && (
					<Card className="p-6">
						<CardTitle className="mb-2">Simple Card</CardTitle>
						<p className="text-sm text-gray-500 mb-4">
							A minimalist card with just title and content
						</p>
						<p>
							This simple card layout can be used for basic information display
							without too much structure.
						</p>
					</Card>
				)}

				{currentVariant === "interactive" && (
					<Card className="transition-all hover:shadow-lg cursor-pointer">
						<CardHeader>
							<CardTitle>Interactive Card</CardTitle>
							<CardDescription>Hover to see the effect</CardDescription>
						</CardHeader>
						<CardContent>
							<p>
								This card has hover effects and appears clickable. Use for
								navigation or call-to-action elements.
							</p>
						</CardContent>
						<CardFooter className="border-t pt-4 mt-4">
							<Button className="w-full">Click me</Button>
						</CardFooter>
					</Card>
				)}

				{currentVariant === "horizontal" && (
					<Card className="flex flex-row overflow-hidden">
						<div className="bg-gray-200 w-1/3 flex items-center justify-center">
							<span className="text-4xl">🖼️</span>
						</div>
						<div className="w-2/3">
							<CardHeader>
								<CardTitle>Horizontal Card</CardTitle>
								<CardDescription>A card with horizontal layout</CardDescription>
							</CardHeader>
							<CardContent>
								<p>
									Ideal for media content alongside text, or for compact
									information display.
								</p>
							</CardContent>
						</div>
					</Card>
				)}

				{currentVariant === "image" && (
					<Card className="overflow-hidden">
						<div className="h-48 bg-gray-200 flex items-center justify-center">
							<span className="text-6xl">🏞️</span>
						</div>
						<CardHeader>
							<CardTitle>Image Card</CardTitle>
							<CardDescription>
								A card featuring an image at the top
							</CardDescription>
						</CardHeader>
						<CardContent>
							<p>
								Perfect for blog posts, products, or any content where an image
								is the focal point.
							</p>
						</CardContent>
						<CardFooter className="flex justify-between">
							<Button variant="outline">Share</Button>
							<Button>View</Button>
						</CardFooter>
					</Card>
				)}
			</div>

			<div className="border rounded-md p-6 bg-gray-50">
				<h3 className="text-lg font-medium mb-4">Usage Code</h3>
				<pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto text-sm">
					{`<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>`}
				</pre>
			</div>
		</div>
	);
}
