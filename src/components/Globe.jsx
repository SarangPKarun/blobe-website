import React, { useRef, useEffect, useState } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Globe(props) {
  const globeRef = useRef();
  const { nodes, materials } = useGLTF("/models/globe.glb");
  const globeTexture = useTexture("/textures/globe_texture.jpeg"); // Replace with your actual texture path

  const [scrollY, setScrollY] = useState(0);
  const [scrollSection, setScrollSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY); // Update scroll position on scroll
      // Map scroll position to sections
      if (window.scrollY < window.innerHeight) {
        setScrollSection(0); // First section
      } else if (window.scrollY < 2 * window.innerHeight) {
        setScrollSection(1); // Second section
      } else {
        setScrollSection(2); // Third section
      }
    };

    window.addEventListener("scroll", handleScroll); // Add scroll event listener
    return () => {
      window.removeEventListener("scroll", handleScroll); // Clean up the event listener
    };
  }, []);

  // Animate globe movement based on scrollSection
  useFrame(() => {
    if (globeRef.current) {
      // Example of controlling globe's position or rotation based on scrollSection
      if (scrollSection === 0) {
        globeRef.current.rotation.y = 0; // Reset rotation for section 1
        globeRef.current.position.set(0, 0, 0); // Position in first section
      } else if (scrollSection === 1) {
        globeRef.current.rotation.y = Math.PI / 4; // Rotate globe for section 2
        globeRef.current.position.set(0, 0, -5); // Move globe for section 2
      } else if (scrollSection === 2) {
        globeRef.current.rotation.y = Math.PI / 2; // Rotate globe for section 3
        globeRef.current.position.set(0, 0, -10); // Move globe for section 3
      }
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
