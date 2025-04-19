"use client";

import React, { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function SliderShowcase() {
	const [variant, setVariant] = useState<
		"default" | "range" | "steps" | "colors" | "vertical"
	>("default");
	const [sliderValue, setSliderValue] = useState<number[]>([50]);
	const [rangeValue, setRangeValue] = useState<number[]>([25, 75]);

	const variants = ["default", "range", "steps", "colors", "vertical"] as const;

	const renderSlider = () => {
		switch (variant) {
			case "default":
				return (
					<div className="space-y-10">
						<div className="space-y-2">
							<h4 className="text-sm font-medium">Default Slider</h4>
							<p className="text-sm text-gray-500">Value: {sliderValue}</p>
							<Slider
								value={sliderValue}
								onValueChange={setSliderValue}
								max={100}
								step={1}
								className="w-full"
							/>
						</div>
						<div className="space-y-2">
							<h4 className="text-sm font-medium">With Labels</h4>
							<div className="flex justify-between">
								<span className="text-xs text-gray-500">0%</span>
								<span className="text-xs text-gray-500">50%</span>
								<span className="text-xs text-gray-500">100%</span>
							</div>
							<Slider
								value={sliderValue}
								onValueChange={setSliderValue}
								max={100}
								step={1}
								className="w-full"
							/>
						</div>
					</div>
				);

			case "range":
				return (
					<div className="space-y-10">
						<div className="space-y-2">
							<h4 className="text-sm font-medium">Range Slider</h4>
							<p className="text-sm text-gray-500">
								Range: {rangeValue[0]} - {rangeValue[1]}
							</p>
							<Slider
								value={rangeValue}
								onValueChange={setRangeValue}
								max={100}
								step={1}
								className="w-full"
							/>
						</div>
						<div className="space-y-2">
							<h4 className="text-sm font-medium">Price Range</h4>
							<p className="text-sm text-gray-500">
								Price: ${rangeValue[0]} - ${rangeValue[1]}
							</p>
							<div className="flex justify-between mb-1">
								<span className="text-xs text-gray-500">$0</span>
								<span className="text-xs text-gray-500">$100</span>
							</div>
							<Slider
								value={rangeValue}
								onValueChange={setRangeValue}
								max={100}
								step={1}
								className="w-full"
							/>
						</div>
					</div>
				);

			case "steps":
				return (
					<div className="space-y-10">
						<div className="space-y-2">
							<h4 className="text-sm font-medium">Stepped Slider (5)</h4>
							<p className="text-sm text-gray-500">Value: {sliderValue}</p>
							<Slider
								value={sliderValue}
								onValueChange={setSliderValue}
								max={100}
								step={5}
								className="w-full"
							/>
							<div className="flex justify-between">
								<span className="text-xs text-gray-500">0</span>
								<span className="text-xs text-gray-500">20</span>
								<span className="text-xs text-gray-500">40</span>
								<span className="text-xs text-gray-500">60</span>
								<span className="text-xs text-gray-500">80</span>
								<span className="text-xs text-gray-500">100</span>
							</div>
						</div>
						<div className="space-y-2">
							<h4 className="text-sm font-medium">Stepped Slider (25)</h4>
							<p className="text-sm text-gray-500">
								Value: {Math.round(sliderValue[0] / 25) * 25}
							</p>
							<Slider
								value={sliderValue}
								onValueChange={setSliderValue}
								max={100}
								step={25}
								className="w-full"
							/>
							<div className="flex justify-between">
								<span className="text-xs text-gray-500">0</span>
								<span className="text-xs text-gray-500">25</span>
								<span className="text-xs text-gray-500">50</span>
								<span className="text-xs text-gray-500">75</span>
								<span className="text-xs text-gray-500">100</span>
							</div>
						</div>
					</div>
				);

			case "colors":
				return (
					<div className="space-y-10">
						<div className="space-y-2">
							<h4 className="text-sm font-medium">Primary Color</h4>
							<Slider
								value={sliderValue}
								onValueChange={setSliderValue}
								max={100}
								step={1}
								className="w-full"
							/>
						</div>
						<div className="space-y-2">
							<h4 className="text-sm font-medium">Success Color</h4>
							<Slider
								value={sliderValue}
								onValueChange={setSliderValue}
								max={100}
								step={1}
								className={cn(
									"w-full",
									"[&_[role=slider]]:bg-green-600 [&_[role=slider]]:border-green-600",
									"[&_[data-orientation=horizontal]>[data-disabled]]:bg-green-500"
								)}
							/>
						</div>
						<div className="space-y-2">
							<h4 className="text-sm font-medium">Warning Color</h4>
							<Slider
								value={sliderValue}
								onValueChange={setSliderValue}
								max={100}
								step={1}
								className={cn(
									"w-full",
									"[&_[role=slider]]:bg-yellow-600 [&_[role=slider]]:border-yellow-600",
									"[&_[data-orientation=horizontal]>[data-disabled]]:bg-yellow-500"
								)}
							/>
						</div>
						<div className="space-y-2">
							<h4 className="text-sm font-medium">Danger Color</h4>
							<Slider
								value={sliderValue}
								onValueChange={setSliderValue}
								max={100}
								step={1}
								className={cn(
									"w-full",
									"[&_[role=slider]]:bg-red-600 [&_[role=slider]]:border-red-600",
									"[&_[data-orientation=horizontal]>[data-disabled]]:bg-red-500"
								)}
							/>
						</div>
					</div>
				);

			case "vertical":
				return (
					<div className="flex space-x-10 h-80 py-4">
						<div className="space-y-2 flex flex-col items-center">
							<h4 className="text-sm font-medium">Vertical</h4>
							<div className="flex h-full items-center">
								<Slider
									value={sliderValue}
									onValueChange={setSliderValue}
									max={100}
									step={1}
									orientation="vertical"
									className="h-full"
								/>
							</div>
							<p className="text-sm text-gray-500">{sliderValue}</p>
						</div>
						<div className="space-y-2 flex flex-col items-center">
							<h4 className="text-sm font-medium">With Labels</h4>
							<div className="flex h-full items-center">
								<div className="flex flex-col justify-between h-full mr-2">
									<span className="text-xs text-gray-500">100</span>
									<span className="text-xs text-gray-500">50</span>
									<span className="text-xs text-gray-500">0</span>
								</div>
								<Slider
									value={sliderValue}
									onValueChange={setSliderValue}
									max={100}
									step={1}
									orientation="vertical"
									className="h-full"
								/>
							</div>
							<p className="text-sm text-gray-500">{sliderValue}</p>
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
				<h3 className="text-lg font-medium">Slider Variants</h3>
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

			<div className="border rounded-md p-6">{renderSlider()}</div>

			<div className="border rounded-md p-6 bg-gray-50">
				<h3 className="text-lg font-medium mb-4">Usage Code</h3>
				<pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto text-sm">
					{`<Slider
  value={sliderValue}
  onValueChange={setSliderValue}
  max={100}
  step={1}
  className="w-full"
/>`}
				</pre>
			</div>
		</div>
	);
}
