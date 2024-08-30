"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import PlaygroundLayout from "../PlaygroundLayout";

const title = "3D Cube with Three.js";
const description =
	"Explore a rotating 3D cube created using Three.js and React Three Fiber.";

function Cube() {
	const meshRef = useRef<THREE.Mesh>(null!);
	const edgesRef = useRef<THREE.LineSegments>(null!);

	useFrame((state, delta) => {
		meshRef.current.rotation.x += delta * 0.5;
		meshRef.current.rotation.y += delta * 0.5;
		edgesRef.current.rotation.x += delta * 0.5;
		edgesRef.current.rotation.y += delta * 0.5;
	});

	return (
		<group>
			<mesh ref={meshRef}>
				<boxGeometry args={[2, 2, 2]} />
				<meshBasicMaterial color="hotpink" />
			</mesh>
			<lineSegments ref={edgesRef}>
				<edgesGeometry args={[new THREE.BoxGeometry(2, 2, 2)]} />
				<lineBasicMaterial color="black" linewidth={2} />
			</lineSegments>
		</group>
	);
}

function ThreeDCube() {
	return (
		<div style={{ width: "100%", height: "400px" }}>
			<Canvas camera={{ position: [0, 0, 5] }}>
				<ambientLight intensity={0.5} />
				<pointLight position={[10, 10, 10]} />
				<Cube />
				<OrbitControls />
			</Canvas>
		</div>
	);
}

const BlogContent: React.FC = () => (
	<div>
		<h3>What I Learned</h3>
		<p>
			In this playground, I explored the basics of creating a 3D scene using
			Three.js and React Three Fiber. I learned how to create a simple cube
			geometry, add materials, and implement rotation animation.
		</p>
		<h3>Challenges Faced</h3>
		<p>
			One of the main challenges was understanding how to properly use refs with
			Three.js objects in a React context. I also had to figure out how to add
			edges to the cube to make its shape more distinct.
		</p>
		<h3>Future Improvements</h3>
		<p>
			In the future, I&apos;d like to add more complex geometries and implement
			interactive features, such as changing the cube&apos;s color or shape
			based on user input. I&apos;m also interested in exploring more advanced
			Three.js features like custom shaders and post-processing effects.
		</p>
	</div>
);

export default function ThreeDCubePage() {
	return (
		<PlaygroundLayout
			title={title}
			description={description}
			blogContent={<BlogContent />}
		>
			<ThreeDCube />
		</PlaygroundLayout>
	);
}
