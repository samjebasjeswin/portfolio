'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function GlowCursor() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const [isVisible, setIsVisible] = useState(false);

    // Smooth out the movement
    const springConfig = { damping: 25, stiffness: 150 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    useEffect(() => {
        // Disable on mobile/touch devices
        if (window.matchMedia("(pointer: coarse)").matches) {
            setIsVisible(false);
            return;
        }
        setIsVisible(true);

        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    if (!isVisible) return null;

    return (
        <motion.div
            style={{
                translateX: x,
                translateY: y,
                left: -150,
                top: -150,
            }}
            className="fixed pointer-events-none z-[1] w-[300px] h-[300px] bg-purple-600/10 blur-[100px] rounded-full"
        />
    );
}
