import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-secondary">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-hero">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xl text-primary mb-8">
            Hi, I'm a
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Full Stack Software Engineer
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Specializing in building exceptional web applications with modern technologies.
            Currently focused on creating innovative solutions with React, TypeScript, and AWS.
          </p>
          <a
            href="#contact"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Experience</h2>
          <div className="space-y-8">
            {/* Freelance Web Developer */}
            <div className="bg-deep-blue p-6 rounded-lg shadow-lg text-white">
              <h3 className="text-xl font-semibold">Freelance Web Developer</h3>
              <p className="text-primary mb-4">Mar. 2023 – Present</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Developed and deployed responsive web applications using JavaScript, TypeScript, HTML, CSS, React and Java for small businesses, building off of Figma designs to create user interfaces</li>
                <li>Approached work with a Founder's mindset, working as both a business planner and architect</li>
                <li>RESTful API as well as AI MODEL INTEGRATION to add dynamic features, enhancing overall user experience</li>
                <li>Automated deployment processes using AWS, Bash, Python, and Docker, reducing manual overhead by up to 15 percent</li>
              </ul>
            </div>

            {/* Two Fish Creative */}
            <div className="bg-deep-blue p-6 rounded-lg shadow-lg text-white">
              <h3 className="text-xl font-semibold">Full Stack Software Engineer</h3>
              <p className="text-primary mb-4">Two Fish Creative | Jan. 2022 – Jan. 2023</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Developed and deployed responsive web applications using JavaScript, TypeScript, HTML, CSS, and Python, and AWS for enterprise</li>
                <li>Migrated web platforms from outdated architecture and frameworks to Material UI and Node.js</li>
                <li>Integrated RESTful APIs to add dynamic features, enhancing overall user experience</li>
                <li>Automated deployment processes using AWS and Docker, reducing manual overhead by 10 percent</li>
              </ul>
            </div>

            {/* Lockheed Martin */}
            <div className="bg-deep-blue p-6 rounded-lg shadow-lg text-white">
              <h3 className="text-xl font-semibold">Full Stack Software Engineer</h3>
              <p className="text-primary mb-4">Lockheed Martin | Jan. 2020 – Nov. 2020</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Collaborated with senior developers to build and optimize features for a web-based application using Java(Springboot), Angular, and AWS</li>
                <li>Implemented an automated data import from CSV and XML format into SQL imports</li>
                <li>Implemented unittests for new features, increasing overall test coverage by 30 percent</li>
              </ul>
            </div>

            {/* DraftKings */}
            <div className="bg-deep-blue p-6 rounded-lg shadow-lg text-white">
              <h3 className="text-xl font-semibold">Software Engineering Intern</h3>
              <p className="text-primary mb-4">DraftKings | June 2018 – Aug. 2018</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Collaborated with senior developers to build and optimize for a web-based application using Java(Springboot) hosted on AWS</li>
                <li>Improved page load response times by 25 percent through debugging and optimizing SQL queries</li>
                <li>Utilized Git for version control and managed code deployments via Jenkins pipelines. Devops with Bash, Python + AWS</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-hero">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-deep-blue p-6 rounded-lg shadow-lg text-white">
              <h3 className="text-xl font-semibold mb-4 text-primary">Languages</h3>
              <p className="text-gray-300">Java, Python, C/C++, SQL, Postgres, JavaScript, HTML/CSS, TypeScript</p>
            </div>
            <div className="bg-deep-blue p-6 rounded-lg shadow-lg text-white">
              <h3 className="text-xl font-semibold mb-4 text-primary">Frameworks</h3>
              <p className="text-gray-300">React, Node.js, Flask, JUnit, WordPress, Material-UI, FastAPI, Express, Remix</p>
            </div>
            <div className="bg-deep-blue p-6 rounded-lg shadow-lg text-white">
              <h3 className="text-xl font-semibold mb-4 text-primary">Developer Tools</h3>
              <p className="text-gray-300">Git, Docker, AWS, Bash scripting, Cursor, VS Code, Visual Studio, PyCharm, IntelliJ, Datagrip</p>
            </div>
            <div className="bg-deep-blue p-6 rounded-lg shadow-lg text-white">
              <h3 className="text-xl font-semibold mb-4 text-primary">Technology</h3>
              <p className="text-gray-300">REST APIs, Microservices, Linux/Unix, AI integration, Machine Learning</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Gitbook Project */}
            <div className="bg-deep-blue p-6 rounded-lg shadow-lg text-white">
              <h3 className="text-xl font-semibold mb-4">Gitbook</h3>
              <p className="text-gray-300 mb-4">VS Code extension that tracks your task history on a git repository, showing off your work history more than a git commit message</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">TypeScript</span>
                <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">VS Code Extension</span>
                <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Git</span>
              </div>
            </div>

            {/* Perplexity AI Clone */}
            <div className="bg-deep-blue p-6 rounded-lg shadow-lg text-white">
              <h3 className="text-xl font-semibold mb-4">Perplexity AI Clone</h3>
              <p className="text-gray-300 mb-4">Web application that provides cited answers to questions</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">TypeScript</span>
                <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">AI Integration</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />
    </main>
  )
} 