import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { BsStars, BsLightningCharge, BsCodeSlash } from "react-icons/bs";
import { FiPlay, FiArrowRight } from "react-icons/fi";
import heroBg from '../assets/hero-bg.png';

const Home = () => {
    const navigate = useNavigate();

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    return (
        <div className="bg-[var(--bg-primary)] min-h-screen relative overflow-hidden group">
            
            {/* Cinematic Backgrounds */}
            <div className="aurora-bg"></div>
            <div className="noise-bg"></div>
            <div className="grid-bg"></div>

            {/* Animated Skull Background */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.15, scale: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] md:w-[1200px] h-[800px] md:h-[1200px] pointer-events-none z-0 mix-blend-luminosity"
            >
                <motion.img 
                    src={heroBg} 
                    alt="Background Skull" 
                    animate={{ 
                        y: [0, -30, 0],
                        rotate: [0, 2, -2, 0]
                    }}
                    transition={{ 
                        duration: 10, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                    }}
                    className="w-full h-full object-contain grayscale blur-[4px] group-hover:grayscale-0 group-hover:blur-[2px] transition-all duration-1000"
                />
            </motion.div>

            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 px-6 z-10 text-center">
                
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="absolute top-1/4 -left-32 w-96 h-96 bg-white/5 rounded-full blur-[120px] pointer-events-none" 
                />
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="absolute bottom-1/4 -right-32 w-96 h-96 bg-white/5 rounded-full blur-[120px] pointer-events-none" 
                />

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="max-w-5xl mx-auto flex flex-col items-center"
                >
                    <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel mb-8 border border-[var(--border-light)] shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                        <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                        <span className="text-[10px] font-mono tracking-widest text-gray-300 uppercase">Nirvana AI Engine 2.0 Live</span>
                    </motion.div>

                    <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl lg:text-[5.5rem] font-display font-bold leading-[1.1] tracking-tight mb-6">
                        Build AI Apps <br />
                        From a Single <span className="text-gradient">Prompt.</span>
                    </motion.h1>

                    <motion.p variants={fadeIn} className="text-lg md:text-xl text-gray-400 font-light max-w-2xl mb-10 leading-relaxed">
                        The world's most powerful AI development environment. Transform natural language into production-ready React applications in seconds.
                    </motion.p>

                    <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center gap-4">
                        <button onClick={() => navigate('/studio')} className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-lg font-medium hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)] flex items-center justify-center gap-2">
                            Launch Studio <FiArrowRight />
                        </button>
                        <button className="w-full sm:w-auto px-8 py-4 glass-panel text-white rounded-lg font-medium hover:bg-white/5 transition-all flex items-center justify-center gap-2">
                            <FiPlay /> Watch Demo
                        </button>
                    </motion.div>
                </motion.div>

                {/* App Preview Mockup */}
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-20 w-full max-w-6xl glass-card border border-white/10 rounded-2xl overflow-hidden shadow-2xl relative group"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10 pointer-events-none"></div>
                    <div className="h-10 bg-black/40 border-b border-white/5 flex items-center px-4 gap-2 backdrop-blur-md">
                        <div className="w-3 h-3 rounded-full bg-white/20"></div>
                        <div className="w-3 h-3 rounded-full bg-white/20"></div>
                        <div className="w-3 h-3 rounded-full bg-white/20"></div>
                    </div>
                    <div className="h-[400px] md:h-[600px] w-full bg-black/80 relative flex items-center justify-center">
                        <img src={heroBg} alt="Interface Preview" className="w-full h-full object-cover opacity-30 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="glass-panel p-6 rounded-xl border border-white/10 backdrop-blur-xl group-hover:border-[var(--brand-red)] group-hover:shadow-[0_0_50px_rgba(255,0,0,0.2)] transition-all duration-500">
                                <pre className="text-sm font-mono text-gray-300">
                                    <code className="text-gray-500">{"// Nirvana AI Generator"}</code><br/>
                                    <span className="text-purple-400">const</span> App = <span className="text-blue-400">await</span> generate({`{`}<br/>
                                    &nbsp;&nbsp;prompt: <span className="text-green-400">"Create a SaaS dashboard"</span>,<br/>
                                    &nbsp;&nbsp;theme: <span className="text-green-400">"dark"</span>,<br/>
                                    &nbsp;&nbsp;framework: <span className="text-green-400">"react"</span><br/>
                                    {`}`});
                                </pre>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Features Section */}
            <section className="py-32 px-6 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Unleash Next-Gen Development</h2>
                        <p className="text-gray-400 font-light max-w-2xl mx-auto text-lg">
                            Experience a unified workspace combining the intelligence of AI with the flexibility of a professional IDE.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Feature 1 */}
                        <motion.div 
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="glass-card p-8 group hover:-translate-y-2 transition-all duration-300"
                        >
                            <div className="w-12 h-12 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[var(--brand-red)] transition-colors duration-500">
                                <BsStars className="text-xl text-gray-300 group-hover:text-white transition-colors duration-500" />
                            </div>
                            <h3 className="text-xl font-display font-bold mb-3">AI Code Generation</h3>
                            <p className="text-gray-500 font-light leading-relaxed">
                                Our proprietary models understand context and design systems, generating perfectly structured React components from simple descriptions.
                            </p>
                        </motion.div>
                        
                        {/* Feature 2 */}
                        <motion.div 
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="glass-card p-8 group hover:-translate-y-2 transition-all duration-300"
                        >
                            <div className="w-12 h-12 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[var(--brand-red)] transition-colors duration-500">
                                <BsCodeSlash className="text-xl text-gray-300 group-hover:text-white transition-colors duration-500" />
                            </div>
                            <h3 className="text-xl font-display font-bold mb-3">Live Preview Workspace</h3>
                            <p className="text-gray-500 font-light leading-relaxed">
                                See your code render in real-time. Switch seamlessly between mobile, tablet, and desktop views within the integrated browser canvas.
                            </p>
                        </motion.div>
                        
                        {/* Feature 3 */}
                        <motion.div 
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="glass-card p-8 group hover:-translate-y-2 transition-all duration-300"
                        >
                            <div className="w-12 h-12 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[var(--brand-red)] transition-colors duration-500">
                                <BsLightningCharge className="text-xl text-gray-300 group-hover:text-white transition-colors duration-500" />
                            </div>
                            <h3 className="text-xl font-display font-bold mb-3">Instant Export</h3>
                            <p className="text-gray-500 font-light leading-relaxed">
                                Take ownership of your code. Export clean, production-ready HTML, Tailwind CSS, and React JSX files instantly.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-32 px-6 bg-[var(--bg-primary)] border-y border-white/5 relative z-10 overflow-hidden">
                {/* Background Glow */}
                <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[var(--brand-red)] opacity-[0.05] blur-[150px] rounded-full pointer-events-none -translate-y-1/2"></div>
                
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        
                        <div className="w-full lg:w-1/2">
                            <motion.h2 
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                className="text-4xl md:text-5xl font-display font-bold mb-12 leading-tight"
                            >
                                From Concept to Code <br/><span className="text-[var(--brand-red)]">in 3 Steps</span>
                            </motion.h2>
                            
                            <div className="space-y-6">
                                {/* Step 1 */}
                                <motion.div 
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                    className="flex gap-6 group/step"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full border border-white/20 bg-black/50 flex items-center justify-center font-mono text-xl group-hover/step:border-[var(--brand-red)] group-hover/step:text-[var(--brand-red)] group-hover/step:shadow-[0_0_15px_rgba(255,0,0,0.3)] transition-all duration-300">1</div>
                                    <div className="glass-card p-6 rounded-xl group-hover/step:border-white/20 transition-colors w-full">
                                        <h4 className="text-xl font-bold mb-2">Describe Your Vision</h4>
                                        <p className="text-gray-400 font-light text-sm leading-relaxed">Type what you want to build in plain English into the Studio terminal. Be as creative or specific as you need.</p>
                                    </div>
                                </motion.div>
                                
                                {/* Step 2 */}
                                <motion.div 
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="flex gap-6 group/step"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full border border-white/20 bg-black/50 flex items-center justify-center font-mono text-xl group-hover/step:border-[var(--brand-red)] group-hover/step:text-[var(--brand-red)] group-hover/step:shadow-[0_0_15px_rgba(255,0,0,0.3)] transition-all duration-300">2</div>
                                    <div className="glass-card p-6 rounded-xl group-hover/step:border-white/20 transition-colors w-full">
                                        <h4 className="text-xl font-bold mb-2">AI Synthesis</h4>
                                        <p className="text-gray-400 font-light text-sm leading-relaxed">Our engine instantly generates the underlying React architecture, tailwind styles, and logic for your component.</p>
                                    </div>
                                </motion.div>

                                {/* Step 3 */}
                                <motion.div 
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    className="flex gap-6 group/step"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full border border-white/20 bg-black/50 flex items-center justify-center font-mono text-xl group-hover/step:border-[var(--brand-red)] group-hover/step:text-[var(--brand-red)] group-hover/step:shadow-[0_0_15px_rgba(255,0,0,0.3)] transition-all duration-300">3</div>
                                    <div className="glass-card p-6 rounded-xl group-hover/step:border-white/20 transition-colors w-full">
                                        <h4 className="text-xl font-bold mb-2">Iterate & Export</h4>
                                        <p className="text-gray-400 font-light text-sm leading-relaxed">Refine the code using the live preview workspace, then export it directly to your local environment.</p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Right: Abstract Visualization */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8 }}
                            className="w-full lg:w-1/2 min-h-[450px] glass-card rounded-2xl p-8 relative overflow-hidden flex flex-col justify-center border-white/10 group/viz"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--brand-red)]/10 to-transparent opacity-0 group-hover/viz:opacity-100 transition-opacity duration-700"></div>
                            
                            {/* Editor Mockup */}
                            <div className="w-full bg-black/60 rounded-xl border border-white/10 overflow-hidden backdrop-blur-md relative z-10 shadow-2xl group-hover/viz:border-red-500/30 transition-colors duration-500">
                                <div className="h-8 bg-white/5 border-b border-white/10 flex items-center px-4 gap-2">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                                </div>
                                <div className="p-6 font-mono text-sm space-y-4">
                                    <div className="flex items-center text-gray-400 gap-3">
                                        <span className="text-red-400">~</span> 
                                        <span className="text-green-400">npm</span> run build
                                    </div>
                                    <div className="text-gray-500 italic">Synthesizing components...</div>
                                    <div className="space-y-2">
                                        <div className="h-2 w-3/4 bg-blue-500/20 rounded animate-pulse"></div>
                                        <div className="h-2 w-1/2 bg-purple-500/20 rounded animate-pulse delay-75"></div>
                                        <div className="h-2 w-5/6 bg-green-500/20 rounded animate-pulse delay-150"></div>
                                    </div>
                                    <div className="text-white mt-4 flex items-center gap-2">
                                        <BsStars className="text-yellow-400" /> Build successful in 1.2s
                                    </div>
                                </div>
                            </div>

                            {/* Floating decorative elements */}
                            <motion.div 
                                animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-br from-red-500/20 to-transparent rounded-2xl border border-red-500/20 backdrop-blur-md"
                            />
                            <motion.div 
                                animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
                                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute bottom-10 left-10 w-16 h-16 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-full border border-blue-500/20 backdrop-blur-md"
                            />
                        </motion.div>

                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;