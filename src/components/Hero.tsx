import React from 'react';
import Profile from './Profile';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[600px] py-10 flex items-center justify-center overflow-hidden bg-deep-blue">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: 'url("/images/tech-background.svg")',
          backgroundBlendMode: 'screen',
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto text-center px-4">
        <Profile />
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
          Full Stack Software Engineer
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Specializing in building exceptional web applications with modern technologies.
          Currently focused on creating innovative solutions with React, TypeScript, and AWS.
        </p>
        <a
          href="#contact"
          className="inline-block 50px bg-blue-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors"
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
};

export default Hero; 