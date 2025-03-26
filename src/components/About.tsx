import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-opacity-10 bg-white backdrop-blur-sm p-8 rounded-lg border border-white/10">
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-200 mb-6 leading-relaxed">
            I am a Full Stack Software Engineer with a passion for building innovative web applications 
            and solving complex technical challenges. With expertise in modern web technologies and 
            cloud platforms, I specialize in creating efficient, scalable solutions that deliver 
            exceptional user experiences.
          </p>
          <p className="text-gray-200 mb-6 leading-relaxed">
            Throughout my career, I've worked with diverse technologies including React, TypeScript, 
            Node.js, and AWS, consistently delivering high-quality solutions for both startups and 
            enterprise clients. My experience spans from developing responsive front-end interfaces 
            to implementing robust back-end systems and DevOps practices.
          </p>
          <p className="text-gray-200 leading-relaxed">
            I'm particularly interested in AI integration and modern web development, always staying 
            current with the latest technologies and best practices. My approach combines technical 
            expertise with a strong focus on user experience and business objectives.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About; 