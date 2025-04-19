"use client";

import React, { useState, useEffect } from "react";
import PlaygroundLayout from "../PlaygroundLayout";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	BarElement,
	ArcElement,
	Title,
	Tooltip,
	Legend,
	RadialLinearScale,
	Filler,
} from "chart.js";
import { Line, Bar, Pie, Radar } from "react-chartjs-2";

// Register ChartJS components
ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	BarElement,
	ArcElement,
	RadialLinearScale,
	Title,
	Tooltip,
	Legend,
	Filler
);

const title = "Interactive Data Visualization";
const description =
	"Explore different ways to visualize data with interactive charts.";

interface DataPoint {
	month: string;
	value: number;
}

interface DataSeries {
	label: string;
	data: number[];
	backgroundColor: string;
	borderColor: string;
	borderWidth?: number;
}

// Generate random data for demonstration
const generateRandomData = (
	months: string[],
	min: number,
	max: number
): number[] => {
	return months.map(() => Math.floor(Math.random() * (max - min + 1) + min));
};

// Date generator for x-axis
const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];
const shortMonths = months.map((month) => month.substring(0, 3));

export default function DataVisualizationPage() {
	// Chart data state
	const [lineChartData, setLineChartData] = useState<any>(null);
	const [barChartData, setBarChartData] = useState<any>(null);
	const [pieChartData, setPieChartData] = useState<any>(null);
	const [radarChartData, setRadarChartData] = useState<any>(null);

	// Interactive controls state
	const [smoothing, setSmoothing] = useState<boolean>(false);
	const [displayLegend, setDisplayLegend] = useState<boolean>(true);
	const [animationDuration, setAnimationDuration] = useState<number>(1000);
	const [selectedMonths, setSelectedMonths] = useState<string[]>(shortMonths);

	// Generate and set initial data
	useEffect(() => {
		generateChartData();
	}, [smoothing, selectedMonths, displayLegend]);

	// Generate fresh data for all charts
	const generateChartData = () => {
		const filteredMonths = shortMonths.filter((month) =>
			selectedMonths.includes(month)
		);

		// Colors based on theme
		const textColor = "rgba(0, 0, 0, 0.8)";
		const gridColor = "rgba(0, 0, 0, 0.1)";

		// Common chart options
		const chartOptions = {
			responsive: true,
			maintainAspectRatio: false,
			animation: {
				duration: animationDuration,
			},
			plugins: {
				legend: {
					display: displayLegend,
					labels: {
						color: textColor,
						font: {
							family: "'Inter', sans-serif",
							size: 12,
						},
					},
				},
				title: {
					display: true,
					color: textColor,
					font: {
						family: "'Inter', sans-serif",
						size: 16,
						weight: "normal",
					},
				},
				tooltip: {
					backgroundColor: "rgba(255, 255, 255, 0.8)",
					titleColor: "rgba(0, 0, 0, 0.9)",
					bodyColor: "rgba(0, 0, 0, 0.9)",
					titleFont: {
						family: "'Inter', sans-serif",
						size: 14,
					},
					bodyFont: {
						family: "'Inter', sans-serif",
						size: 13,
					},
					padding: 12,
					cornerRadius: 6,
					boxPadding: 6,
				},
			},
			scales: {
				x: {
					ticks: {
						color: textColor,
					},
					grid: {
						color: gridColor,
					},
				},
				y: {
					ticks: {
						color: textColor,
					},
					grid: {
						color: gridColor,
					},
				},
			},
		};

		// Line Chart Data
		const lineData = {
			labels: filteredMonths,
			datasets: [
				{
					label: "Website Traffic",
					data: generateRandomData(filteredMonths, 5000, 15000),
					borderColor: "rgba(75, 192, 192, 1)",
					backgroundColor: "rgba(75, 192, 192, 0.2)",
					tension: smoothing ? 0.4 : 0,
					fill: true,
				},
				{
					label: "Conversions",
					data: generateRandomData(filteredMonths, 500, 3000),
					borderColor: "rgba(153, 102, 255, 1)",
					backgroundColor: "rgba(153, 102, 255, 0.2)",
					tension: smoothing ? 0.4 : 0,
					fill: true,
				},
			],
		};

		// Bar Chart Data
		const barData = {
			labels: filteredMonths,
			datasets: [
				{
					label: "Revenue",
					data: generateRandomData(filteredMonths, 10000, 50000),
					backgroundColor: "rgba(54, 162, 235, 0.6)",
					borderColor: "rgba(54, 162, 235, 1)",
					borderWidth: 1,
				},
				{
					label: "Expenses",
					data: generateRandomData(filteredMonths, 8000, 30000),
					backgroundColor: "rgba(255, 99, 132, 0.6)",
					borderColor: "rgba(255, 99, 132, 1)",
					borderWidth: 1,
				},
			],
		};

		// Pie Chart Data
		const pieData = {
			labels: [
				"Development",
				"Marketing",
				"Sales",
				"Support",
				"Infrastructure",
			],
			datasets: [
				{
					data: [25, 20, 30, 15, 10],
					backgroundColor: [
						"rgba(255, 99, 132, 0.7)",
						"rgba(54, 162, 235, 0.7)",
						"rgba(255, 206, 86, 0.7)",
						"rgba(75, 192, 192, 0.7)",
						"rgba(153, 102, 255, 0.7)",
					],
					borderColor: [
						"rgba(255, 99, 132, 1)",
						"rgba(54, 162, 235, 1)",
						"rgba(255, 206, 86, 1)",
						"rgba(75, 192, 192, 1)",
						"rgba(153, 102, 255, 1)",
					],
					borderWidth: 1,
				},
			],
		};

		// Radar Chart Data
		const radarData = {
			labels: [
				"Performance",
				"Features",
				"Reliability",
				"Usability",
				"Security",
				"Maintenance",
			],
			datasets: [
				{
					label: "Product A",
					data: [85, 70, 90, 80, 95, 75],
					backgroundColor: "rgba(75, 192, 192, 0.2)",
					borderColor: "rgba(75, 192, 192, 1)",
					pointBackgroundColor: "rgba(75, 192, 192, 1)",
					pointBorderColor: "#fff",
				},
				{
					label: "Product B",
					data: [65, 90, 70, 95, 80, 85],
					backgroundColor: "rgba(255, 99, 132, 0.2)",
					borderColor: "rgba(255, 99, 132, 1)",
					pointBackgroundColor: "rgba(255, 99, 132, 1)",
					pointBorderColor: "#fff",
				},
			],
		};

		// Set chart data and options
		setLineChartData({
			data: lineData,
			options: {
				...chartOptions,
				plugins: {
					...chartOptions.plugins,
					title: {
						...chartOptions.plugins.title,
						text: "Monthly Web Traffic & Conversions",
					},
				},
			},
		});

		setBarChartData({
			data: barData,
			options: {
				...chartOptions,
				plugins: {
					...chartOptions.plugins,
					title: {
						...chartOptions.plugins.title,
						text: "Monthly Revenue & Expenses",
					},
				},
			},
		});

		setPieChartData({
			data: pieData,
			options: {
				...chartOptions,
				plugins: {
					...chartOptions.plugins,
					title: {
						...chartOptions.plugins.title,
						text: "Budget Allocation",
					},
				},
			},
		});

		setRadarChartData({
			data: radarData,
			options: {
				...chartOptions,
				plugins: {
					...chartOptions.plugins,
					title: {
						...chartOptions.plugins.title,
						text: "Product Comparison",
					},
				},
				scales: {
					r: {
						ticks: {
							color: textColor,
							backdropColor: "rgba(255, 255, 255, 0.8)",
						},
						grid: {
							color: gridColor,
						},
						angleLines: {
							color: gridColor,
						},
						pointLabels: {
							color: textColor,
							font: {
								family: "'Inter', sans-serif",
								size: 12,
							},
						},
					},
				},
			},
		});
	};

	// Function to regenerate data on demand
	const refreshData = () => {
		generateChartData();
	};

	// Function to toggle months selection
	const toggleMonth = (month: string) => {
		if (selectedMonths.includes(month)) {
			if (selectedMonths.length > 1) {
				// Ensure at least one month is selected
				setSelectedMonths(selectedMonths.filter((m) => m !== month));
			}
		} else {
			setSelectedMonths([...selectedMonths, month]);
		}
	};

	return (
		<PlaygroundLayout
			title={title}
			description={description}
			blogContent={<BlogContent />}
		>
			<div
				className={
					"w-full min-h-[500px] flex flex-col items-center justify-center p-4 bg-white text-gray-800"
				}
			>
				{/* Controls Panel */}
				<div
					className={
						"w-full max-w-6xl p-4 mb-8 rounded-lg shadow-md bg-gray-50"
					}
				>
					<h2 className="text-xl font-medium mb-4">Visualization Controls</h2>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{/* Chart Options */}
						<div className="space-y-3">
							<h3 className="text-sm font-medium">Chart Options</h3>

							<div className="flex items-center">
								<input
									id="smoothing"
									type="checkbox"
									checked={smoothing}
									onChange={() => setSmoothing(!smoothing)}
									className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
								/>
								<label htmlFor="smoothing" className="ml-2 text-sm">
									Smoothed Lines
								</label>
							</div>

							<div className="flex items-center">
								<input
									id="legend"
									type="checkbox"
									checked={displayLegend}
									onChange={() => setDisplayLegend(!displayLegend)}
									className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
								/>
								<label htmlFor="legend" className="ml-2 text-sm">
									Show Legend
								</label>
							</div>

							<div className="pt-2">
								<label htmlFor="animation" className="block text-sm mb-1">
									Animation Speed: {animationDuration}ms
								</label>
								<input
									id="animation"
									type="range"
									min="0"
									max="2000"
									step="100"
									value={animationDuration}
									onChange={(e) =>
										setAnimationDuration(parseInt(e.target.value))
									}
									className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
								/>
							</div>
						</div>

						{/* Data Filtering */}
						<div className="space-y-3">
							<h3 className="text-sm font-medium">Filter Data (Months)</h3>
							<div className="grid grid-cols-4 gap-2">
								{shortMonths.map((month) => (
									<div key={month} className="flex items-center">
										<input
											id={`month-${month}`}
											type="checkbox"
											checked={selectedMonths.includes(month)}
											onChange={() => toggleMonth(month)}
											className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
										/>
										<label htmlFor={`month-${month}`} className="ml-2 text-sm">
											{month}
										</label>
									</div>
								))}
							</div>
						</div>

						{/* Actions */}
						<div className="space-y-3 flex flex-col justify-end">
							<h3 className="text-sm font-medium">Actions</h3>
							<button
								onClick={refreshData}
								className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md shadow-sm transition-colors"
							>
								Randomize Data
							</button>

							<div className="text-xs mt-2 p-2 rounded bg-opacity-50 border border-dashed border-gray-400 bg-gray-100 dark:bg-gray-700">
								<p className="font-medium mb-1">Tips:</p>
								<ul className="list-disc list-inside space-y-1">
									<li>Click on legend items to toggle visibility</li>
									<li>Hover over chart elements to see details</li>
									<li>Use the refresh button to generate new random data</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				{/* Charts Grid */}
				<div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
					{/* Line Chart */}
					{lineChartData && (
						<div
							className={
								"aspect-[4/3] rounded-lg shadow-md overflow-hidden p-4 bg-white"
							}
						>
							<Line data={lineChartData.data} options={lineChartData.options} />
						</div>
					)}

					{/* Bar Chart */}
					{barChartData && (
						<div
							className={
								"aspect-[4/3] rounded-lg shadow-md overflow-hidden p-4 bg-white"
							}
						>
							<Bar data={barChartData.data} options={barChartData.options} />
						</div>
					)}

					{/* Pie Chart */}
					{pieChartData && (
						<div
							className={
								"aspect-[4/3] rounded-lg shadow-md overflow-hidden p-4 bg-white"
							}
						>
							<Pie data={pieChartData.data} options={pieChartData.options} />
						</div>
					)}

					{/* Radar Chart */}
					{radarChartData && (
						<div
							className={
								"aspect-[4/3] rounded-lg shadow-md overflow-hidden p-4 bg-white"
							}
						>
							<Radar
								data={radarChartData.data}
								options={radarChartData.options}
							/>
						</div>
					)}
				</div>

				{/* Info Panel */}
				<div className={"w-full max-w-6xl p-6 rounded-lg shadow-md bg-gray-50"}>
					<h2 className="text-xl font-medium mb-4">About Data Visualization</h2>

					<div className="prose max-w-none prose-sm md:prose-base dark:prose-invert">
						<p>
							This playground demonstrates various ways to visualize data using
							Chart.js in a React application. The charts above use randomly
							generated data that you can refresh and filter using the controls.
						</p>

						<p className="mt-2">
							Modern data visualization is essential for making data-driven
							decisions, identifying trends, and communicating complex
							information effectively. Each chart type offers different
							advantages:
						</p>

						<ul className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
							<li>
								<strong>Line charts</strong>: Perfect for showing trends over
								time
							</li>
							<li>
								<strong>Bar charts</strong>: Ideal for comparing quantities
								between categories
							</li>
							<li>
								<strong>Pie charts</strong>: Best for showing composition or
								proportion
							</li>
							<li>
								<strong>Radar charts</strong>: Great for comparing multiple
								variables
							</li>
						</ul>
					</div>
				</div>
			</div>
		</PlaygroundLayout>
	);
}

