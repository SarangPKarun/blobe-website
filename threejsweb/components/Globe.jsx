import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Globe(props) {
  const globeRef = useRef();
  const { nodes, materials } = useGLTF("/models/globe.glb");
  const globeTexture = useTexture("/textures/globe_texture.jpeg"); // Replace with your actual texture path

  // Rotate the globe backward
  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y -= 0.0015; // Adjust the speed of rotation here
    }
  });

  return (
    <group {...props} dispose={null} ref={globeRef}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere_Material002_0.geometry}
        material={materials["Material.002"]}
        rotation={[-Math.PI / 2, Math.PI, 0]} // Rotates the globe to fix the texture orientation
        scale={5}
      >
        <meshStandardMaterial map={globeTexture} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/models/globe.glb");
