"use client";

import React, { useRef } from "react";
import { Canvas, useFrame, ThreeElements } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function Cube(props: ThreeElements["mesh"]) {
	const meshRef = useRef<THREE.Mesh>(null!);

	useFrame((state, delta) => {
		meshRef.current.rotation.x += delta * 0.2;
		meshRef.current.rotation.y += delta * 0.3;
	});

	return (
		<mesh {...props} ref={meshRef}>
			<boxGeometry args={[2, 2, 2]} />
			<meshStandardMaterial color="purple" />
		</mesh>
	);
}

export default function page() {
	return (
		<div className="w-full h-[400px]">
			<Canvas>
				<ambientLight intensity={0.5} />
				<spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
				<Cube />
				<OrbitControls />
			</Canvas>
		</div>
	);
}
