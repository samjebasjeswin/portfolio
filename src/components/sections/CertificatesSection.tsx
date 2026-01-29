'use client';

import { motion } from 'framer-motion';
import { SectionTitle } from './SectionTitle';
import Image from 'next/image';

const certificates = [
    {
        title: "IEEE Conference Paper",
        subtitle: "Autonomous Signal Gesture Recognition",
        image: "/certificate/ieee.png",
        category: "Publication"
    },
    {
        title: "Internship Completion",
        subtitle: "Workcohol",
        image: "/certificate/workcohol.png",
        category: "Experience"
    },
    {
        title: "Ethical Hacking",
        subtitle: "Course Certification",
        image: "/certificate/Ethical hacking.png",
        category: "Certification"
    },
    {
        title: "Ethical Hacking Essentials",
        subtitle: "EHE Certification",
        image: "/certificate/ethical ehe.png",
        category: "Certification"
    },
    {
        title: "Cloud Computing",
        subtitle: "Course Certification",
        image: "/certificate/cloud.png",
        category: "Certification"
    }
];

export const CertificatesSection = () => {
    return (
        <section id="certificates" className="py-20 md:py-32 px-6 sm:px-12 md:px-20 bg-zinc-900/30">
            <div className="max-w-7xl mx-auto">
                <SectionTitle subtitle="Credentials">Certifications & Awards.</SectionTitle>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -10 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative cursor-pointer"
                            onClick={() => window.open(cert.image, '_blank')}
                        >
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-zinc-900">
                                <Image
                                    src={cert.image}
                                    alt={cert.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <span className="text-white bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium border border-white/20">
                                        View Certificate
                                    </span>
                                </div>
                            </div>
                            <div className="mt-4">
                                <span className="text-xs font-mono text-purple-400 uppercase tracking-wider">{cert.category}</span>
                                <h3 className="text-xl font-bold text-white mt-1">{cert.title}</h3>
                                <p className="text-zinc-400 text-sm mt-1">{cert.subtitle}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
