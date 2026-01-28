'use client';

import { motion } from 'framer-motion';
import { SectionTitle } from './SectionTitle';

export const ContactSection = ({ onContactClick }: { onContactClick: () => void }) => (
    <section id="contact" className="py-20 md:py-32 px-6 sm:px-12 md:px-20 flex flex-col items-center text-center">
        <div className="max-w-4xl w-full glass-dark rounded-[2.5rem] md:rounded-[4rem] py-12 px-6 sm:px-12 md:py-24 md:px-32 relative overflow-hidden">
            <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-purple-600/10 blur-[120px] rounded-full" />
            <SectionTitle subtitle="Connect" headingSize="text-3xl md:text-5xl">Start a Project.</SectionTitle>
            <p className="text-lg md:text-2xl font-light text-zinc-400 mb-12 md:mb-20 leading-snug">
                Let's build something that <span className="text-white font-bold italic">shakes</span> the industry.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 text-center lg:text-left">
                <div className="space-y-3">
                    <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest leading-none">Email</p>
                    <button
                        onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=jeswinsam287@gmail.com', '_blank')}
                        className="text-lg sm:text-xl font-black text-white hover:text-purple-400 transition-colors cursor-pointer block w-full lg:text-left leading-tight break-all"
                    >
                        jeswinsam287@gmail.com
                    </button>
                </div>
                <div className="space-y-3">
                    <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest leading-none">Phone</p>
                    <a
                        href="tel:+918925091475"
                        className="text-lg sm:text-xl font-black text-white hover:text-blue-400 transition-colors cursor-pointer block w-full lg:text-left leading-tight"
                    >
                        +91 8925091475
                    </a>
                </div>
            </div>

            <motion.button
                onClick={onContactClick}
                whileHover={{ scale: 1.05, boxShadow: '0 0 50px rgba(139, 92, 246, 0.3)' }}
                whileTap={{ scale: 0.98 }}
                className="mt-12 md:mt-20 w-full md:w-auto px-10 md:px-20 py-6 md:py-8 bg-white text-black font-black text-lg md:text-xl rounded-[1.2rem] md:rounded-[1.5rem] transition-all relative overflow-hidden group shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
            >
                <span className="relative z-10">CONTACT ME NOW</span>
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-10 transition-opacity"
                />
            </motion.button>
        </div>
    </section>
);
