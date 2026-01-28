'use client';

import { useRef, useMemo, useEffect, useState } from 'react';
import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import { Float, Stars, MeshTransmissionMaterial, Preload, AdaptiveDpr, AdaptiveEvents } from '@react-three/drei';

export const Scene3D = ({ scrollProgress }: { scrollProgress: number }) => {
    const { viewport } = useThree();
    const groupRef = useRef<THREE.Group>(null);
    const torusRef = useRef<THREE.Mesh>(null);
    const blobRef = useRef<THREE.Mesh>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Memoize geometries for performance
    const geometries = useMemo(() => ({
        torus: new THREE.TorusGeometry(1.5, 0.4, isMobile ? 16 : 32, isMobile ? 50 : 100),
        blob: new THREE.IcosahedronGeometry(1.2, isMobile ? 4 : 15),
        circle: new THREE.CircleGeometry(2.5, 32),
        smallCircle: new THREE.CircleGeometry(2, 32)
    }), [isMobile]);

    useFrame((state, delta) => {
        // Limit frame processing
        if (groupRef.current) {
            const targetRotation = scrollProgress * Math.PI * 0.5;
            groupRef.current.rotation.y = THREE.MathUtils.damp(groupRef.current.rotation.y, targetRotation, 4, delta);
        }

        if (torusRef.current) {
            torusRef.current.rotation.x += delta * 0.2;
            torusRef.current.rotation.y += delta * 0.1;
            const targetY = THREE.MathUtils.lerp(2, -5, scrollProgress);
            torusRef.current.position.y = THREE.MathUtils.damp(torusRef.current.position.y, targetY, 4, delta);
        }

        if (blobRef.current) {
            blobRef.current.rotation.z += delta * 0.5;
            const scale = 1 + Math.sin(state.clock.elapsedTime) * 0.1;
            blobRef.current.scale.setScalar(scale);
        }
    });

    return (
        <group ref={groupRef}>
            <AdaptiveDpr pixelated />
            <AdaptiveEvents />

            <Stars
                radius={100}
                depth={50}
                count={isMobile ? 2000 : 5000}
                factor={4}
                saturation={0}
                fade
                speed={1}
            />

            <Float speed={2} rotationIntensity={isMobile ? 0.5 : 1} floatIntensity={1}>
                <group position={[viewport.width / 3, 0, -2]}>
                    {/* Background Circle for the Torus */}
                    <mesh position={[0, 0, -1]} geometry={geometries.circle}>
                        <meshBasicMaterial color="#4c1d95" transparent opacity={0.1} />
                    </mesh>

                    <mesh ref={torusRef} geometry={geometries.torus}>
                        <MeshTransmissionMaterial
                            backside
                            samples={isMobile ? 4 : 16}
                            thickness={1.5}
                            chromaticAberration={0.05}
                            anisotropy={0.3}
                            distortion={0.3}
                            distortionScale={0.5}
                            temporalDistortion={0.1}
                            color="#a855f7"
                        />
                    </mesh>
                </group>
            </Float>

            <Float speed={5} rotationIntensity={isMobile ? 1 : 2} floatIntensity={2}>
                <group position={[-viewport.width / 4, -2, -3]}>
                    <mesh position={[0, 0, -1]} geometry={geometries.smallCircle}>
                        <meshBasicMaterial color="#1e3a8a" transparent opacity={0.1} />
                    </mesh>

                    <mesh ref={blobRef} geometry={geometries.blob}>
                        <meshStandardMaterial
                            color="#3b82f6"
                            emissive="#1e40af"
                            emissiveIntensity={0.5}
                            wireframe
                            opacity={0.4}
                            transparent
                        />
                    </mesh>
                </group>
            </Float>

            <Preload all />
        </group>
    );
};
