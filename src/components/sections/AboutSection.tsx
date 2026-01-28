'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { SectionTitle } from './SectionTitle';

export const AboutSection = () => (
    <section id="about" className="w-full min-h-screen py-20 md:py-32 px-6 sm:px-12 md:px-20 bg-zinc-950/20 flex items-center">
        <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
            <motion.div
                initial={{ opacity: 0, rotate: -3 }}
                whileInView={{ opacity: 1, rotate: 0 }}
                className="relative aspect-[4/5] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden glass group shadow-2xl"
            >
                <Image
                    src="/profile.png"
                    alt="Samjebas"
                    fill
                    sizes="(max-width: 1024px) 90vw, 40vw"
                    className="object-cover object-top transition-all duration-1000 scale-100 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-black/20" />
                <div className="absolute bottom-4 left-4 right-4 md:bottom-10 md:left-10 md:right-10 p-5 md:p-8 glass rounded-[1.5rem] md:rounded-[2rem] backdrop-blur-3xl border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.5)] group-hover:border-purple-500/30 transition-all duration-700">
                    <div className="relative">
                        <div className="absolute -top-10 -left-6 w-16 h-16 bg-purple-600/10 blur-3xl rounded-full" />
                        <div>
                            <h3 className="text-white font-black text-lg sm:text-xl md:text-2xl tracking-tighter leading-[0.9]">
                                THE<br />
                                <span className="gradient-text">  FULL-STACK MIND.</span>
                            </h3>
                        </div>
                    </div>
                </div>
            </motion.div>

            <div className="space-y-8 md:space-y-12">
                <SectionTitle subtitle="Introduction" headingSize="text-3xl sm:text-4xl md:text-5xl">The<br />Digital Architect.</SectionTitle>
                <div className="space-y-6 md:space-y-8">
                    <p className="text-xl md:text-2xl text-zinc-200 font-light leading-snug">
                        Building <span className="text-white font-bold border-b-2 border-purple-500">powerful Website</span> with a <span className="text-white font-bold border-b-2 border-blue-500">clean design</span>.
                    </p>
                    <p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed">
                        I'm a WordPress & Full-stack Developer at <span className="text-white font-medium">SVR GLOBAL SOLUTIONS INDIA</span>. With a background in <span className="text-blue-400">B.Tech CSE</span>, I specialize in building high-performance systems and modern user experiences using <span className="text-purple-400">Next.js</span>.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-4 md:gap-6">
                    <div className="p-6 md:px-10 md:py-8 glass rounded-3xl group hover:border-purple-500/50 transition-all">
                        <p className="text-zinc-500 text-[10px] font-mono uppercase mb-2">Experience</p>
                        <p className="text-white font-black text-2xl md:text-3xl group-hover:translate-x-2 transition-transform">1<span className="text-purple-500 text-xl md:text-2xl">+</span></p>
                        <p className="text-zinc-400 text-xs md:text-sm">Year Experience</p>
                    </div>
                    <div className="p-6 md:px-10 md:py-8 glass rounded-3xl group hover:border-blue-500/50 transition-all">
                        <p className="text-zinc-500 text-[10px] font-mono uppercase mb-2">Projects</p>
                        <p className="text-white font-black text-2xl md:text-3xl group-hover:translate-x-2 transition-transform">7<span className="text-blue-500 text-xl md:text-2xl">+</span></p>
                        <p className="text-zinc-400 text-xs md:text-sm">Deployed</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);
