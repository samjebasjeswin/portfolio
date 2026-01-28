'use client';

import { motion, useScroll as useFramerScroll, useTransform } from 'framer-motion';

export const HeroSection = () => {
    const { scrollYProgress } = useFramerScroll();
    const y1 = useTransform(scrollYProgress, [0, 1], [0, 500]);
    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    return (
        <section id="home" className="w-full min-h-screen flex flex-col justify-center items-start p-6 sm:p-12 md:p-20 relative overflow-hidden">
            <motion.div
                style={{ y: y1, opacity }}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="z-10 w-full"
            >
                <div className="relative">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.05 }}
                        className="absolute -top-8 md:-top-12 -left-4 md:-left-8 text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] font-black text-white pointer-events-none select-none whitespace-nowrap"
                    >
                        SAMJEBAS
                    </motion.span>
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[9rem] font-black gradient-text tracking-tighter leading-[0.85] md:leading-[0.8] relative z-10 drop-shadow-2xl pr-4">
                        SAMJEBAS<br />JESWIN K
                    </h1>
                </div>

                <div className="mt-8 md:mt-12 space-y-4">
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-extralight text-white tracking-[0.1em] md:tracking-[0.3em] opacity-80 uppercase leading-tight">
                        WordPress &<br className="sm:hidden" /> Full-stack Developer
                    </h2>
                    <p className="text-lg md:text-xl text-zinc-400 max-w-2xl font-light leading-relaxed">
                        Crafting digital universes with <span className="text-purple-400 font-medium whitespace-nowrap">Next.js</span>,
                        architecting backends with <span className="text-blue-400 font-medium whitespace-nowrap">Python</span>,
                        and exploring <span className="text-pink-400 font-medium whitespace-nowrap">AI & Computer Vision</span>.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="mt-12 md:mt-16 flex gap-6 md:gap-8 items-center"
                >
                    <div className="w-8 md:w-12 h-[1px] bg-zinc-700" />
                    <span className="text-zinc-500 font-mono text-xs md:text-sm tracking-widest uppercase animate-pulse leading-none">Scroll to explore</span>
                </motion.div>
            </motion.div>
        </section>
    );
};
