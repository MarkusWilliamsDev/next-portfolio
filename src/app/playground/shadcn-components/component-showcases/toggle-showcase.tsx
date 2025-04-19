"use client";

import React, { useState } from "react";
import { Toggle } from "@/components/ui/toggle";
import { Button } from "@/components/ui/button";

export function ToggleShowcase() {
	const [variant, setVariant] = useState<
		"default" | "outline" | "withIcon" | "sizes" | "group"
	>("default");

	const variants = [
		"default",
		"outline",
		"withIcon",
		"sizes",
		"group",
	] as const;

	const renderToggle = () => {
		switch (variant) {
			case "default":
				return (
					<div className="flex flex-col gap-8">
						<div className="space-y-4">
							<h4 className="text-sm font-medium">Standard Toggle</h4>
							<div className="flex gap-4">
								<Toggle>Toggle</Toggle>
								<Toggle defaultPressed>Pressed</Toggle>
								<Toggle disabled>Disabled</Toggle>
								<Toggle disabled defaultPressed>
									Disabled & Pressed
								</Toggle>
							</div>
						</div>

						<div className="space-y-4">
							<h4 className="text-sm font-medium">Custom Colors</h4>
							<div className="flex gap-4">
								<Toggle className="bg-blue-50 text-blue-600 hover:bg-blue-100 data-[state=on]:bg-blue-200">
									Blue
								</Toggle>
								<Toggle className="bg-green-50 text-green-600 hover:bg-green-100 data-[state=on]:bg-green-200">
									Green
								</Toggle>
								<Toggle className="bg-purple-50 text-purple-600 hover:bg-purple-100 data-[state=on]:bg-purple-200">
									Purple
								</Toggle>
								<Toggle className="bg-amber-50 text-amber-600 hover:bg-amber-100 data-[state=on]:bg-amber-200">
									Amber
								</Toggle>
							</div>
						</div>
					</div>
				);

			case "outline":
				return (
					<div className="flex flex-col gap-8">
						<div className="space-y-4">
							<h4 className="text-sm font-medium">Outlined Toggle</h4>
							<div className="flex gap-4">
								<Toggle variant="outline">Toggle</Toggle>
								<Toggle variant="outline" defaultPressed>
									Pressed
								</Toggle>
								<Toggle variant="outline" disabled>
									Disabled
								</Toggle>
								<Toggle variant="outline" disabled defaultPressed>
									Disabled & Pressed
								</Toggle>
							</div>
						</div>

						<div className="space-y-4">
							<h4 className="text-sm font-medium">Custom Outline Colors</h4>
							<div className="flex gap-4">
								<Toggle
									variant="outline"
									className="border-blue-200 text-blue-600 hover:bg-blue-100 data-[state=on]:bg-blue-200 data-[state=on]:text-blue-900"
								>
									Blue
								</Toggle>
								<Toggle
									variant="outline"
									className="border-red-200 text-red-600 hover:bg-red-100 data-[state=on]:bg-red-200 data-[state=on]:text-red-900"
								>
									Red
								</Toggle>
								<Toggle
									variant="outline"
									className="border-emerald-200 text-emerald-600 hover:bg-emerald-100 data-[state=on]:bg-emerald-200 data-[state=on]:text-emerald-900"
								>
									Emerald
								</Toggle>
							</div>
						</div>
					</div>
				);

			case "withIcon":
				return (
					<div className="flex flex-col gap-8">
						<div className="space-y-4">
							<h4 className="text-sm font-medium">Toggle with Icons</h4>
							<div className="flex gap-4">
								<Toggle aria-label="Bold text">
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
									>
										<path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>
										<path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>
									</svg>
								</Toggle>

								<Toggle aria-label="Italic text">
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
									>
										<path d="M19 4h-9"></path>
										<path d="M14 20H5"></path>
										<path d="M15 4L9 20"></path>
									</svg>
								</Toggle>

								<Toggle aria-label="Underline text">
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
									>
										<path d="M6 4v6a6 6 0 0 0 12 0V4"></path>
										<path d="M4 20h16"></path>
									</svg>
								</Toggle>
							</div>
						</div>

						<div className="space-y-4">
							<h4 className="text-sm font-medium">Icon with Text</h4>
							<div className="flex gap-4">
								<Toggle>
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
										<path d="m15 15-6 6" />
										<path d="m21 15-6 6" />
										<path d="M15 3v18" />
										<path d="M9 3v6" />
										<path d="M3 3v6" />
										<path d="M3 9h6" />
									</svg>
									Wifi
								</Toggle>

								<Toggle>
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
										<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
										<path d="M13.73 21a2 2 0 0 1-3.46 0" />
									</svg>
									Notifications
								</Toggle>
							</div>
						</div>
					</div>
				);

			case "sizes":
				return (
					<div className="flex flex-col gap-8">
						<div className="space-y-4">
							<h4 className="text-sm font-medium">Toggle Sizes</h4>
							<div className="flex items-center gap-4">
								<Toggle size="sm">Small</Toggle>
								<Toggle size="default">Default</Toggle>
								<Toggle size="lg">Large</Toggle>
							</div>
						</div>

						<div className="space-y-4">
							<h4 className="text-sm font-medium">Icon Sizes</h4>
							<div className="flex items-center gap-4">
								<Toggle size="sm" aria-label="Small icon">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="12"
										height="12"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<circle cx="12" cy="12" r="10" />
										<line x1="12" x2="12" y1="8" y2="16" />
										<line x1="8" x2="16" y1="12" y2="12" />
									</svg>
								</Toggle>

								<Toggle aria-label="Default icon">
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
									>
										<circle cx="12" cy="12" r="10" />
										<line x1="12" x2="12" y1="8" y2="16" />
										<line x1="8" x2="16" y1="12" y2="12" />
									</svg>
								</Toggle>

								<Toggle size="lg" aria-label="Large icon">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<circle cx="12" cy="12" r="10" />
										<line x1="12" x2="12" y1="8" y2="16" />
										<line x1="8" x2="16" y1="12" y2="12" />
									</svg>
								</Toggle>
							</div>
						</div>
					</div>
				);

			case "group":
				return (
					<div className="space-y-8">
						<div className="space-y-4">
							<h4 className="text-sm font-medium">
								Toggle Group (Single Selection)
							</h4>
							<div className="inline-flex rounded-md border shadow-sm">
								<Toggle
									className="rounded-l-md rounded-r-none border-r"
									defaultPressed
								>
									Left
								</Toggle>
								<Toggle className="rounded-none border-r">Center</Toggle>
								<Toggle className="rounded-r-md rounded-l-none">Right</Toggle>
							</div>
						</div>

						<div className="space-y-4">
							<h4 className="text-sm font-medium">Icon Toggle Group</h4>
							<div className="inline-flex rounded-md border shadow-sm">
								<Toggle
									className="rounded-l-md rounded-r-none border-r"
									aria-label="Align left"
								>
									<svg
										width="15"
										height="15"
										viewBox="0 0 15 15"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M2 4.5C2 4.22386 2.22386 4 2.5 4H12.5C12.7761 4 13 4.22386 13 4.5C13 4.77614 12.7761 5 12.5 5H2.5C2.22386 5 2 4.77614 2 4.5ZM2 7.5C2 7.22386 2.22386 7 2.5 7H7.5C7.77614 7 8 7.22386 8 7.5C8 7.77614 7.77614 8 7.5 8H2.5C2.22386 8 2 7.77614 2 7.5ZM2 10.5C2 10.2239 2.22386 10 2.5 10H10.5C10.7761 10 11 10.2239 11 10.5C11 10.7761 10.7761 11 10.5 11H2.5C2.22386 11 2 10.7761 2 10.5Z"
											fill="currentColor"
											fillRule="evenodd"
											clipRule="evenodd"
										/>
									</svg>
								</Toggle>
								<Toggle
									className="rounded-none border-r"
									aria-label="Align center"
								>
									<svg
										width="15"
										height="15"
										viewBox="0 0 15 15"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M2 4.5C2 4.22386 2.22386 4 2.5 4H12.5C12.7761 4 13 4.22386 13 4.5C13 4.77614 12.7761 5 12.5 5H2.5C2.22386 5 2 4.77614 2 4.5ZM4 7.5C4 7.22386 4.22386 7 4.5 7H10.5C10.7761 7 11 7.22386 11 7.5C11 7.77614 10.7761 8 10.5 8H4.5C4.22386 8 4 7.77614 4 7.5ZM3 10.5C3 10.2239 3.22386 10 3.5 10H11.5C11.7761 10 12 10.2239 12 10.5C12 10.7761 11.7761 11 11.5 11H3.5C3.22386 11 3 10.7761 3 10.5Z"
											fill="currentColor"
											fillRule="evenodd"
											clipRule="evenodd"
										/>
									</svg>
								</Toggle>
								<Toggle
									className="rounded-r-md rounded-l-none"
									aria-label="Align right"
								>
									<svg
										width="15"
										height="15"
										viewBox="0 0 15 15"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M2 4.5C2 4.22386 2.22386 4 2.5 4H12.5C12.7761 4 13 4.22386 13 4.5C13 4.77614 12.7761 5 12.5 5H2.5C2.22386 5 2 4.77614 2 4.5ZM7 7.5C7 7.22386 7.22386 7 7.5 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H7.5C7.22386 8 7 7.77614 7 7.5ZM4 10.5C4 10.2239 4.22386 10 4.5 10H12.5C12.7761 10 13 10.2239 13 10.5C13 10.7761 12.7761 11 12.5 11H4.5C4.22386 11 4 10.7761 4 10.5Z"
											fill="currentColor"
											fillRule="evenodd"
											clipRule="evenodd"
										/>
									</svg>
								</Toggle>
							</div>
						</div>
					</div>
				);

			default:
				return null;
		}
	};

	return (
		<div className="space-y-8">
			<div className="space-y-4">
				<h3 className="text-lg font-medium">Toggle Variants</h3>
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

			<div className="border rounded-md p-6">{renderToggle()}</div>

			<div className="border rounded-md p-6 bg-gray-50">
				<h3 className="text-lg font-medium mb-4">Usage Code</h3>
				<pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto text-sm">
					{`<Toggle>
  Feature
</Toggle>

<Toggle variant="outline">
  Feature
</Toggle>

<Toggle size="sm">
  Small
</Toggle>`}
				</pre>
			</div>
		</div>
	);
}
