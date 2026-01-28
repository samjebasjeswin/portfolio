'use client';

import { motion } from 'framer-motion';
import { SectionTitle } from './SectionTitle';

const projects = [
    {
        title: "Visionary E-commerce",
        desc: "A Next.js full-stack platform revolutionizing shopping with 3D interfaces and AI-driven personalization for SVR Global.",
        tech: ["Next.js", "Three.js", "AI", "TailwindCSS"],
        color: "from-indigo-600 to-purple-600"
    },
    {
        title: "African Valve ",
        desc: "Architected a high-performance industrial ecosystem. Integrated Next.js frontend with WordPress via GraphQL for full-stack data flow.",
        tech: ["Next.js", "GraphQL", "WordPress"],
        color: "from-blue-600 to-cyan-500",
        link: "https://www.africanvalve.com/"
    },
    {
        title: "Speciality Valve",
        desc: "Engineered complex backend logic and custom UI components using PHP and CSS for a major industrial manufacturer.",
        tech: ["PHP", "CSS", "WordPress"],
        color: "from-purple-600 to-indigo-600",
        link: "https://www.specialityvalve.com/"
    },
    {
        title: "UAE Valve",
        desc: "Developed a mission-critical regional platform optimized for performance and high-ranking search visibility.",
        tech: ["WordPress", "SEO", "Performance"],
        color: "from-red-600 to-rose-600",
        link: "https://www.uaevalves.com/"
    },
    {
        title: "ANPR Traffic Intelligence",
        desc: "An advanced license plate recognition system utilizing Computer Vision and Tesseract for real-time data retrieval.",
        tech: ["Python", "OpenCV", "Tesseract", "Pandas"],
        color: "from-emerald-600 to-teal-500"
    },
    {
        title: "Autonomous Signal Gesture Recognition",
        desc: "A deep learning-powered gesture recognition system for autonomous vehicle interaction using TensorFlow.",
        tech: ["TensorFlow", "MediaPipe", "AI"],
        color: "from-violet-600 to-pink-600"
    }
];

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-20 md:py-32 px-6 sm:px-12 md:px-20">
            <div className="max-w-7xl mx-auto">
                <SectionTitle subtitle="Showcase">Project Highlights.</SectionTitle>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-16 md:mt-20">
                    {projects.map((proj, i) => (
                        <motion.div
                            key={proj.title}
                            whileHover={{ y: -15 }}
                            className="group glass-dark rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden border border-white/5 relative cursor-pointer"
                            onClick={() => proj.link && window.open(proj.link, '_blank')}
                        >
                            <div className={`h-48 md:h-64 bg-gradient-to-br ${proj.color} p-8 md:p-12 flex flex-col items-center justify-center text-center relative overflow-hidden`}>
                                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
                                <h4 className="text-xl md:text-3xl font-black text-white tracking-tighter uppercase relative z-10 leading-tight text-center">{proj.title}</h4>
                            </div>
                            <div className="p-8 md:p-10 space-y-4 md:space-y-6">
                                <p className="text-xs md:text-sm text-zinc-400 font-light leading-relaxed">{proj.desc}</p>
                                <div className="flex flex-wrap gap-2">
                                    {proj.tech.map(t => (
                                        <span key={t} className="px-2.5 py-1 glass text-[9px] md:text-[10px] font-mono text-zinc-300 rounded-lg">{t}</span>
                                    ))}
                                </div>
                                {proj.link && (
                                    <div className="pt-2">
                                        <span className="text-white text-[10px] md:text-xs font-mono uppercase tracking-widest border-b border-white/20 pb-1 group-hover:border-white transition-colors">Visit Project →</span>
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
