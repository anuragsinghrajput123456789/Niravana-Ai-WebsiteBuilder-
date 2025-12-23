// src/pages/AboutPage.jsx

import React from 'react';

const TeamMemberCard = ({ name, role, imageUrl }) => (
  <div className="card team-member">
    <img src={imageUrl} alt={name} />
    <h3>{name}</h3>
    <p>{role}</p>
  </div>
);

const About = () => {
  const team = [
    { name: 'Alex Johnson', role: 'Founder & CEO', imageUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026704d' },
    { name: 'Jane Doe', role: 'Lead AI Engineer', imageUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026705d' },
    { name: 'Sam Wilson', role: 'Head of Design', imageUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026706d' },
  ];

  return (
    <div className="page-container">
      <section className="about-mission">
        <h2 className="section-title">Our Mission</h2>
        <p>
          At Nirvana-Ai, our mission is to democratize web design. We believe that everyone, regardless of technical skill, should have the power to create a beautiful and professional online presence. Our AI is built to be an intuitive partner, transforming your ideas into reality with speed, precision, and creativity.
        </p>
      </section>

      <section>
        <h2 className="section-title">Meet the Team</h2>
        <div className="grid">
          {team.map(member => (
            <TeamMemberCard key={member.name} {...member} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;