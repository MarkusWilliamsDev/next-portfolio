"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

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

export default function ThreeDScroll() {
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
