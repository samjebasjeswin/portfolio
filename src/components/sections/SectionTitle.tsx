'use client';

import { motion } from 'framer-motion';

export const SectionTitle = ({ children, subtitle, headingSize = "text-3xl sm:text-4xl md:text-5xl lg:text-6xl" }: { children: React.ReactNode, subtitle?: string, headingSize?: string }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10 md:mb-16 relative"
    >
        {subtitle && (
            <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-purple-500 font-mono text-[10px] sm:text-xs uppercase tracking-[0.4em] md:tracking-[0.5em] mb-3 md:mb-4 leading-none"
            >
                {subtitle}
            </motion.p>
        )}
        <h2 className={`${headingSize} font-black text-white tracking-tighter leading-[1.1] md:leading-[0.95] mb-6`}>
            {children}
        </h2>
        <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1.5 md:h-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"
        />
    </motion.div>
);
