"use client";

import React, { useState, useEffect } from "react";
import PlaygroundLayout from "../PlaygroundLayout";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import VideoScroll from "../../components/VideoScroll";

const title = "Video Scroll Effect";
const description =
	"Explore a video scroll effect where the video scrubs through as you scroll the page.";

function VideoScrollDemo() {
	const [isLargeScreen, setIsLargeScreen] = useState(false);

	useEffect(() => {
		const checkScreenSize = () => {
			setIsLargeScreen(window.innerWidth >= 768);
		};

		checkScreenSize();
		window.addEventListener("resize", checkScreenSize);

		return () => {
			window.removeEventListener("resize", checkScreenSize);
		};
	}, []);

	if (!isLargeScreen) {
		return (
			<div className="w-full flex items-start justify-center bg-gray-200 p-16">
				<p className="text-center p-4">
					This video scroll effect is not available on mobile. Please view on a
					larger screen.
				</p>
			</div>
		);
	}

	return (
		<div className="w-full h-[300vh]">
			<VideoScroll videoSrc="/earth-compressed.mp4" />
		</div>
	);
}

const BlogContent: React.FC = () => (
	<div className="space-y-4">
		<h3 className="text-xl font-semibold">What I Learned</h3>
		<p>
			In this playground, I explored creating a video scroll effect where the
			video scrubs through as the user scrolls the page. I learned how to
			synchronize scroll position with video playback and optimize performance
			for smooth scrolling.
		</p>
		<p>
			Here&apos;s the key part of the code that creates the video scroll effect:
		</p>
		<SyntaxHighlighter language="typescript" style={vscDarkPlus}>
			{`const animate = (time: number) => {
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
    const scrollPercentage = Math.min(Math.max((scrollPosition - containerTop) / scrollableHeight, 0), 1);
    
    setProgress(scrollPercentage);
    
    const translateY = scrollPercentage * (container.clientHeight - video.videoHeight);
    video.style.transform = \`translateY(\${translateY}px)\`;
    
    if (Math.round(time / (1000 / 60)) % 5 === 0) {
      video.currentTime = video.duration * scrollPercentage;
    }
  }
  previousTimeRef.current = time;
  requestRef.current = requestAnimationFrame(animate);
}`}
		</SyntaxHighlighter>
		<p>
			This code calculates the scroll percentage and updates the video&apos;s
			position and current time accordingly. It uses requestAnimationFrame for
			smooth animation and optimizes performance by updating the video&apos;s
			current time less frequently.
		</p>
		<h3 className="text-xl font-semibold">Challenges Faced</h3>
		<p>
			One of the main challenges was achieving smooth scrolling performance.
			Initially, updating the video&apos;s current time on every scroll event
			caused significant lag. I had to implement optimizations like using
			requestAnimationFrame and reducing the frequency of time updates to
			improve performance. Unfortunately, this approach still has some lag but
			it is significantly better than before. I also compressed the video from
			~7MB to ~1MB to further optimize performance, but this causes the video to
			look noticeably worse. Along with all of this, I was unable to make the
			video scroll work on mobile. I will likely revisit this playground in the
			future to improve the performance and functionality on mobile.
		</p>
		<h3 className="text-xl font-semibold">Future Improvements</h3>
		<p>
			I would like for this to be viewable on mobile, there are a few issues
			with loading the video properly now so I am just showing it on larger
			devices. In the future, I&apos;d like to add more interactive features,
			such as allowing users to click on the video to jump to specific points.
			I&apos;m also interested in exploring ways to further optimize
			performance, possibly by using WebGL for rendering or implementing a
			custom video player.
		</p>
	</div>
);

export default function VideoScrollPage() {
	return (
		<PlaygroundLayout
			title={title}
			description={description}
			blogContent={<BlogContent />}
		>
			<VideoScrollDemo />
		</PlaygroundLayout>
	);
}
