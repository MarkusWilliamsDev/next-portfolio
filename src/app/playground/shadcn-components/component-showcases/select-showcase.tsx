"use client";

import React, { useState } from "react";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export function SelectShowcase() {
	const [variant, setVariant] = useState<
		"basic" | "grouped" | "disabled" | "custom" | "form"
	>("basic");
	const [value, setValue] = useState("option1");

	const variants = ["basic", "grouped", "disabled", "custom", "form"] as const;

	const renderSelect = () => {
		switch (variant) {
			case "basic":
				return (
					<div className="space-y-8">
						<div className="space-y-4 max-w-xs">
							<h4 className="text-sm font-medium">Basic Select</h4>
							<Select
								defaultValue="option1"
								onValueChange={(value) => setValue(value)}
							>
								<SelectTrigger>
									<SelectValue placeholder="Select an option" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="option1">Option 1</SelectItem>
									<SelectItem value="option2">Option 2</SelectItem>
									<SelectItem value="option3">Option 3</SelectItem>
								</SelectContent>
							</Select>
							<p className="text-sm text-gray-500">Selected value: {value}</p>
						</div>

						<div className="space-y-4 max-w-xs">
							<h4 className="text-sm font-medium">With Placeholder</h4>
							<Select>
								<SelectTrigger>
									<SelectValue placeholder="Select a fruit" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="apple">Apple</SelectItem>
									<SelectItem value="banana">Banana</SelectItem>
									<SelectItem value="orange">Orange</SelectItem>
									<SelectItem value="pear">Pear</SelectItem>
								</SelectContent>
							</Select>
						</div>
					</div>
				);

			case "grouped":
				return (
					<div className="space-y-8">
						<div className="space-y-4 max-w-xs">
							<h4 className="text-sm font-medium">Grouped Select</h4>
							<Select>
								<SelectTrigger>
									<SelectValue placeholder="Select a vehicle" />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectLabel>Cars</SelectLabel>
										<SelectItem value="sedan">Sedan</SelectItem>
										<SelectItem value="suv">SUV</SelectItem>
										<SelectItem value="hatchback">Hatchback</SelectItem>
									</SelectGroup>
									<SelectGroup>
										<SelectLabel>Motorcycles</SelectLabel>
										<SelectItem value="sport">Sport</SelectItem>
										<SelectItem value="cruiser">Cruiser</SelectItem>
										<SelectItem value="touring">Touring</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>
						</div>

						<div className="space-y-4 max-w-xs">
							<h4 className="text-sm font-medium">Multiple Groups</h4>
							<Select>
								<SelectTrigger>
									<SelectValue placeholder="Select a country" />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectLabel>North America</SelectLabel>
										<SelectItem value="us">United States</SelectItem>
										<SelectItem value="ca">Canada</SelectItem>
										<SelectItem value="mx">Mexico</SelectItem>
									</SelectGroup>
									<SelectGroup>
										<SelectLabel>Europe</SelectLabel>
										<SelectItem value="uk">United Kingdom</SelectItem>
										<SelectItem value="fr">France</SelectItem>
										<SelectItem value="de">Germany</SelectItem>
									</SelectGroup>
									<SelectGroup>
										<SelectLabel>Asia</SelectLabel>
										<SelectItem value="jp">Japan</SelectItem>
										<SelectItem value="cn">China</SelectItem>
										<SelectItem value="in">India</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>
						</div>
					</div>
				);

			case "disabled":
				return (
					<div className="space-y-8">
						<div className="space-y-4 max-w-xs">
							<h4 className="text-sm font-medium">Disabled Select</h4>
							<Select disabled>
								<SelectTrigger>
									<SelectValue placeholder="Select an option" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="option1">Option 1</SelectItem>
									<SelectItem value="option2">Option 2</SelectItem>
									<SelectItem value="option3">Option 3</SelectItem>
								</SelectContent>
							</Select>
						</div>

						<div className="space-y-4 max-w-xs">
							<h4 className="text-sm font-medium">Disabled Items</h4>
							<Select>
								<SelectTrigger>
									<SelectValue placeholder="Select a fruit" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="apple">Apple</SelectItem>
									<SelectItem value="banana" disabled>
										Banana (Out of Stock)
									</SelectItem>
									<SelectItem value="orange">Orange</SelectItem>
									<SelectItem value="pear" disabled>
										Pear (Out of Stock)
									</SelectItem>
								</SelectContent>
							</Select>
						</div>
					</div>
				);

			case "custom":
				return (
					<div className="space-y-8">
						<div className="space-y-4 max-w-xs">
							<h4 className="text-sm font-medium">Custom Styled Select</h4>
							<Select>
								<SelectTrigger className="bg-indigo-50 border-indigo-200 text-indigo-700">
									<SelectValue placeholder="Select a theme" />
								</SelectTrigger>
								<SelectContent className="bg-indigo-50 border-indigo-200">
									<SelectItem
										value="light"
										className="text-indigo-700 focus:bg-indigo-100 focus:text-indigo-900"
									>
										Light
									</SelectItem>
									<SelectItem
										value="dark"
										className="text-indigo-700 focus:bg-indigo-100 focus:text-indigo-900"
									>
										Dark
									</SelectItem>
									<SelectItem
										value="system"
										className="text-indigo-700 focus:bg-indigo-100 focus:text-indigo-900"
									>
										System
									</SelectItem>
								</SelectContent>
							</Select>
						</div>

						<div className="space-y-4 max-w-xs">
							<h4 className="text-sm font-medium">With Icons</h4>
							<Select>
								<SelectTrigger>
									<SelectValue placeholder="Select social media" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="twitter" className="flex items-center">
										<div className="mr-2 h-4 w-4 rounded-full bg-blue-400"></div>
										Twitter
									</SelectItem>
									<SelectItem value="facebook" className="flex items-center">
										<div className="mr-2 h-4 w-4 rounded-full bg-blue-600"></div>
										Facebook
									</SelectItem>
									<SelectItem value="instagram" className="flex items-center">
										<div className="mr-2 h-4 w-4 rounded-full bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-500"></div>
										Instagram
									</SelectItem>
								</SelectContent>
							</Select>
						</div>
					</div>
				);

			case "form":
				return (
					<div className="space-y-4 max-w-md border p-6 rounded-lg">
						<h4 className="text-lg font-medium">User Settings Form</h4>
						<div className="grid gap-6">
							<div className="space-y-2">
								<label htmlFor="name" className="text-sm font-medium">
									Name
								</label>
								<input
									id="name"
									className="w-full px-3 py-2 border rounded-md"
									placeholder="Enter your name"
								/>
							</div>

							<div className="space-y-2">
								<label htmlFor="email" className="text-sm font-medium">
									Email
								</label>
								<input
									id="email"
									type="email"
									className="w-full px-3 py-2 border rounded-md"
									placeholder="Enter your email"
								/>
							</div>

							<div className="space-y-2">
								<label className="text-sm font-medium">Role</label>
								<Select>
									<SelectTrigger className="w-full">
										<SelectValue placeholder="Select a role" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="admin">Administrator</SelectItem>
										<SelectItem value="editor">Editor</SelectItem>
										<SelectItem value="viewer">Viewer</SelectItem>
									</SelectContent>
								</Select>
							</div>

							<div className="space-y-2">
								<label className="text-sm font-medium">Preferences</label>
								<Select>
									<SelectTrigger className="w-full">
										<SelectValue placeholder="Notification frequency" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="real-time">Real-time</SelectItem>
										<SelectItem value="daily">Daily digest</SelectItem>
										<SelectItem value="weekly">Weekly digest</SelectItem>
										<SelectItem value="none">None</SelectItem>
									</SelectContent>
								</Select>
							</div>

							<div className="pt-4">
								<Button className="w-full">Save Settings</Button>
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
				<h3 className="text-lg font-medium">Select Variants</h3>
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

			<div className="border rounded-md p-6">{renderSelect()}</div>

			<div className="border rounded-md p-6 bg-gray-50">
				<h3 className="text-lg font-medium mb-4">Usage Code</h3>
				<pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto text-sm">
					{`<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="item1">Item 1</SelectItem>
    <SelectItem value="item2">Item 2</SelectItem>
    <SelectItem value="item3">Item 3</SelectItem>
  </SelectContent>
</Select>`}
				</pre>
			</div>
		</div>
	);
}
