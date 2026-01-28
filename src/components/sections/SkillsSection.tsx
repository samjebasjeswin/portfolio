'use client';

import { motion } from 'framer-motion';
import { SectionTitle } from './SectionTitle';

const categories = [
    { title: "Frontend", skills: ["Next.js", "React.js", "HTML", "CSS", "Javascript", "TailwindCSS"], color: "from-purple-500 to-indigo-600" },
    { title: "Backend", skills: ["Python", "PHP", "MySQL", "PostgreSQL", "REST & GraphQL"], color: "from-blue-500 to-cyan-500" },
    { title: "AI & CV", skills: ["OpenCV", "TensorFlow", "MediaPipe", "Tesseract", "Pandas"], color: "from-emerald-500 to-teal-500" },
    { title: "Tools", skills: ["Git", "GitHub", "VS Code", "Postman", "DevTools"], color: "from-pink-500 to-rose-500" }
];

export const SkillsSection = () => {
    return (
        <section id="skills" className="w-full min-h-screen py-20 md:py-32 px-6 sm:px-12 md:px-20 relative">
            <div className="max-w-7xl mx-auto">
                <SectionTitle subtitle="Expertise">Technical Stack.</SectionTitle>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 mt-16 md:mt-20">
                    {categories.map((cat, i) => (
                        <motion.div
                            key={cat.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="group p-8 md:p-10 glass-dark rounded-[2.5rem] md:rounded-[3rem] hover:ring-2 ring-purple-500/20 transition-all relative overflow-hidden h-full"
                        >
                            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${cat.color} blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity`} />
                            <h3 className="text-2xl md:text-3xl font-black text-white mb-8 md:mb-10 tracking-tight">{cat.title}</h3>
                            <div className="flex flex-wrap gap-3 md:gap-4">
                                {cat.skills.map(skill => (
                                    <span key={skill} className="px-4 py-2 md:px-5 md:py-3 glass rounded-xl md:rounded-2xl text-zinc-300 text-xs md:text-sm font-medium hover:bg-white/10 transition-colors">
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
