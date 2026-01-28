'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const ContactModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSending, setIsSending] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSending(true);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    subject: `New Portfolio Message from ${formData.name}`,
                    from_name: "Portfolio Contact Form",
                }),
            });

            const result = await response.json();

            if (result.success) {
                setIsSubmitted(true);
                setTimeout(() => {
                    setIsSubmitted(false);
                    onClose();
                }, 3000);
            } else {
                alert("Something went wrong. Please try again or use the direct mail link.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Error sending message. Please check your connection.");
        } finally {
            setIsSending(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-zinc-950/80 backdrop-blur-md"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-2xl glass-dark rounded-[3rem] p-12 overflow-hidden shadow-2xl border border-white/10"
                    >
                        <button onClick={onClose} className="absolute top-8 right-8 text-zinc-500 hover:text-white transition-colors">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>

                        <AnimatePresence mode="wait">
                            {!isSubmitted ? (
                                <motion.div
                                    key="form"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                >
                                    <h3 className="text-4xl font-black text-white mb-2 tracking-tighter">LET'S TALK.</h3>
                                    <p className="text-zinc-400 mb-10 font-light">Tell me about your vision.</p>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="space-y-2">
                                            <label className="text-xs font-mono text-zinc-500 uppercase tracking-widest pl-2">Name</label>
                                            <input
                                                required
                                                type="text"
                                                name="name"
                                                placeholder="Enter your name"
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 text-white outline-none focus:ring-2 ring-purple-500/50 transition-all"
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-mono text-zinc-500 uppercase tracking-widest pl-2">Email</label>
                                            <input
                                                required
                                                type="email"
                                                name="email"
                                                placeholder="Enter your email"
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 text-white outline-none focus:ring-2 ring-purple-500/50 transition-all"
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-mono text-zinc-500 uppercase tracking-widest pl-2">Message</label>
                                            <textarea
                                                required
                                                name="message"
                                                rows={4}
                                                placeholder="Tell me about your project..."
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 text-white outline-none focus:ring-2 ring-purple-500/50 transition-all resize-none"
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            />
                                        </div>

                                        <div className="pt-4">
                                            <motion.button
                                                disabled={isSending}
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                type="submit"
                                                className={`w-full p-8 bg-white text-black font-black rounded-2xl transition-all uppercase tracking-[0.2em] text-base shadow-xl ${isSending ? 'opacity-50 cursor-not-allowed' : 'hover:bg-zinc-100'}`}
                                            >
                                                {isSending ? 'SENDING...' : 'SUBMIT'}
                                            </motion.button>
                                        </div>
                                    </form>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex flex-col items-center justify-center py-20 text-center"
                                >
                                    <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mb-8 border border-green-500/30">
                                        <motion.svg
                                            initial={{ pathLength: 0 }}
                                            animate={{ pathLength: 1 }}
                                            transition={{ duration: 0.5, delay: 0.2 }}
                                            className="w-12 h-12 text-green-500"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                        </motion.svg>
                                    </div>
                                    <h3 className="text-4xl font-black text-white mb-4 tracking-tighter uppercase">Success!</h3>
                                    <p className="text-zinc-400 text-xl font-light">
                                        Your message has been sent directly to Sam.<br />
                                        I'll get back to you shortly!
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
