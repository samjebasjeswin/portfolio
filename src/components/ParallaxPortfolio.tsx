'use client';

import { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll as useFramerScroll, useTransform } from 'framer-motion';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, Float, Stars, MeshTransmissionMaterial } from '@react-three/drei';
import NewNavbar from './NewNavbar';

/* -------------------------------------------------------------------------- */
/*                                COMPONENTS                                  */
/* -------------------------------------------------------------------------- */

const SectionTitle = ({ children, subtitle }: { children: React.ReactNode, subtitle?: string }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 relative"
    >
        {subtitle && (
            <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-purple-500 font-mono text-xs uppercase tracking-[0.5em] mb-4"
            >
                {subtitle}
            </motion.p>
        )}
        <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none mb-6">
            {children}
        </h2>
        <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100px' }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"
        />
    </motion.div>
);

const HeroSection = () => {
    const { scrollYProgress } = useFramerScroll();
    const y1 = useTransform(scrollYProgress, [0, 1], [0, 500]);
    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    return (
        <section id="home" className="w-full h-screen flex flex-col justify-center items-start p-10 md:p-20 relative overflow-hidden">
            <motion.div
                style={{ y: y1, opacity }}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="z-10"
            >
                <div className="relative">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.1 }}
                        className="absolute -top-10 -left-10 text-[8rem] md:text-[15rem] font-black text-white pointer-events-none select-none"
                    >
                        SAMJEBAS
                    </motion.span>
                    <h1 className="text-7xl md:text-[11rem] font-black gradient-text tracking-tighter leading-[0.8] relative z-10 drop-shadow-2xl">
                        SAMJEBAS<br />JESWIN K
                    </h1>
                </div>

                <div className="mt-12 space-y-4">
                    <h2 className="text-4xl md:text-6xl font-extralight text-white tracking-[0.3em] opacity-80 uppercase">
                        WordPress & Full-stack Developer
                    </h2>
                    <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl font-light leading-relaxed">
                        Crafting digital universes with <span className="text-purple-400 font-medium">Next.js</span>,
                        architecting backends with <span className="text-blue-400 font-medium">Python</span>,
                        and pushing boundaries with <span className="text-pink-400 font-medium">3D Experiences</span>.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="mt-16 flex gap-8 items-center"
                >
                    <div className="w-12 h-[1px] bg-zinc-700" />
                    <span className="text-zinc-500 font-mono text-sm tracking-widest uppercase animate-pulse">Scroll to explore</span>
                </motion.div>
            </motion.div>
        </section>
    );
};

