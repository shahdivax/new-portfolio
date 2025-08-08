"use client";

import { Canvas } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useMemo } from "react";

export function ProjectAccent() {
  const count = 500;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) arr[i] = (Math.random() - 0.5) * 6;
    return arr;
  }, []);
  return (
    <div className="absolute inset-0 -z-10 opacity-60">
      <Canvas camera={{ position: [0, 0, 4] }}>
        <Points positions={positions} stride={3} limit={count} frustumCulled>
          <PointMaterial color="#0f766e" size={0.015} sizeAttenuation transparent opacity={0.35} />
        </Points>
      </Canvas>
    </div>
  );
}

