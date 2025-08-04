import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function ParticleField() {
  const ref = useRef<THREE.Points>(null!)
  const particleCount = 2000
  
  const particles = useMemo(() => {
    const positions = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 100
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100
    }
    return positions
  }, [particleCount])

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.x = clock.getElapsedTime() * 0.02
      ref.current.rotation.y = clock.getElapsedTime() * 0.03
    }
  })

  return (
    <Points ref={ref} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ff4444"
        size={0.3}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  )
}

function NetworkLines() {
  const ref = useRef<THREE.Group>(null!)
  
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.z = clock.getElapsedTime() * 0.01
    }
  })

  const lines = useMemo(() => {
    const lineCount = 50
    const points: THREE.Vector3[][] = []
    
    for (let i = 0; i < lineCount; i++) {
      const linePoints: THREE.Vector3[] = []
      for (let j = 0; j < 5; j++) {
        linePoints.push(
          new THREE.Vector3(
            (Math.random() - 0.5) * 80,
            (Math.random() - 0.5) * 80,
            (Math.random() - 0.5) * 80
          )
        )
      }
      points.push(linePoints)
    }
    return points
  }, [])

  return (
    <group ref={ref}>
      {lines.map((linePoints, index) => (
        <line key={index}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={linePoints.length}
              array={new Float32Array(linePoints.flatMap(p => [p.x, p.y, p.z]))}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#ff4444" transparent opacity={0.1} />
        </line>
      ))}
    </group>
  )
}

export function Background3D() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 50], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ParticleField />
        <NetworkLines />
      </Canvas>
    </div>
  )
}