import React from 'react';

const Experience: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-12 text-white">Experience</h2>
      <div className="space-y-8">
        {/* Freelance Web Developer */}
        <div className="bg-opacity-10 bg-white backdrop-blur-sm p-8 rounded-lg border border-white/10">
          <h3 className="text-xl font-semibold text-blue-400">Freelance Web Developer</h3>
          <p className="text-blue-300 mb-4">Mar. 2023 – Present</p>
          <ul className="list-disc list-inside space-y-2 text-gray-200">
            <li>Developed and deployed responsive web applications using JavaScript, TypeScript, HTML, CSS, React and Java for small businesses, building off of Figma designs to create user interfaces</li>
            <li>Approached work with a Founder's mindset, working as both a business planner and architect</li>
            <li>RESTful API as well as AI MODEL INTEGRATION to add dynamic features, enhancing overall user experience</li>
            <li>Automated deployment processes using AWS, Bash, Python, and Docker, reducing manual overhead by up to 15 percent</li>
          </ul>
        </div>

        {/* Two Fish Creative */}
        <div className="bg-opacity-10 bg-white backdrop-blur-sm p-8 rounded-lg border border-white/10">
          <h3 className="text-xl font-semibold text-blue-400">Full Stack Software Engineer</h3>
          <p className="text-blue-300 mb-4">Two Fish Creative | Jan. 2022 – Jan. 2023</p>
          <ul className="list-disc list-inside space-y-2 text-gray-200">
            <li>Developed and deployed responsive web applications using JavaScript, TypeScript, HTML, CSS, and Python, and AWS for enterprise</li>
            <li>Migrated web platforms from outdated architecture and frameworks to Material UI and Node.js</li>
            <li>Integrated RESTful APIs to add dynamic features, enhancing overall user experience</li>
            <li>Automated deployment processes using AWS and Docker, reducing manual overhead by 10 percent</li>
          </ul>
        </div>

        {/* Lockheed Martin */}
        <div className="bg-opacity-10 bg-white backdrop-blur-sm p-8 rounded-lg border border-white/10">
          <h3 className="text-xl font-semibold text-blue-400">Full Stack Software Engineer</h3>
          <p className="text-blue-300 mb-4">Lockheed Martin | Jan. 2020 – Nov. 2020</p>
          <ul className="list-disc list-inside space-y-2 text-gray-200">
            <li>Collaborated with senior developers to build and optimize features for a web-based application using Java(Springboot), Angular, and AWS</li>
            <li>Implemented an automated data import from CSV and XML format into SQL imports</li>
            <li>Implemented unittests for new features, increasing overall test coverage by 30 percent</li>
          </ul>
        </div>

        {/* DraftKings */}
        <div className="bg-opacity-10 bg-white backdrop-blur-sm p-8 rounded-lg border border-white/10">
          <h3 className="text-xl font-semibold text-blue-400">Software Engineering Intern</h3>
          <p className="text-blue-300 mb-4">DraftKings | June 2018 – Aug. 2018</p>
          <ul className="list-disc list-inside space-y-2 text-gray-200">
            <li>Collaborated with senior developers to build and optimize for a web-based application using Java(Springboot) hosted on AWS</li>
            <li>Improved page load response times by 25 percent through debugging and optimizing SQL queries</li>
            <li>Utilized Git for version control and managed code deployments via Jenkins pipelines. Devops with Bash, Python + AWS</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience; 