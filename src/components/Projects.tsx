import React from 'react';

const Projects: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-12 text-white">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Gitbook Project */}
        <div className="bg-opacity-10 bg-white backdrop-blur-sm p-8 rounded-lg border border-white/10">
          <h3 className="text-xl font-semibold text-blue-400 mb-4">Gitbook</h3>
          <p className="text-gray-200 mb-6">
            A VS Code extension that helps developers understand and navigate codebases more efficiently using AI. 
            Features include code explanations, dependency tracking, and intelligent search.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-400/10 text-blue-300 rounded-full text-sm">TypeScript</span>
            <span className="px-3 py-1 bg-blue-400/10 text-blue-300 rounded-full text-sm">VS Code Extension</span>
            <span className="px-3 py-1 bg-blue-400/10 text-blue-300 rounded-full text-sm">Git</span>
          </div>
        </div>

        {/* Perplexity AI Clone */}
        <div className="bg-opacity-10 bg-white backdrop-blur-sm p-8 rounded-lg border border-white/10">
          <h3 className="text-xl font-semibold text-blue-400 mb-4">Perplexity AI Clone</h3>
          <p className="text-gray-200 mb-6">
            A web application that replicates the functionality of Perplexity AI, featuring real-time search, 
            AI-powered answers, and source citations. Built with modern web technologies and AI integration.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-400/10 text-blue-300 rounded-full text-sm">React</span>
            <span className="px-3 py-1 bg-blue-400/10 text-blue-300 rounded-full text-sm">Next.js</span>
            <span className="px-3 py-1 bg-blue-400/10 text-blue-300 rounded-full text-sm">AI Integration</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects; 