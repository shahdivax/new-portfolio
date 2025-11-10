"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useTexture, OrbitControls } from "@react-three/drei";
import type { Group, Texture } from "three";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";

function toRad(d: number) { return (d * Math.PI) / 180; }

function RotatingSphere({
  mapSrc,
  cloudsSrc,
  cloudsAlphaSrc,
  specularSrc,
  tiltDeg = 23.4,
  speed = 0.015,
}: {
  mapSrc: string;
  cloudsSrc?: string;
  cloudsAlphaSrc?: string;
  specularSrc?: string;
  tiltDeg?: number;
  speed?: number; // radians per second
}) {
  const group = useRef<Group>(null!);
  const controlsRef = useRef<OrbitControlsImpl>(null!);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const lastInteractionTime = useRef<number>(Date.now());
  const inactivityTimeout = useRef<NodeJS.Timeout | undefined>(undefined);
  
  const { gl } = useThree();

  // Always load valid URLs to avoid loader errors; fall back to base map
  const maps = useTexture([
    mapSrc,
    specularSrc ?? mapSrc,
    cloudsSrc ?? mapSrc,
    cloudsAlphaSrc ?? mapSrc,
  ]) as unknown as [
    Texture,
    Texture | undefined,
    Texture | undefined,
    Texture | undefined
  ];
  const [map, spec, clouds, cloudsAlpha] = maps;
  const cloudMat = useMemo(() => ({ transparent: true, depthWrite: false }), []);

  // Handle interaction events
  useEffect(() => {
    const handleInteraction = () => {
      setIsAutoRotating(false);
      lastInteractionTime.current = Date.now();
      
      // Clear existing timeout
      if (inactivityTimeout.current) {
        clearTimeout(inactivityTimeout.current);
      }
      
      // Set new timeout for 15 seconds (15000ms)
      inactivityTimeout.current = setTimeout(() => {
        setIsAutoRotating(true);
      }, 15000);
    };

    const canvas = gl.domElement;
    
    // Listen for both mouse and touch events
    canvas.addEventListener('mousedown', handleInteraction);
    canvas.addEventListener('touchstart', handleInteraction);

    return () => {
      canvas.removeEventListener('mousedown', handleInteraction);
      canvas.removeEventListener('touchstart', handleInteraction);
      if (inactivityTimeout.current) {
        clearTimeout(inactivityTimeout.current);
      }
    };
  }, [gl]);

  useFrame((_s, delta) => {
    if (!group.current) return;
    
    // Only auto-rotate when not being dragged
    if (isAutoRotating && controlsRef.current) {
      group.current.rotation.y += speed * delta;
    }
  });

  return (
    <>
      <OrbitControls
        ref={controlsRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.5}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={(3 * Math.PI) / 4}
      />
      <group ref={group} rotation={[0, 0, toRad(tiltDeg)]}>
        <mesh>
          <sphereGeometry args={[1, 128, 128]} />
          {spec ? (
            <meshPhongMaterial map={map} specularMap={spec} shininess={7} />
          ) : (
            <meshLambertMaterial map={map} />
          )}
        </mesh>
        {clouds && (
          <mesh scale={1.008}>
            <sphereGeometry args={[1, 128, 128]} />
            <meshLambertMaterial map={clouds} alphaMap={cloudsAlpha} {...cloudMat} />
          </mesh>
        )}
      </group>
    </>
  );
}

export function PlanetCanvas({
  mapSrc,
  cloudsSrc,
  cloudsAlphaSrc,
  specularSrc,
  camera = [0, 0, 2.8],
  tiltDeg,
  speed,
}: {
  mapSrc: string;
  cloudsSrc?: string;
  cloudsAlphaSrc?: string;
  specularSrc?: string;
  camera?: [number, number, number];
  tiltDeg?: number;
  speed?: number;
}) {
  return (
    <div className="absolute inset-0 rounded-3xl" aria-hidden>
      <Canvas
        camera={{ position: camera, fov: 45 }}
        style={{ width: "100%", height: "100%" }}
        onCreated={({ gl }) => {
          // Ensure planet fully fits on very small containers
          gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        }}
      >
        <ambientLight intensity={0.45} />
        <directionalLight position={[4, 4, 6]} intensity={0.9} color="#fff5e1" />
        <directionalLight position={[-6, -3, -2]} intensity={0.25} color="#a7f3d0" />
        <RotatingSphere
          mapSrc={mapSrc}
          cloudsSrc={cloudsSrc}
          cloudsAlphaSrc={cloudsAlphaSrc}
          specularSrc={specularSrc}
          tiltDeg={tiltDeg}
          speed={speed}
        />
      </Canvas>
    </div>
  );
}

