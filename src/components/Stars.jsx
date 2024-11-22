import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const Stars = ({ count = 500, radius = 50 }) => {
  const starsRef = useRef();

  // Randomly generate star positions
  const positions = Array.from({ length: count }, () => {
    const phi = Math.random() * 2 * Math.PI;
    const costheta = Math.random() * 2 - 1;
    const theta = Math.acos(costheta);
    const r = radius;

    return [
      r * Math.sin(theta) * Math.cos(phi),
      r * Math.sin(theta) * Math.sin(phi),
      r * Math.cos(theta),
    ];
  });

  // Add rotation animation
  useFrame(() => {
    if (starsRef.current) {
      starsRef.current.rotation.y += 0.001; // Adjust rotation speed
    }
  });

  return (
    <group ref={starsRef}>
      {positions.map(([x, y, z], index) => (
        <mesh key={index} position={[x, y, z]}>
          <sphereGeometry args={[0.1, 8, 8]} />
          <meshBasicMaterial color="white" />
        </mesh>
      ))}
    </group>
  );
};

export default Stars;
