"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";

export function ButtonShowcase() {
	const [currentVariant, setCurrentVariant] = useState<
		"default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
	>("default");
	const [currentSize, setCurrentSize] = useState<
		"default" | "sm" | "lg" | "icon"
	>("default");

	const variants = [
		"default",
		"destructive",
		"outline",
		"secondary",
		"ghost",
		"link",
	] as const;
	const sizes = ["default", "sm", "lg", "icon"] as const;

	return (
		<div className="space-y-8">
			<div className="space-y-4">
				<h3 className="text-lg font-medium">Button Variants</h3>
				<div className="flex flex-wrap gap-4">
					{variants.map((variant) => (
						<Button
							key={variant}
							variant={variant}
							onClick={() => setCurrentVariant(variant)}
							className={
								currentVariant === variant
									? "ring-2 ring-offset-2 ring-blue-500"
									: ""
							}
						>
							{variant.charAt(0).toUpperCase() + variant.slice(1)}
						</Button>
					))}
				</div>
			</div>

			<div className="space-y-4">
				<h3 className="text-lg font-medium">Button Sizes</h3>
				<div className="flex flex-wrap gap-4 items-center">
					{sizes.map((size) => (
						<Button
							key={size}
							size={size}
							variant={currentVariant}
							onClick={() => setCurrentSize(size)}
							className={
								currentSize === size ? "ring-2 ring-offset-2 ring-blue-500" : ""
							}
						>
							{size === "icon"
								? "🔍"
								: size.charAt(0).toUpperCase() + size.slice(1)}
						</Button>
					))}
				</div>
			</div>

			<div className="space-y-4">
				<h3 className="text-lg font-medium">Current Selection</h3>
				<div className="p-6 border rounded-md bg-gray-50">
					<p className="text-sm text-gray-500 mb-4">
						Variant:{" "}
						<span className="font-medium text-gray-700">{currentVariant}</span>,
						Size:{" "}
						<span className="font-medium text-gray-700">{currentSize}</span>
					</p>
					<Button variant={currentVariant} size={currentSize}>
						{currentSize === "icon" ? "🔍" : "Example Button"}
					</Button>
				</div>
			</div>

			<div className="space-y-4">
				<h3 className="text-lg font-medium">With Icon</h3>
				<div className="flex flex-wrap gap-4">
					<Button variant={currentVariant} size={currentSize}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="mr-2"
						>
							<path d="M5 12h14" />
							<path d="m12 5 7 7-7 7" />
						</svg>
						With Icon
					</Button>

					<Button variant={currentVariant} size={currentSize}>
						Download
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="ml-2"
						>
							<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
							<polyline points="7 10 12 15 17 10" />
							<line x1="12" x2="12" y1="15" y2="3" />
						</svg>
					</Button>
				</div>
			</div>

			<div className="space-y-4">
				<h3 className="text-lg font-medium">Loading State</h3>
				<Button variant={currentVariant} size={currentSize} disabled>
					<svg
						className="mr-2 h-4 w-4 animate-spin"
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path d="M21 12a9 9 0 1 1-6.219-8.56" />
					</svg>
					Please wait
				</Button>
			</div>

			<div className="border rounded-md p-6 bg-gray-50">
				<h3 className="text-lg font-medium mb-4">Usage Code</h3>
				<pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto text-sm">
					{`// Import the button component
import { Button } from "@/components/ui/button"

// Basic button
<Button>Click me</Button>

// With variant and size
<Button variant="${currentVariant}" size="${currentSize}">
  ${currentSize === "icon" ? "🔍" : "Click me"}
</Button>

// With icon
<Button variant="${currentVariant}">
  <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
  With Icon
</Button>`}
				</pre>
			</div>
		</div>
	);
}
