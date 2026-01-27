'use client';

import { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import {
    useScroll,
    ScrollControls,
    Environment,
    Float,
    Stars,
    MeshTransmissionMaterial
} from '@react-three/drei';
import * as THREE from 'three';

function FloatingShapes() {
    const { viewport } = useThree();
    const scroll = useScroll();

    const groupRef = useRef<THREE.Group>(null);
    const donutRef = useRef<THREE.Mesh>(null);
    const icoRef = useRef<THREE.Mesh>(null);
    const boxRef = useRef<THREE.Mesh>(null);

    useFrame((state, delta) => {
        // Scroll offset (0 to 1)
        const offset = scroll.offset;

        // Define specific ranges for staggered animations
        const r1 = scroll.range(0, 1 / 3); // First section
        const r2 = scroll.range(1 / 3, 1 / 3); // Middle section
        const r3 = scroll.range(2 / 3, 1 / 3); // Final section

        if (groupRef.current) {
            // Smoothly rotate the entire scene as we scroll
            groupRef.current.rotation.y = THREE.MathUtils.damp(
                groupRef.current.rotation.y,
                -offset * Math.PI,
                4,
                delta
            );
        }

        if (donutRef.current) {
            // Donut reacts to first part of scroll
            donutRef.current.rotation.x += delta * 0.2;
            donutRef.current.position.x = THREE.MathUtils.lerp(viewport.width / 4, -viewport.width / 4, r1);
        }

        if (icoRef.current) {
            // Icosahedron reacts to middle part of scroll
            icoRef.current.rotation.y += delta * 0.4;
            icoRef.current.position.y = THREE.MathUtils.lerp(-3, 3, r2);
        }

        if (boxRef.current) {
            // Box reacts to final part of scroll
            boxRef.current.rotation.z += delta * 0.1;
            boxRef.current.scale.setScalar(THREE.MathUtils.lerp(1.2, 2, r3));
        }
    });

    return (
        <group ref={groupRef}>
            {/* Donut - Glassy Torus */}
            <Float speed={2} rotationIntensity={1} floatIntensity={1}>
                <mesh ref={donutRef} position={[viewport.width / 4, 0, -2]} scale={1.5}>
                    <torusGeometry args={[1, 0.3, 32, 64]} />
                    <MeshTransmissionMaterial
                        backside
                        samples={4}
                        thickness={1}
                        chromaticAberration={0.02}
                        anisotropy={0.1}
                        distortion={0.1}
                        distortionScale={0.1}
                        temporalDistortion={0.1}
                        color="#8b5cf6"
                    />
                </mesh>
            </Float>

            {/* Icosahedron - Wireframe Pink */}
            <Float speed={3} rotationIntensity={2} floatIntensity={1.5}>
                <mesh ref={icoRef} position={[-viewport.width / 5, -3, -5]} scale={1.8}>
                    <icosahedronGeometry args={[1, 0]} />
                    <meshStandardMaterial color="#ec4899" wireframe />
                </mesh>
            </Float>

            {/* Box - Sleek Blue Metal */}
            <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
                <mesh ref={boxRef} position={[viewport.width / 3, -viewport.height / 2, -3]} scale={1.2}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshPhysicalMaterial
                        color="#3b82f6"
                        metalness={0.9}
                        roughness={0.1}
                        reflectivity={1}
                    />
                </mesh>
            </Float>
        </group>
    );
}

const BackgroundScene = () => {
    return (
        <div className='fixed top-0 left-0 w-full h-full -z-10 pointer-events-none'>
            <Canvas camera={{ position: [0, 0, 5], fov: 50 }} dpr={[1, 2]}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
                <pointLight position={[-10, -10, -10]} intensity={1} />

                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

                <ScrollControls pages={4} damping={0.2}>
                    <FloatingShapes />
                </ScrollControls>

                <Environment preset="city" />
            </Canvas>
        </div>
    );
};

export default BackgroundScene;

