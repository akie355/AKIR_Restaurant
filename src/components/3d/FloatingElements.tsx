import { useRef, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Sphere, Box, Torus } from '@react-three/drei'
import * as THREE from 'three'

export function FloatingElements() {
  const sphere1 = useRef<THREE.Mesh>(null!)
  const sphere2 = useRef<THREE.Mesh>(null!)
  const box1 = useRef<THREE.Mesh>(null!)
  const torus1 = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    
    // Floating animation for sphere1
    if (sphere1.current) {
      sphere1.current.position.y = Math.sin(time * 0.8) * 0.5
      sphere1.current.rotation.x = time * 0.3
      sphere1.current.rotation.z = time * 0.2
    }
    
    // Floating animation for sphere2
    if (sphere2.current) {
      sphere2.current.position.y = Math.cos(time * 0.6) * 0.3
      sphere2.current.rotation.y = time * 0.4
    }
    
    // Floating animation for box
    if (box1.current) {
      box1.current.position.y = Math.sin(time * 0.5) * 0.4
      box1.current.rotation.x = time * 0.1
      box1.current.rotation.y = time * 0.15
    }
    
    // Floating animation for torus
    if (torus1.current) {
      torus1.current.position.y = Math.cos(time * 0.7) * 0.2
      torus1.current.rotation.x = time * 0.2
      torus1.current.rotation.z = time * 0.1
    }
  })

  return (
    <group>
      {/* Main floating sphere - golden */}
      <Sphere ref={sphere1} args={[0.8, 32, 32]} position={[-2, 0, -2]}>
        <meshStandardMaterial 
          color="#D4AF37" 
          metalness={0.8} 
          roughness={0.2}
          emissive="#D4AF37"
          emissiveIntensity={0.1}
        />
      </Sphere>
      
      {/* Secondary sphere - copper */}
      <Sphere ref={sphere2} args={[0.5, 32, 32]} position={[2.5, 1, -1]}>
        <meshStandardMaterial 
          color="#B87333" 
          metalness={0.9} 
          roughness={0.1}
          emissive="#B87333"
          emissiveIntensity={0.05}
        />
      </Sphere>
      
      {/* Elegant box */}
      <Box ref={box1} args={[0.6, 0.6, 0.6]} position={[1, -1, 1]}>
        <meshStandardMaterial 
          color="#8B4513" 
          metalness={0.3} 
          roughness={0.7}
        />
      </Box>
      
      {/* Torus ring */}
      <Torus ref={torus1} args={[0.5, 0.2, 16, 32]} position={[-1.5, 1.5, 1]}>
        <meshStandardMaterial 
          color="#D4AF37" 
          metalness={0.8} 
          roughness={0.2}
          emissive="#D4AF37"
          emissiveIntensity={0.1}
        />
      </Torus>
      
      {/* Ambient light */}
      <ambientLight intensity={0.4} />
      
      {/* Point lights for dramatic effect */}
      <pointLight position={[2, 2, 2]} intensity={1} color="#D4AF37" />
      <pointLight position={[-2, -2, 2]} intensity={0.8} color="#B87333" />
      <pointLight position={[0, 0, -2]} intensity={0.6} color="#FFF" />
    </group>
  )
}