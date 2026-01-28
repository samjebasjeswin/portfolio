'use client';

import { useState, useEffect, Suspense } from 'react';
import dynamic from 'next/dynamic';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import NewNavbar from './NewNavbar';

// Performance optimization: Dynamic imports for all sections
const HeroSection = dynamic(() => import('./sections/HeroSection').then(m => m.HeroSection), {
    ssr: false,
    loading: () => <div className="min-h-screen" />
});
const VibeSection = dynamic(() => import('./sections/VibeSection').then(m => m.VibeSection), {
    ssr: false
});
const AboutSection = dynamic(() => import('./sections/AboutSection').then(m => m.AboutSection), {
    ssr: false
});
const SkillsSection = dynamic(() => import('./sections/SkillsSection').then(m => m.SkillsSection), {
    ssr: false
});
const ProjectsSection = dynamic(() => import('./sections/ProjectsSection').then(m => m.ProjectsSection), {
    ssr: false
});
const ExperienceSection = dynamic(() => import('./sections/ExperienceSection').then(m => m.ExperienceSection), {
    ssr: false
});
const ContactSection = dynamic(() => import('./sections/ContactSection').then(m => m.ContactSection), {
    ssr: false
});
const ContactModal = dynamic(() => import('./sections/ContactModal').then(m => m.ContactModal), {
    ssr: false
});
const Scene3D = dynamic(() => import('./3d/Scene3D').then(m => m.Scene3D), {
    ssr: false
});

export default function ParallaxPortfolio() {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        let rafId: number;

        const handleScroll = () => {
            const scrolled = window.scrollY;
            const height = document.documentElement.scrollHeight - window.innerHeight;
            const progress = height > 0 ? scrolled / height : 0;
            setScrollProgress(progress);
        };

        const onScroll = () => {
            cancelAnimationFrame(rafId);
            rafId = requestAnimationFrame(handleScroll);
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        handleScroll();

        return () => {
            window.removeEventListener('scroll', onScroll);
            cancelAnimationFrame(rafId);
        };
    }, []);

    if (!isMounted) return <div className="bg-zinc-950 min-h-screen" />;

    return (
        <div className="w-full relative bg-zinc-950 font-sans selection:bg-purple-500/40 overflow-x-hidden">
            <NewNavbar onContactClick={() => setIsContactOpen(true)} />

            {/* 3D Background - High performance config */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-80 overflow-hidden">
                <Suspense fallback={null}>
                    <Canvas
                        camera={{ position: [0, 0, 5], fov: 50 }}
                        dpr={[1, 2]} // Performance: limit DPR on high-res screens
                        gl={{
                            antialias: false, // Performance: disable antialias
                            powerPreference: "high-performance",
                            stencil: false,
                            depth: true
                        }}
                    >
                        <color attach="background" args={['#030303']} />
                        <ambientLight intensity={1} />
                        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} />
                        <pointLight position={[-10, -10, -10]} color="#8b5cf6" intensity={1} />
                        <Environment preset="night" />
                        <Scene3D scrollProgress={scrollProgress} />
                    </Canvas>
                </Suspense>
            </div>

            {/* HTML Content */}
            <div className="relative z-10 w-full mt-20">
                <HeroSection />
                <VibeSection />
                <AboutSection />
                <SkillsSection />
                <ProjectsSection />
                <ExperienceSection />
                <ContactSection onContactClick={() => setIsContactOpen(true)} />
            </div>

            <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

            <footer className="section-padding text-center text-zinc-700 text-xs font-mono uppercase tracking-[0.5em] border-t border-white/5 relative z-10 bg-zinc-950/80 backdrop-blur-xl">
                © 2026 SAMJEBAS. <span className="text-purple-500/50">Engineered with Passion.</span>
            </footer>
        </div>
    );
}
