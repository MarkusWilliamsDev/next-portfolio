"use client";

import React from "react";
import { MapPin } from "lucide-react";

interface GeolocationData {
	country: string;
	countryName: string;
	city: string;
	region: string;
}

interface GeolocationDisplayProps {
	geolocationData: GeolocationData;
}

export default function GeolocationDisplay({
	geolocationData,
}: GeolocationDisplayProps) {
	return (
		<div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
			<div className="flex items-center justify-center mb-6">
				<MapPin className="w-12 h-12 text-blue-500" />
			</div>
			<h2 className="text-2xl font-bold text-center mb-4">Your Location</h2>
			<div className="space-y-2">
				<p className="text-gray-700">
					<strong>Country:</strong> {geolocationData.countryName} (
					{geolocationData.country})
				</p>
				<p className="text-gray-700">
					<strong>Region:</strong> {geolocationData.region}
				</p>
				<p className="text-gray-700">
					<strong>City:</strong> {geolocationData.city}
				</p>
			</div>
			<div className="mt-6 text-center text-sm text-gray-500">
				<p>
					This information is based on your IP address and may not be 100%
					accurate.
				</p>
			</div>
		</div>
	);
}
