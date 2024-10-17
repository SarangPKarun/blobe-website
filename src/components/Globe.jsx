import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/models/globe.glb')

  // Load your texture (make sure this path is correct)
  const globeTexture = useTexture('/textures/globe_texture.jpeg') // Use your actual texture path

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere_Material002_0.geometry}
        material={materials['Material.002']}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={5}
      >
      <meshStandardMaterial map={globeTexture} />
      </mesh>
    </group>
  )
}

useGLTF.preload('/models/globe.glb')
