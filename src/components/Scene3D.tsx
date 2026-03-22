import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Sparkles, Stars, MeshDistortMaterial, MeshWobbleMaterial } from '@react-three/drei';
import { Mesh, Group } from 'three';

/* ── Design 1: Crystal TorusKnot ── */
const CrystalHeart = () => {
  const meshRef = useRef<Mesh>(null!);
  useFrame(({ clock }) => {
    meshRef.current.rotation.y = clock.getElapsedTime() * 0.5;
    meshRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.3) * 0.2;
  });
  return (
    <Float speed={1.5} floatIntensity={2} rotationIntensity={0.2}>
      <mesh ref={meshRef} position={[-3.5, 0.5, -4]} scale={1.2}>
        <torusKnotGeometry args={[0.7, 0.25, 140, 20]} />
        <MeshDistortMaterial
          color="#ffc6ff"
          distort={0.45}
          speed={2.5}
          roughness={0}
          metalness={0.9}
          envMapIntensity={3}
          transparent
          opacity={0.85}
        />
      </mesh>
    </Float>
  );
};

/* ── Design 2: Orb Ring System ── */
const OrbRingSystem = () => {
  const groupRef = useRef<Group>(null!);
  useFrame(({ clock }) => {
    groupRef.current.rotation.y = clock.getElapsedTime() * 0.4;
    groupRef.current.rotation.z = clock.getElapsedTime() * 0.15;
  });
  return (
    <Float speed={2} floatIntensity={1.5}>
      <group ref={groupRef} position={[3.8, -0.5, -5]}>
        <mesh>
          <sphereGeometry args={[0.75, 64, 64]} />
          <MeshWobbleMaterial color="#bdb2ff" factor={0.3} speed={2} roughness={0.05} metalness={1} />
        </mesh>
        <mesh rotation={[Math.PI / 2.5, 0.3, 0]}>
          <torusGeometry args={[1.4, 0.08, 16, 100]} />
          <meshStandardMaterial color="#ffc6ff" roughness={0} metalness={1} emissive="#ffc6ff" emissiveIntensity={0.4} />
        </mesh>
        <mesh rotation={[Math.PI / 1.6, 0.6, 0.4]}>
          <torusGeometry args={[1.8, 0.04, 16, 100]} />
          <meshStandardMaterial color="#ffffff" roughness={0} metalness={1} emissive="#bdb2ff" emissiveIntensity={0.6} transparent opacity={0.5} />
        </mesh>
      </group>
    </Float>
  );
};

/* ── Design 3: Diamond Cluster ── */
const DiamondCluster = () => {
  const positions: [number, number, number][] = [
    [0.0,  1.5, -6],
    [-0.8, 0.2, -5.5],
    [0.9,  0.4, -5.8],
    [-0.3,-0.9, -5.3],
    [0.6, -0.6, -6.2],
  ];
  const colors = ['#ffc6ff', '#bdb2ff', '#c084d8', '#ffc6ff', '#bdb2ff'];

  return (
    <>
      {positions.map((pos, i) => (
        <Float key={i} speed={1.5 + i * 0.3} floatIntensity={2 + i * 0.4} rotationIntensity={2}>
          <mesh position={pos} scale={0.28 + i * 0.04}>
            <octahedronGeometry args={[1, 0]} />
            <meshStandardMaterial
              color={colors[i]}
              roughness={0}
              metalness={1}
              emissive={colors[i]}
              emissiveIntensity={0.5}
              transparent
              opacity={0.8}
            />
          </mesh>
        </Float>
      ))}
    </>
  );
};

const Scene3D = () => {
  return (
    <>
      <ambientLight intensity={0.6} color="#ffc6ff" />
      <directionalLight position={[8, 10, 5]} intensity={2} color="#bdb2ff" />
      <pointLight position={[-8, -8, -4]} color="#ffc6ff" intensity={2} />
      <pointLight position={[6, 4, 2]} color="#ffffff" intensity={1} />

      <Stars radius={120} depth={60} count={4000} factor={4} saturation={0} fade speed={0.8} />
      <Sparkles count={200} scale={14} size={2} speed={0.35} opacity={0.7} color="#ffc6ff" />
      <Sparkles count={100} scale={10} size={1.5} speed={0.5} opacity={0.5} color="#bdb2ff" />

      <CrystalHeart />
      <OrbRingSystem />
      <DiamondCluster />

      {/* Light fog matches white bg */}
      <fog attach="fog" args={['#ffffff', 10, 25]} />
    </>
  );
};

export default Scene3D;
