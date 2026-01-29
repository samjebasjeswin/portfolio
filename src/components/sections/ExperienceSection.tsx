'use client';

import { motion } from 'framer-motion';
import { SectionTitle } from './SectionTitle';

const experiences = [
    {
        company: "SVR GLOBAL SOLUTIONS INDIA",
        role: "WordPress & Full-stack Developer",
        period: "OCT 2025 - PRESENT",
        desc: "Began as a Developer Trainee in October 2025 and transitioned to Full-time status in January 2026. Delivering full-stack solutions with Next.js, GraphQL, MySQL, and REST APIs for industrial-grade platforms."
    },
    {
        company: "WORKCOHOL | CHENNAI",
        role: "Software Engineer Intern",
        period: "JAN 2025 - MAR 2025",
        desc: "Contributed to real-world projects using Python, Django, MySQL, and React.js. Focused on creating RESTful APIs, database integration, and performance optimization within an agile team environment."
    },
    {
        company: "MEITHIRAN LEARNING COMMUNITY",
        role: "WordPress Developer Trainee",
        period: "AUG 18 2024 - OCT 9 2024",
        desc: "Completed an immersive simulation of the professional software development lifecycle. Mastered Git Flow and Agile Scrum methodologies, developing best practices for sprint ceremonies and daily stand-ups. Learned to effectively collaborate with QA engineers and Business Analysts (BAs) to align code with client requirements. Technical training included rigorous sessions on WordPress theme development, API integration, and Next.js concepts."
    },
    {
        company: "LIVE STREAM TECHNOLOGIES | COIMBATORE",
        role: "Web Development Intern",
        period: "JUNE 2022 - JULY 2022",
        desc: "Gained hands-on experience in web development using HTML, CSS, Python, and MySQL. Developed responsive pages and worked on Python-based backend development, including REST APIs and user authentication."
    }
];

export const ExperienceSection = () => {
    return (
        <section id="experience" className="w-full min-h-screen py-20 md:py-32 px-6 sm:px-12 md:px-20">
            <div className="max-w-5xl mx-auto">
                <SectionTitle subtitle="Journey">Experience.</SectionTitle>
                <div className="space-y-12 md:space-y-16 mt-16 md:mt-20">
                    {experiences.map((exp, i) => (
                        <motion.div
                            key={exp.company}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="relative pl-10 md:pl-16 group"
                        >
                            <div className="absolute left-0 top-0 w-1 h-full bg-zinc-800 rounded-full group-hover:bg-purple-600 transition-colors" />
                            <div className="absolute left-[-8px] top-0 w-5 h-5 rounded-full bg-zinc-950 border-4 border-zinc-800 group-hover:border-purple-600 transition-colors" />

                            <p className="text-purple-500 font-mono text-[10px] md:text-xs tracking-[0.3em] mb-3 md:mb-4">{exp.period}</p>
                            <h3 className="text-xl md:text-3xl font-bold text-white mb-2">{exp.role}</h3>
                            <p className="text-base md:text-xl text-zinc-500 mb-6 md:mb-8">{exp.company}</p>
                            <p className="text-sm md:text-lg text-zinc-400 font-light leading-relaxed max-w-3xl">{exp.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
