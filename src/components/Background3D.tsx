import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function ParticleField() {
  const ref = useRef<THREE.Points>(null!)
  const particleCount = 1500
  
  const particles = useMemo(() => {
    const positions = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 80
      positions[i * 3 + 1] = (Math.random() - 0.5) * 80
      positions[i * 3 + 2] = (Math.random() - 0.5) * 80
    }
    return positions
  }, [particleCount])

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.x = clock.getElapsedTime() * 0.01
      ref.current.rotation.y = clock.getElapsedTime() * 0.02
    }
  })

  return (
    <Points ref={ref} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ff4444"
        size={0.2}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  )
}

function FloatingGeometry() {
  const meshRef = useRef<THREE.Mesh>(null!)
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.getElapsedTime() * 0.1
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.15
      meshRef.current.position.y = Math.sin(clock.getElapsedTime()) * 2
    }
  })

  return (
    <mesh ref={meshRef} position={[10, 0, -20]}>
      <octahedronGeometry args={[2, 0]} />
      <meshBasicMaterial 
        color="#ff4444" 
        wireframe 
        transparent 
        opacity={0.1}
      />
    </mesh>
  )
}

function AmbientParticles() {
  const groupRef = useRef<THREE.Group>(null!)
  
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = clock.getElapsedTime() * 0.005
    }
  })

  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < 100; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 100,
          (Math.random() - 0.5) * 100,
          (Math.random() - 0.5) * 100
        ] as [number, number, number],
        scale: Math.random() * 0.5 + 0.5
      })
    }
    return temp
  }, [])

  return (
    <group ref={groupRef}>
      {particles.map((particle, index) => (
        <mesh key={index} position={particle.position} scale={particle.scale}>
          <sphereGeometry args={[0.1, 8, 8]} />
          <meshBasicMaterial 
            color="#4444ff" 
            transparent 
            opacity={0.3}
          />
        </mesh>
      ))}
    </group>
  )
}

export function Background3D() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 30], fov: 75 }}
        style={{ background: 'transparent' }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.1} />
        <ParticleField />
        <FloatingGeometry />
        <AmbientParticles />
      </Canvas>
    </div>
  )
}