const BlogContent = () => (
	<div className="space-y-6">
		<section>
			<h3 className="text-xl font-semibold mb-2">About Data Visualization</h3>
			<p>
				Data visualization is the graphical representation of data and
				information. It helps users understand complex data by transforming it
				into visual context, making patterns, trends, and outliers more visible
				and easier to comprehend.
			</p>
		</section>

		<section>
			<h3 className="text-xl font-semibold mb-2">Interactive Features</h3>
			<p>
				This playground demonstrates modern interactive visualization techniques
				including:
			</p>
			<ul className="list-disc list-inside mt-2 ml-4">
				<li>Real-time data updates and animations</li>
				<li>Interactive controls for customizing chart appearance</li>
				<li>Filtering capabilities to focus on specific data points</li>
				<li>Responsive design that works on all device sizes</li>
			</ul>
		</section>

		<section>
			<h3 className="text-xl font-semibold mb-2">Chart Types Explained</h3>
			<div className="space-y-2">
				<div>
					<h4 className="font-medium">Line Charts</h4>
					<p className="text-sm">
						Line charts connect data points with lines, making them perfect for
						showing trends over time or continuous data. They excel at showing
						rate of change and can reveal patterns that might be missed in
						tabular data.
					</p>
				</div>

				<div>
					<h4 className="font-medium">Bar Charts</h4>
					<p className="text-sm">
						Bar charts use rectangular bars to represent data, with the length
						of each bar proportional to the value it represents. They're
						excellent for comparing quantities across different categories and
						can display both positive and negative values effectively.
					</p>
				</div>

				<div>
					<h4 className="font-medium">Pie Charts</h4>
					<p className="text-sm">
						Pie charts divide a circle into segments, with each segment
						representing a proportion of the whole. They're best used when
						showing composition or part-to-whole relationships, especially with
						a small number of categories.
					</p>
				</div>

				<div>
					<h4 className="font-medium">Radar Charts</h4>
					<p className="text-sm">
						Radar charts (also known as spider or web charts) display
						multivariate data on axes starting from the same point. They're
						useful for comparing multiple variables simultaneously and
						identifying which variables have similar values or if there are
						outliers.
					</p>
				</div>
			</div>
		</section>

		<section>
			<h3 className="text-xl font-semibold mb-2">Technical Implementation</h3>
			<p>This playground is built using:</p>
			<ul className="list-disc list-inside mt-2 ml-4">
				<li>React for the UI components and state management</li>
				<li>Chart.js for generating the charts</li>
				<li>react-chartjs-2 to integrate Chart.js with React</li>
				<li>Tailwind CSS for styling and responsive design</li>
			</ul>
			<p className="mt-2">
				The data displayed is randomly generated but mimics real-world
				scenarios. In a production environment, this would be replaced with API
				calls to fetch actual data from a backend service.
			</p>
		</section>
	</div>
);