const VibeSection = () => (
    <section className="w-full min-h-screen py-32 px-10 md:px-20 relative">
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="relative group"
                >
                    <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-[3rem] blur-3xl group-hover:from-purple-600/40 group-hover:to-blue-600/40 transition-all duration-700" />
                    <div className="relative glass-dark rounded-[3rem] p-1 overflow-hidden">
                        <div className="relative aspect-video rounded-[2.8rem] overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop"
                                alt="Coding session"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
                        </div>
                    </div>
                </motion.div>

                <div className="space-y-10">
                    <SectionTitle subtitle="Current Focus">Next.js Development.</SectionTitle>
                    <div className="space-y-6">
                        <p className="text-3xl font-light text-zinc-100 leading-tight">
                            "Currently deep in <span className="text-purple-500 font-bold">Next.js</span> for my upcoming <span className="text-blue-500 font-bold">Premium E-commerce</span> platform."
                        </p>
                        <p className="text-lg text-zinc-400 font-light leading-relaxed">
                            I'm revolutionizing how we think about online shopping by blending artificial intelligence with immersive 3D interfaces. No more boring grids—we're talking about a fluid, cinematic shopping experience that reacts to your vibe.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <div className="glass p-6 rounded-2xl">
                            <span className="text-purple-500 font-bold text-3xl mb-2 block">AI</span>
                            <p className="text-sm text-zinc-500 font-mono uppercase tracking-widest">Personalized Recommendations</p>
                        </div>
                        <div className="glass p-6 rounded-2xl">
                            <span className="text-blue-500 font-bold text-3xl mb-2 block">3D</span>
                            <p className="text-sm text-zinc-500 font-mono uppercase tracking-widest">Interactive Product Showcase</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const AboutSection = () => (
    <section id="about" className="w-full min-h-screen py-32 px-10 md:px-20 bg-zinc-950/20">
        <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
                initial={{ opacity: 0, rotate: -5 }}
                whileInView={{ opacity: 1, rotate: 0 }}
                className="relative aspect-[4/5] rounded-[3rem] overflow-hidden glass group shadow-2xl"
            >
                <Image
                    src="/profile.png"
                    alt="Samjebas"
                    fill
                    className="object-cover object-top transition-all duration-1000 scale-100 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-black/20" />
                <div className="absolute bottom-10 left-10 p-8 glass rounded-2xl backdrop-blur-2xl">
                    <p className="text-white font-black text-4xl leading-tight">THE<br />VISIONARY.</p>
                </div>
            </motion.div>

            <div className="space-y-12">
                <SectionTitle subtitle="Introduction">The Architect.</SectionTitle>
                <div className="space-y-8">
                    <p className="text-3xl text-zinc-200 font-light leading-snug">
                        Building <span className="text-white font-bold border-b-2 border-purple-500">powerful Website</span> with a <span className="text-white font-bold border-b-2 border-blue-500">clean design</span>.
                    </p>
                    <p className="text-xl text-zinc-400 font-light leading-relaxed">
                        I'm a WordPress & Full-stack Developer at <span className="text-white font-medium">SVR GLOBAL SOLUTIONS INDIA</span>. With a background in <span className="text-blue-400">B.Tech CSE</span>, I specialize in building high-performance systems and modern user experiences using <span className="text-purple-400">Next.js</span>.
                    </p>
                </div>

                <div className="flex gap-6">
                    <div className="px-10 py-6 glass rounded-3xl group hover:border-purple-500/50 transition-all">
                        <p className="text-slate-500 text-xs font-mono uppercase mb-2">Experience</p>
                        <p className="text-white font-black text-4xl group-hover:translate-x-2 transition-transform">3<span className="text-purple-500 text-2xl">+</span></p>
                        <p className="text-slate-400 text-sm">Months Pro</p>
                    </div>
                    <div className="px-10 py-6 glass rounded-3xl group hover:border-blue-500/50 transition-all">
                        <p className="text-slate-500 text-xs font-mono uppercase mb-2">Projects</p>
                        <p className="text-white font-black text-4xl group-hover:translate-x-2 transition-transform">7<span className="text-blue-500 text-2xl">+</span></p>
                        <p className="text-slate-400 text-sm">Deployed</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const SkillsSection = () => {
    const categories = [
        { title: "Frontend", skills: ["Next.js", "React.js", "HTML", "CSS", "Javascript", "TailwindCSS"], color: "from-purple-500 to-indigo-600" },
        { title: "Backend", skills: ["Python", "PHP", "MySQL", "REST & GraphQL APIs", "PostgreSQL"], color: "from-blue-500 to-cyan-500" },
        { title: "Tools", skills: ["Git", "GitHub", "VS Code", "Postman", "Browser DevTools (Chrome / Edge DevTools)"], color: "from-pink-500 to-rose-500" }
    ];

    return (
        <section id="skills" className="w-full min-h-screen py-32 px-10 md:px-20 relative">
            <div className="max-w-7xl mx-auto">
                <SectionTitle subtitle="Expertise">Technical Stack.</SectionTitle>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20">
                    {categories.map((cat, i) => (
                        <motion.div
                            key={cat.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
                            className="group p-10 glass-dark rounded-[3rem] hover:ring-2 ring-purple-500/20 transition-all relative overflow-hidden h-full"
                        >
                            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${cat.color} blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity`} />
                            <h3 className="text-4xl font-black text-white mb-10 tracking-tight">{cat.title}</h3>
                            <div className="flex flex-wrap gap-4">
                                {cat.skills.map(skill => (
                                    <span key={skill} className="px-5 py-3 glass rounded-2xl text-zinc-300 text-sm font-medium hover:bg-white/10 transition-colors">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const ExperienceSection = () => {
    const experiences = [
        {
            company: "SVR GLOBAL SOLUTIONS INDIA",
            role: "WordPress & Next.js Full-stack Developer",
            period: "2024 - PRESENT",
            desc: "Architecting high-performance web applications. Engineered custom solutions and optimized backend efficiency for large-scale industrial platforms across the globe."
        },
        {
            company: "WORKCOHOL",
            role: "WordPress Developer Intern",
            period: "JAN 2025 - MAR 2025",
            desc: "Architecting high-performance web applications using the Python/React stack. Improving core metrics and shipping production-ready code in an agile loop."
        }
    ];

    return (
        <section id="experience" className="w-full min-h-screen py-32 px-10 md:px-20">
            <div className="max-w-5xl mx-auto">
                <SectionTitle subtitle="Journey">Experience.</SectionTitle>
                <div className="space-y-16 mt-20">
                    {experiences.map((exp, i) => (
                        <motion.div
                            key={exp.company}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="relative pl-16 group"
                        >
                            <div className="absolute left-0 top-0 w-1 h-full bg-zinc-800 rounded-full group-hover:bg-purple-600 transition-colors" />
                            <div className="absolute left-[-8px] top-0 w-5 h-5 rounded-full bg-zinc-950 border-4 border-zinc-800 group-hover:border-purple-600 transition-colors" />

                            <p className="text-purple-500 font-mono text-xs tracking-[0.3em] mb-4">{exp.period}</p>
                            <h3 className="text-4xl font-bold text-white mb-2">{exp.role}</h3>
                            <p className="text-2xl text-zinc-500 mb-8">{exp.company}</p>
                            <p className="text-xl text-zinc-400 font-light leading-relaxed max-w-3xl">{exp.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const ProjectsSection = () => {
    const projects = [
        {
            title: "Visionary AI E-commerce",
            desc: "A Next.js full-stack platform revolutionizing shopping with 3D interfaces and AI-driven personalization for SVR Global.",
            tech: ["Next.js", "Three.js", "AI", "TailwindCSS"],
            color: "from-indigo-600 to-purple-600"
        },
        {
            title: "African Valve Global",
            desc: "Architected a high-performance industrial ecosystem. Integrated Next.js frontend with WordPress via GraphQL for full-stack data flow.",
            tech: ["Next.js", "GraphQL", "WordPress"],
            color: "from-blue-600 to-cyan-500",
            link: "https://www.africanvalve.com/"
        },
        {
            title: "Speciality Valve Engineering",
            desc: "Engineered complex backend logic and custom UI components using PHP and CSS for a major industrial manufacturer.",
            tech: ["PHP", "CSS", "WordPress"],
            color: "from-purple-600 to-indigo-600",
            link: "https://www.specialityvalve.com/"
        },
        {
            title: "UAE Valve Solutions",
            desc: "Developed a mission-critical regional platform optimized for performance and high-ranking search visibility.",
            tech: ["WordPress", "SEO", "Performance"],
            color: "from-red-600 to-rose-600",
            link: "https://www.uaevalves.com/"
        },
        {
            title: "ANPR Traffic Intelligence",
            desc: "Advanced license plate recognition system utilizing Computer Vision and Tesseract for real-time data retrieval.",
            tech: ["Python", "OpenCV", "Tesseract", "Pandas"],
            color: "from-emerald-600 to-teal-500"
        },
        {
            title: "Autonomous Signal Recognition",
            desc: "Deep learning system for gesture recognition, enabling autonomous vehicle interaction via TensorFlow.",
            tech: ["TensorFlow", "MediaPipe", "AI"],
            color: "from-violet-600 to-pink-600"
        }
    ];

    return (
        <section id="projects" className="section-padding">
            <div className="max-w-7xl mx-auto">
                <SectionTitle subtitle="Showcase">Recent Work.</SectionTitle>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
                    {projects.map((proj, i) => (
                        <motion.div
                            key={proj.title}
                            whileHover={{ y: -20 }}
                            className="group glass-dark rounded-[3.5rem] overflow-hidden border border-white/5 relative cursor-pointer"
                            onClick={() => proj.link && window.open(proj.link, '_blank')}
                        >
                            <div className={`h-64 bg-gradient-to-br ${proj.color} p-12 flex flex-col justify-end relative overflow-hidden`}>
                                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
                                <h4 className="text-4xl font-black text-white tracking-tighter uppercase relative z-10">{proj.title}</h4>
                            </div>
                            <div className="p-10 space-y-6">
                                <p className="text-zinc-400 font-light leading-relaxed">{proj.desc}</p>
                                <div className="flex flex-wrap gap-2">
                                    {proj.tech.map(t => (
                                        <span key={t} className="px-3 py-1 glass text-[10px] font-mono text-zinc-300 rounded-lg">{t}</span>
                                    ))}
                                </div>
                                {proj.link && (
                                    <div className="pt-2">
                                        <span className="text-white text-xs font-mono uppercase tracking-widest border-b border-white/20 pb-1 group-hover:border-white transition-colors">Visit Project →</span>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const ContactSection = () => (
    <section id="contact" className="section-padding flex flex-col items-center text-center">
        <div className="max-w-4xl glass-dark rounded-[4rem] p-16 md:p-32 relative overflow-hidden">
            <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-purple-600/10 blur-[120px] rounded-full" />
            <SectionTitle subtitle="Connect">Start a Project.</SectionTitle>
            <p className="text-3xl font-light text-zinc-400 mb-20 leading-snug">
                Let's build something that <span className="text-white font-bold italic">shakes</span> the industry.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div className="space-y-2">
                    <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Email</p>
                    <p className="text-2xl font-black text-white hover:text-purple-400 transition-colors cursor-pointer">jeswinsam287@gmail.com</p>
                </div>
                <div className="space-y-2">
                    <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Phone</p>
                    <p className="text-2xl font-black text-white">+91 8925091475</p>
                </div>
            </div>

            <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 50px rgba(139, 92, 246, 0.3)' }}
                whileTap={{ scale: 0.98 }}
                className="mt-20 w-full md:w-auto px-20 py-8 bg-white text-black font-black text-2xl rounded-[1.5rem] hover:bg-zinc-100 transition-all relative overflow-hidden group shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
            >
                <span className="relative z-10">CONTACT ME NOW</span>
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-10 transition-opacity"
                />
            </motion.button>
        </div>
    </section>
);

/* -------------------------------------------------------------------------- */
/*                                3D SCENE                                    */
/* -------------------------------------------------------------------------- */

function Scene3D({ scrollProgress }: { scrollProgress: number }) {
    const { viewport } = useThree();
    const groupRef = useRef<THREE.Group>(null);
    const torusRef = useRef<THREE.Mesh>(null);
    const blobRef = useRef<THREE.Mesh>(null);

    useFrame((state, delta) => {
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
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

            <Float speed={2} rotationIntensity={1} floatIntensity={1}>
                <mesh ref={torusRef} position={[viewport.width / 3, 0, -2]}>
                    <torusGeometry args={[1.5, 0.4, 32, 100]} />
                    <MeshTransmissionMaterial
                        backside
                        samples={8}
                        thickness={2}
                        chromaticAberration={0.02}
                        anisotropy={0.1}
                        distortion={0.1}
                        distortionScale={0.1}
                        temporalDistortion={0.1}
                        color="#8b5cf6"
                    />
                </mesh>
            </Float>

            <Float speed={5} rotationIntensity={2} floatIntensity={2}>
                <mesh ref={blobRef} position={[-viewport.width / 4, -2, -3]}>
                    <icosahedronGeometry args={[1, 15]} />
                    <meshStandardMaterial color="#3b82f6" wireframe opacity={0.3} transparent />
                </mesh>
            </Float>
        </group>
    );
}

/* -------------------------------------------------------------------------- */
/*                               MAIN PAGE                                   */
/* -------------------------------------------------------------------------- */

export default function ParallaxPortfolio() {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY;
            const height = document.documentElement.scrollHeight - window.innerHeight;
            const progress = height > 0 ? scrolled / height : 0;
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="w-full relative bg-zinc-950 font-sans selection:bg-purple-500/40 overflow-x-hidden">
            <NewNavbar />

            {/* 3D Background */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-60">
                <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                    <ambientLight intensity={0.5} />
                    <spotLight position={[10, 10, 10]} angle={0.2} penumbra={1} intensity={2} />
                    <pointLight position={[-10, -10, -10]} color="#3b82f6" intensity={1} />
                    <Environment preset="night" />
                    <Scene3D scrollProgress={scrollProgress} />
                </Canvas>
            </div>

            {/* HTML Content */}
            <div className="relative z-10 w-full mt-20">
                <HeroSection />
                <VibeSection />
                <AboutSection />
                <SkillsSection />
                <ProjectsSection />
                <ExperienceSection />
                <ContactSection />
            </div>

            <footer className="section-padding text-center text-zinc-700 text-xs font-mono uppercase tracking-[0.5em] border-t border-white/5 relative z-10 bg-zinc-950/80 backdrop-blur-xl">
                © 2025 SAMJEBAS. <span className="text-purple-500/50">Engineered with Passion.</span>
            </footer>
        </div>
    );
}
