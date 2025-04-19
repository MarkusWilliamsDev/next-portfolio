"use client";

import React, { useState } from "react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	DialogFooter,
	DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function DialogShowcase() {
	const [variant, setVariant] = useState<"basic" | "form" | "alert" | "custom">(
		"basic"
	);

	const variants = ["basic", "form", "alert", "custom"] as const;

	const renderDialogContent = () => {
		switch (variant) {
			case "basic":
				return (
					<>
						<DialogHeader>
							<DialogTitle>Basic Dialog</DialogTitle>
							<DialogDescription>
								This is a simple dialog with a title, description, and a close
								button.
							</DialogDescription>
						</DialogHeader>
						<div className="py-4">
							This dialog demonstrates the basic structure of a dialog component
							in shadcn/ui. It consists of a header with a title and
							description, content area, and a footer.
						</div>
						<DialogFooter>
							<DialogClose asChild>
								<Button type="button" variant="outline">
									Cancel
								</Button>
							</DialogClose>
							<DialogClose asChild>
								<Button type="button">Save Changes</Button>
							</DialogClose>
						</DialogFooter>
					</>
				);

			case "form":
				return (
					<>
						<DialogHeader>
							<DialogTitle>Edit Profile</DialogTitle>
							<DialogDescription>
								Make changes to your profile here. Click save when you're done.
							</DialogDescription>
						</DialogHeader>
						<div className="py-4 space-y-4">
							<div className="grid grid-cols-4 items-center gap-4">
								<label htmlFor="name" className="text-right">
									Name
								</label>
								<input
									id="name"
									className="col-span-3 px-3 py-2 border rounded-md"
									placeholder="Enter your name"
								/>
							</div>
							<div className="grid grid-cols-4 items-center gap-4">
								<label htmlFor="email" className="text-right">
									Email
								</label>
								<input
									id="email"
									type="email"
									className="col-span-3 px-3 py-2 border rounded-md"
									placeholder="Enter your email"
								/>
							</div>
						</div>
						<DialogFooter>
							<DialogClose asChild>
								<Button type="button" variant="outline">
									Cancel
								</Button>
							</DialogClose>
							<DialogClose asChild>
								<Button type="button">Save Changes</Button>
							</DialogClose>
						</DialogFooter>
					</>
				);

			case "alert":
				return (
					<>
						<DialogHeader>
							<DialogTitle className="text-red-600">
								Delete Confirmation
							</DialogTitle>
							<DialogDescription>
								Are you sure you want to delete this item? This action cannot be
								undone.
							</DialogDescription>
						</DialogHeader>
						<div className="py-4">
							<p className="text-gray-500">
								This item will be permanently deleted from our servers. All
								associated data will also be removed.
							</p>
						</div>
						<DialogFooter>
							<DialogClose asChild>
								<Button type="button" variant="outline">
									Cancel
								</Button>
							</DialogClose>
							<DialogClose asChild>
								<Button type="button" variant="destructive">
									Delete
								</Button>
							</DialogClose>
						</DialogFooter>
					</>
				);

			case "custom":
				return (
					<>
						<div className="p-6 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-t-lg">
							<DialogHeader className="text-center">
								<DialogTitle className="text-2xl font-bold text-indigo-800">
									Premium Subscription
								</DialogTitle>
								<DialogDescription className="text-indigo-600 font-medium">
									Upgrade to our premium plan to unlock all features.
								</DialogDescription>
							</DialogHeader>
						</div>
						<div className="p-6 space-y-4">
							<div className="flex items-center space-x-3">
								<div className="bg-green-100 p-1 rounded-full">
									<svg
										className="h-5 w-5 text-green-600"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M5 13l4 4L19 7"
										/>
									</svg>
								</div>
								<span>Unlimited projects</span>
							</div>
							<div className="flex items-center space-x-3">
								<div className="bg-green-100 p-1 rounded-full">
									<svg
										className="h-5 w-5 text-green-600"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M5 13l4 4L19 7"
										/>
									</svg>
								</div>
								<span>Priority support</span>
							</div>
							<div className="flex items-center space-x-3">
								<div className="bg-green-100 p-1 rounded-full">
									<svg
										className="h-5 w-5 text-green-600"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M5 13l4 4L19 7"
										/>
									</svg>
								</div>
								<span>Custom domain</span>
							</div>
						</div>
						<DialogFooter className="p-6 bg-gray-50 border-t rounded-b-lg">
							<DialogClose asChild>
								<Button type="button" variant="outline">
									Maybe Later
								</Button>
							</DialogClose>
							<DialogClose asChild>
								<Button
									type="button"
									className="bg-indigo-600 hover:bg-indigo-700"
								>
									Upgrade Now
								</Button>
							</DialogClose>
						</DialogFooter>
					</>
				);

			default:
				return null;
		}
	};

	return (
		<div className="space-y-8">
			<div className="space-y-4">
				<h3 className="text-lg font-medium">Dialog Variants</h3>
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

			<div className="border rounded-md p-6 flex justify-center">
				<Dialog>
					<DialogTrigger asChild>
						<Button variant="outline">Open {variant} Dialog</Button>
					</DialogTrigger>
					<DialogContent>{renderDialogContent()}</DialogContent>
				</Dialog>
			</div>

			<div className="border rounded-md p-6 bg-gray-50">
				<h3 className="text-lg font-medium mb-4">Usage Code</h3>
				<pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto text-sm">
					{`<Dialog>
  <DialogTrigger>Open Dialog</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogDescription>
        Dialog description goes here.
      </DialogDescription>
    </DialogHeader>
    <div>
      Dialog content
    </div>
    <DialogFooter>
      <DialogClose asChild>
        <Button variant="outline">Cancel</Button>
      </DialogClose>
      <DialogClose asChild>
        <Button>Save</Button>
      </DialogClose>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
				</pre>
			</div>
		</div>
	);
}
