import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import API from '../api';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import heroBg from '../assets/hero-bg.png';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await API.post('/auth/register', { name, email, password });
            toast.success('Registration Successful! Please login.');
            navigate('/login');
        } catch (error) {
            toast.error(error.response?.data?.message || 'Registration Failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-[var(--bg-primary)] text-white p-4 relative overflow-hidden group">
            {/* Background Accents */}
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[var(--brand-red)] opacity-[0.04] blur-[100px] rounded-full pointer-events-none z-0"></div>

            {/* Animated Skull Background */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.15, scale: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none z-0 mix-blend-luminosity"
            >
                <motion.img 
                    src={heroBg} 
                    alt="Background Skull" 
                    animate={{ 
                        y: [0, -20, 0],
                        rotate: [0, 1, -1, 0]
                    }}
                    transition={{ 
                        duration: 8, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                    }}
                    className="w-full h-full object-contain grayscale blur-[4px] group-hover:grayscale-0 group-hover:blur-[2px] transition-all duration-1000"
                />
            </motion.div>

            <div className="w-full max-w-md glass-card p-10 md:p-12 animate-fade-in relative z-10 mt-16">
                <div className="text-center mb-10">
                    <h3 className='text-3xl font-display font-bold text-white tracking-widest mb-2'>
                        NIRVANA<span className="text-[var(--brand-red)]">.</span>
                    </h3>
                    <p className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase">Create Account</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-xs font-bold tracking-widest text-gray-400 uppercase mb-3">Full Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="dark-input"
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold tracking-widest text-gray-400 uppercase mb-3">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="dark-input"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold tracking-widest text-gray-400 uppercase mb-3">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="dark-input"
                            placeholder="Create a password"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className="pill-btn pill-btn-primary w-full py-4 tracking-widest uppercase mt-4 disabled:opacity-50"
                    >
                        {loading ? 'Creating Account...' : 'Sign Up'}
                    </button>
                </form>

                <p className="mt-8 text-center text-xs font-bold tracking-widest text-gray-500 uppercase">
                    Already have an account?{' '}
                    <Link to="/login" className="text-[var(--brand-red)] hover:text-white transition-colors ml-2">
                        Sign In
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;
