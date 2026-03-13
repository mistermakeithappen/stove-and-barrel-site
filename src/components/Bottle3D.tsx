"use client";
import { useRef, Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

function BottleModel({ mousePos, scrollY }: { mousePos: { x: number; y: number }; scrollY: number }) {
  const ref = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/assets/bottle.glb");

  useFrame(() => {
    if (!ref.current) return;
    // Rotation directly driven by scroll position
    const targetY = scrollY * 0.003;
    ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, targetY, 0.08);
    // Mouse tilt on X axis
    ref.current.rotation.x = THREE.MathUtils.lerp(
      ref.current.rotation.x,
      mousePos.y * 0.15,
      0.05
    );
  });

  return (
    <group ref={ref} scale={[1.5, 1.5, 1.5]} position={[0, -0.3, 0]}>
      <primitive object={scene.clone()} />
    </group>
  );
}

function Fallback() {
  return null;
}

export default function Bottle3D({
  mousePos,
}: {
  mousePos: { x: number; y: number };
}) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 35 }}
      style={{ width: "100%", height: "100%" }}
      gl={{ antialias: true, alpha: true }}
    >
      {/* Low ambient — let directional lights do the work */}
      <ambientLight intensity={0.15} />
      {/* Key light: right side, warm amber — main illumination */}
      <directionalLight position={[5, 1, 2]} intensity={2.0} color="#f4a84a" />
      {/* Rim light: back-right — glass edge definition */}
      <directionalLight position={[3, 4, -4]} intensity={0.8} color="#ccb186" />
      {/* Fill light: left side, very dim cool — just enough to show shape */}
      <directionalLight position={[-4, 1, 1]} intensity={0.2} color="#8899aa" />
      <Suspense fallback={<Fallback />}>
        <BottleModel mousePos={mousePos} scrollY={scrollY} />
        <Environment preset="warehouse" />
        <ContactShadows
          position={[0, -1.5, 0]}
          opacity={0.4}
          scale={4}
          blur={2}
          color="#3d2b1a"
        />
      </Suspense>
    </Canvas>
  );
}
