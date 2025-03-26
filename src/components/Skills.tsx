import React from 'react';

const Skills: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-12 text-white">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-opacity-10 bg-white backdrop-blur-sm p-8 rounded-lg border border-white/10">
          <h3 className="text-xl font-semibold mb-4 text-blue-400">Languages</h3>
          <p className="text-gray-200">
            Java, Python, C/C++, SQL, Postgres, JavaScript, HTML/CSS, TypeScript
          </p>
        </div>

        <div className="bg-opacity-10 bg-white backdrop-blur-sm p-8 rounded-lg border border-white/10">
          <h3 className="text-xl font-semibold mb-4 text-blue-400">Frameworks</h3>
          <p className="text-gray-200">
            React, Node.js, Flask, JUnit, WordPress, Material-UI, FastAPI, Express, Remix
          </p>
        </div>

        <div className="bg-opacity-10 bg-white backdrop-blur-sm p-8 rounded-lg border border-white/10">
          <h3 className="text-xl font-semibold mb-4 text-blue-400">Developer Tools</h3>
          <p className="text-gray-200">
            Git, Docker, AWS, Bash scripting, Cursor, VS Code, Visual Studio, PyCharm, IntelliJ, Datagrip
          </p>
        </div>

        <div className="bg-opacity-10 bg-white backdrop-blur-sm p-8 rounded-lg border border-white/10">
          <h3 className="text-xl font-semibold mb-4 text-blue-400">Technology</h3>
          <p className="text-gray-200">
            REST APIs, Microservices, Linux/Unix, AI integration, Machine Learning
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills; 