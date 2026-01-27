'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function NewNavbar({ onContactClick }: { onContactClick?: () => void }) {
    const navItems = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'];

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl"
        >
            <div className="glass-dark rounded-[2rem] px-4 sm:px-8 py-4 flex justify-between items-center border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <div className="text-xl sm:text-2xl font-black tracking-tighter text-white group cursor-pointer flex-shrink-0">
                    SAM<span className="text-purple-500 group-hover:text-blue-500 transition-colors">JEBAS</span>
                </div>

                <div className="hidden md:flex gap-4 lg:gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-[10px] lg:text-xs font-mono uppercase tracking-widest text-zinc-500 hover:text-white transition-all relative group"
                        >
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-purple-500 transition-all group-hover:w-full" />
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-4 flex-shrink-0">
                    <motion.button
                        onClick={onContactClick}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 sm:px-6 py-2 bg-white text-black text-[10px] sm:text-xs font-black uppercase tracking-tighter rounded-xl hover:bg-zinc-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                    >
                        Lets Talk
                    </motion.button>
                </div>
            </div>
        </motion.nav>
    );
}
