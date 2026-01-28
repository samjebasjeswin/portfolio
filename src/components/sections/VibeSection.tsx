'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { SectionTitle } from './SectionTitle';

export const VibeSection = () => (
    <section className="w-full min-h-screen py-20 md:py-32 px-6 sm:px-12 md:px-20 relative">
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="relative group hidden lg:block"
                >
                    <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-[2rem] md:rounded-[3rem] blur-3xl group-hover:from-purple-600/40 group-hover:to-blue-600/40 transition-all duration-700" />
                    <div className="relative glass-dark rounded-[2rem] md:rounded-[3rem] p-1 overflow-hidden">
                        <div className="relative aspect-video rounded-[1.8rem] md:rounded-[2.8rem] overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop"
                                alt="Coding session"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-transparent to-transparent" />
                        </div>
                    </div>
                </motion.div>

                <div className="space-y-8 md:space-y-10">
                    <SectionTitle subtitle="Current Focus" headingSize="text-3xl md:text-5xl">Next.js Development.</SectionTitle>

                    {/* Mobile/Tablet Image - Inserted below title */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="relative group lg:hidden mb-12"
                    >
                        <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-[2rem] blur-3xl" />
                        <div className="relative glass-dark rounded-[2rem] p-1 overflow-hidden">
                            <div className="relative aspect-video rounded-[1.8rem] overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop"
                                    alt="Coding session"
                                    fill
                                    sizes="90vw"
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-transparent to-transparent" />
                            </div>
                        </div>
                    </motion.div>
                    <div className="space-y-6">
                        <p className="text-2xl md:text-3xl font-light text-zinc-100 leading-tight">
                            "Currently deep in <span className="text-purple-500 font-bold">Next.js</span> for my upcoming <span className="text-blue-500 font-bold">Premium E-commerce</span> platform."
                        </p>
                        <p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed">
                            I'm revolutionizing how we think about online shopping by blending artificial intelligence with immersive 3D interfaces. No more boring grids—we're talking about a fluid, cinematic shopping experience that reacts to your vibe.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="glass p-6 rounded-2xl">
                            <span className="text-purple-500 font-bold text-xl md:text-2xl mb-1 md:mb-2 block leading-none">AI</span>
                            <p className="text-[10px] md:text-sm text-zinc-500 font-mono uppercase tracking-widest leading-tight">Personalized Recommendations</p>
                        </div>
                        <div className="glass p-6 rounded-2xl">
                            <span className="text-blue-500 font-bold text-xl md:text-2xl mb-1 md:mb-2 block leading-none">3D</span>
                            <p className="text-[10px] md:text-sm text-zinc-500 font-mono uppercase tracking-widest leading-tight">Interactive Product Showcase</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);
