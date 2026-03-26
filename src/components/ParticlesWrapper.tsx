import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function ParticleScene() {
  const count = 400;
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const lightRef = useRef<THREE.PointLight>(null);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 20;
      const y = (Math.random() - 0.5) * 20;
      const z = (Math.random() - 0.5) * 10 - 5;
      const speed = Math.random() * 0.01 + 0.002;
      temp.push({ x, y, z, speed });
    }
    return temp;
  }, [count]);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((state) => {
    const mouseX = (state.pointer.x * state.viewport.width) / 2;
    const mouseY = (state.pointer.y * state.viewport.height) / 2;

    if (lightRef.current) {
      lightRef.current.position.x = mouseX;
      lightRef.current.position.y = mouseY;
    }

    particles.forEach((particle, i) => {
      particle.y += particle.speed;
      if (particle.y > 10) particle.y = -10;

      const dx = mouseX - particle.x;
      const dy = mouseY - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 2 && distance > 0.01) {
        const force = (2 - distance) / 2;
        particle.x -= (dx / distance) * force * 0.15;
        particle.y -= (dy / distance) * force * 0.15;
      }

      dummy.position.set(particle.x, particle.y, particle.z);
      const time = state.clock.getElapsedTime();
      dummy.rotation.x = time * particle.speed;
      dummy.rotation.y = time * particle.speed;

      const scale = distance < 3 ? 1.5 : 1;
      dummy.scale.set(scale, scale, scale);

      dummy.updateMatrix();
      meshRef.current?.setMatrixAt(i, dummy.matrix);
    });

    if (meshRef.current) {
      meshRef.current.instanceMatrix.needsUpdate = true;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight ref={lightRef} distance={5} intensity={5} color="#ffffff" />
      <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
        <sphereGeometry args={[0.02, 8, 8]} />
        <meshStandardMaterial color="#ffffff" transparent opacity={0.3} roughness={0.2} metalness={0.8} />
      </instancedMesh>
    </>
  );
}

export default function ParticlesWrapper() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 mix-blend-screen opacity-60">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }} dpr={[1, 2]}>
        <ParticleScene />
      </Canvas>
    </div>
  );
}
