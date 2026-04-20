"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

/**
 * World-Class Water Shader Material
 * Inspired by premium immersive tourism sites.
 */
function WaterSurface() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const { viewport } = useThree();

  // Custom shaders for a 'Soulful' river look
  const shaderArgs = useMemo(() => {
    return {
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: new THREE.Color("#1B3A5C") }, // Deep River Blue
        uRippleColor: { value: new THREE.Color("#4A90E2") },
      },
      vertexShader: `
        varying vec2 vUv;
        uniform float uTime;
        void main() {
          vUv = uv;
          vec3 pos = position;
          // Suble wave movement
          pos.z += sin(pos.x * 2.0 + uTime) * 0.15;
          pos.z += cos(pos.y * 1.5 + uTime * 1.2) * 0.1;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        uniform float uTime;
        uniform vec3 uColor;
        uniform vec3 uRippleColor;
        void main() {
          float noise = sin(vUv.x * 10.0 + uTime) * cos(vUv.y * 10.0 + uTime);
          vec3 finalColor = mix(uColor, uRippleColor, noise * 0.2);
          gl_FragColor = vec4(finalColor, 0.4); // Transparent for layering
        }
      `,
    };
  }, []);

  useFrame((state) => {
    shaderArgs.uniforms.uTime.value = state.clock.getElapsedTime();
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
      <planeGeometry args={[viewport.width * 2, viewport.height * 2, 64, 64]} />
      <shaderMaterial 
        args={[shaderArgs]} 
        transparent 
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

export default function RiverShader() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-30">
      <Canvas camera={{ position: [0, 2, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <WaterSurface />
      </Canvas>
    </div>
  );
}
