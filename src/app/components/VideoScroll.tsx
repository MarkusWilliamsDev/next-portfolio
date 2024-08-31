"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";

interface VideoScrollProps {
	videoSrc: string;
}

const VideoScroll: React.FC<VideoScrollProps> = ({ videoSrc }) => {
	const videoRef = useRef<HTMLVideoElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const requestRef = useRef<number>();
	const previousTimeRef = useRef<number>();
	const [progress, setProgress] = useState(0);
	const [debug, setDebug] = useState<string>("");

	const animate = useCallback((time: number) => {
		if (previousTimeRef.current !== undefined) {
			const video = videoRef.current;
			const container = containerRef.current;
			if (!video || !container) return;

			const { height } = container.getBoundingClientRect();
			const windowHeight = window.innerHeight;
			const navbarHeight = 64;
			const scrollPosition = window.scrollY;
			const containerTop = container.offsetTop - navbarHeight;
			const scrollableHeight = height - windowHeight + navbarHeight;
			const scrollPercentage = Math.min(
				Math.max((scrollPosition - containerTop) / scrollableHeight, 0),
				1
			);

			setProgress(scrollPercentage);

			video.style.transform = `-translateY(${
				-scrollPercentage * (video.videoHeight - container.clientHeight)
			}px)`;

			if (Math.round(time / (1000 / 60)) % 7 === 0) {
				video.currentTime = video.duration * scrollPercentage;
			}

			setDebug(
				`Scroll: ${scrollPosition.toFixed(2)}, Progress: ${(
					scrollPercentage * 100
				).toFixed(2)}%`
			);
		}
		previousTimeRef.current = time;
		requestRef.current = requestAnimationFrame(animate);
	}, []);

	useEffect(() => {
		const video = videoRef.current;
		const container = containerRef.current;
		if (!video || !container) return;

		const handleVideoLoad = () => {
			video.currentTime = 0;
			setDebug((prev) => `${prev}\nVideo loaded. Duration: ${video.duration}s`);

			// Preload video frames
			for (let i = 0; i <= 1; i += 0.1) {
				video.currentTime = video.duration * i;
			}
			video.currentTime = 0;
		};

		video.addEventListener("loadedmetadata", handleVideoLoad);
		requestRef.current = requestAnimationFrame(animate);

		return () => {
			video.removeEventListener("loadedmetadata", handleVideoLoad);
			cancelAnimationFrame(requestRef.current!);
		};
	}, [animate]);

	return (
		<div ref={containerRef} className="relative h-[300vh]">
			<div className="sticky top-16 h-[calc(100vh-64px)] overflow-hidden">
				<video
					ref={videoRef}
					src={videoSrc}
					className="w-full object-cover"
					style={{ height: "300%" }}
					preload="auto"
					playsInline
					muted
				/>
				<div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded">
					Progress: {Math.round(progress * 100)}%
				</div>
				<div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded whitespace-pre-wrap">
					{debug}
				</div>
			</div>
		</div>
	);
};

export default VideoScroll;
