"use client";

import React from "react";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function CarouselShowcase() {
	const [activeVariant, setActiveVariant] = React.useState<
		"default" | "cards" | "images" | "custom"
	>("default");

	const variants = ["default", "cards", "images", "custom"] as const;

	const renderCarousel = () => {
		switch (activeVariant) {
			case "default":
				return (
					<Carousel className="w-full max-w-lg mx-auto">
						<CarouselContent>
							{Array.from({ length: 5 }).map((_, index) => (
								<CarouselItem key={index}>
									<div className="p-1">
										<div className="flex items-center justify-center p-6 h-40 bg-gray-100 rounded-lg">
											<span className="text-4xl font-semibold">
												{index + 1}
											</span>
										</div>
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious />
						<CarouselNext />
					</Carousel>
				);

			case "cards":
				return (
					<Carousel className="w-full max-w-lg mx-auto">
						<CarouselContent>
							{Array.from({ length: 5 }).map((_, index) => (
								<CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
									<div className="p-1">
										<Card>
											<CardContent className="flex aspect-square items-center justify-center p-6">
												<span className="text-4xl font-semibold">
													{index + 1}
												</span>
											</CardContent>
										</Card>
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious />
						<CarouselNext />
					</Carousel>
				);

			case "images":
				return (
					<Carousel className="w-full max-w-lg mx-auto">
						<CarouselContent>
							{[
								{ color: "bg-blue-500", emoji: "🌊" },
								{ color: "bg-green-500", emoji: "🌿" },
								{ color: "bg-yellow-500", emoji: "🌞" },
								{ color: "bg-red-500", emoji: "🌹" },
								{ color: "bg-purple-500", emoji: "🔮" },
							].map((item, index) => (
								<CarouselItem key={index}>
									<div className="p-1">
										<div
											className={`flex items-center justify-center p-6 h-56 ${item.color} rounded-lg`}
										>
											<span className="text-7xl">{item.emoji}</span>
										</div>
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious className="left-1" />
						<CarouselNext className="right-1" />
					</Carousel>
				);

			case "custom":
				return (
					<div className="space-y-4">
						<Carousel className="w-full max-w-lg mx-auto">
							<CarouselContent className="h-64">
								{[
									{
										title: "Feature 1",
										desc: "Description of feature 1",
										icon: "💡",
									},
									{
										title: "Feature 2",
										desc: "Description of feature 2",
										icon: "🚀",
									},
									{
										title: "Feature 3",
										desc: "Description of feature 3",
										icon: "🎯",
									},
									{
										title: "Feature 4",
										desc: "Description of feature 4",
										icon: "🔍",
									},
								].map((item, index) => (
									<CarouselItem key={index}>
										<div className="p-1 h-full">
											<div className="flex flex-col items-center justify-center p-6 h-full bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl shadow-md">
												<span className="text-5xl mb-4">{item.icon}</span>
												<h3 className="text-xl font-semibold text-blue-800">
													{item.title}
												</h3>
												<p className="text-blue-600 text-center mt-2">
													{item.desc}
												</p>
											</div>
										</div>
									</CarouselItem>
								))}
							</CarouselContent>
							<div className="flex justify-center gap-1 mt-4">
								{Array.from({ length: 4 }).map((_, index) => (
									<div
										key={index}
										className="h-2 w-10 rounded-full bg-blue-200 hover:bg-blue-400 cursor-pointer"
									/>
								))}
							</div>
						</Carousel>
					</div>
				);

			default:
				return null;
		}
	};

	return (
		<div className="space-y-8">
			<div className="space-y-4">
				<h3 className="text-lg font-medium">Carousel Variants</h3>
				<div className="flex flex-wrap gap-4">
					{variants.map((variant) => (
						<Button
							key={variant}
							variant={activeVariant === variant ? "default" : "outline"}
							onClick={() => setActiveVariant(variant)}
						>
							{variant.charAt(0).toUpperCase() + variant.slice(1)}
						</Button>
					))}
				</div>
			</div>

			<div className="p-6 border rounded-md">{renderCarousel()}</div>

			<div className="p-6 border rounded-md bg-gray-50">
				<h3 className="text-lg font-medium mb-4">Usage Code</h3>
				<pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto text-sm">
					{`<Carousel>
  <CarouselContent>
    <CarouselItem>...</CarouselItem>
    <CarouselItem>...</CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`}
				</pre>
			</div>
		</div>
	);
}
