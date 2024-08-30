"use client";
import React from "react";
import ProfilePicture from "../assets/Profile_No_BG.png";
import Image from "next/image";
import { ParticleBackground } from "../utils/ParticleBackground";

export default function Hero() {
	let name = "Markus Williams";
	let nameCharArray = name.split("");
	let keyWord = "detail";
	let keyWordCharArray = keyWord.split("");

	return (
		<div className="relative bg-gray-50/75 overflow-hidden h-screen">
			<ParticleBackground />
			<div className="relative pt-6 pb-16 sm:pb-24">
				<main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
					<div className="text-center">
						<div className="flex justify-center">
							<Image
								src={ProfilePicture}
								alt="Markus Williams"
								className="max-w-full h-44 w-44"
							/>
						</div>
						<h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl cursor-default">
							<span className="block xl:inline">Hi, my name is</span>{" "}
							<div className="flex justify-center">
								{characterHoverAnimation(nameCharArray)}
							</div>
						</h1>
						<h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl w-2xl cursor-default">
							<span className="block xl:inline ml-4 mr-4">
								A developer with an eye for{" "}
								<div className="flex justify-center">
									{characterHoverAnimation(keyWordCharArray)}
								</div>
							</span>
						</h1>
						<div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
							<div className="rounded-md shadow hover:drop-shadow-md duration-300">
								<a
									href="#work"
									className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 hover:text-purple-800 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 duration-300"
								>
									View work
								</a>
							</div>
							<div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 hover:drop-shadow-md duration-300">
								<a
									href="#contact"
									className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md  text-white bg-indigo-600 hover:bg-purple-700 md:py-4 md:text-lg md:px-10 duration-300"
								>
									Get in touch
								</a>
							</div>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}

const characterHoverAnimation = (charArray: string[]) => {
	return (
		<div className="flex justify-center">
			{charArray.map((char, index) => {
				return (
					<span
						key={index}
						className="block text-indigo-600 hover:text-purple-700 duration-300 xl:inline"
					>
						{char}
					</span>
				);
			})}
		</div>
	);
};
