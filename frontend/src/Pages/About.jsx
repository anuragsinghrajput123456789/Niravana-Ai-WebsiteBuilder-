import React from 'react';
import heroBg from '../assets/hero-bg.png';

const TeamMemberCard = ({ name, role, imageUrl }) => (
  <div className="glass-card flex flex-col items-center p-8 group hover:border-[var(--brand-red)] transition-all">
    <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-2 border-gray-800 group-hover:border-[var(--brand-red)] transition-colors">
      <img src={imageUrl} alt={name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
    </div>
    <h3 className="text-xl font-display font-bold text-white tracking-widest uppercase mb-2">{name}</h3>
    <p className="text-sm text-[var(--brand-red-light)] font-light tracking-wider uppercase">{role}</p>
  </div>
);

const About = () => {
  const team = [
    { name: 'Alex Johnson', role: 'Founder & CEO', imageUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026704d' },
    { name: 'Jane Doe', role: 'Lead AI Engineer', imageUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026705d' },
    { name: 'Sam Wilson', role: 'Head of Design', imageUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026706d' },
  ];

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] pt-32 pb-24 relative overflow-hidden">
      
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[var(--brand-red)] opacity-[0.03] blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
        
        <section className="mb-32 animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-xs font-bold tracking-[0.2em] text-[var(--brand-red)] uppercase mb-4">Our Mission</h2>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-white tracking-wide mb-8 leading-tight">
                Democratizing<br/>Web Design
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed font-light mb-8">
                At NIRVANA, we believe that everyone, regardless of technical skill, should have the power to create a beautiful and professional online presence. 
              </p>
              <p className="text-gray-500 text-md leading-relaxed font-light">
                Our AI is built to be an intuitive partner, transforming your ideas into reality with speed, precision, and raw creativity.
              </p>
            </div>
            
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden glass-card group">
              <img src={heroBg} alt="Mission" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700 grayscale group-hover:grayscale-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>
          </div>
        </section>

        <section className="animate-fade-in animate-delay-200">
          <div className="text-center mb-16">
             <h2 className="text-xs font-bold tracking-[0.2em] text-[var(--brand-red)] uppercase mb-4">The Architects</h2>
             <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-wide">Meet the Team</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map(member => (
              <TeamMemberCard key={member.name} {...member} />
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default About;