import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, Moon, Sun } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [hoveredProject, setHoveredProject] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const scrollToSection = (section) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  const projects = [
    {
      title: "E-Commerce Platform Redesign",
      role: "Lead Product Manager",
      description: "Increased conversion rate by 35% through user research and iterative design improvements",
      metrics: ["35% ↑ Conversion", "2M+ Users", "4.8★ Rating"],
      tags: ["Product Strategy", "UX Research", "A/B Testing"]
    },
    {
      title: "Mobile App Launch",
      role: "Product Manager",
      description: "Led cross-functional team to launch iOS/Android app from 0→1",
      metrics: ["100K+ Downloads", "30% MAU Growth", "Top 50 App"],
      tags: ["Mobile", "Growth", "Launch Strategy"]
    },
    {
      title: "AI Feature Integration",
      role: "Technical PM",
      description: "Shipped ML-powered recommendation system reducing churn by 20%",
      metrics: ["20% ↓ Churn", "50% ↑ Engagement", "15ms Latency"],
      tags: ["AI/ML", "Data Analytics", "Technical PM"]
    }
  ];

  const skills = [
    { category: "Product", items: ["Product Strategy", "Roadmapping", "User Research", "A/B Testing"] },
    { category: "Technical", items: ["SQL", "Python", "API Design", "System Design"] },
    { category: "Design", items: ["Figma", "User Flows", "Prototyping", "Design Systems"] },
    { category: "Soft Skills", items: ["Leadership", "Communication", "Stakeholder Mgmt", "Agile/Scrum"] }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white' : 'bg-gradient-to-br from-slate-50 via-white to-blue-50 text-gray-900'} font-sans`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 border-b transition-colors duration-300 ${darkMode ? 'bg-gray-900/90 backdrop-blur-xl border-gray-800' : 'bg-white/80 backdrop-blur-xl border-gray-100'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <div className="text-lg sm:text-xl font-semibold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Aiden Wong</div>
          <div className="flex gap-4 sm:gap-8 items-center">
            <div className="hidden md:flex gap-8">
              {['About', 'Experience', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors duration-200 ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
                >
                  {item}
                </button>
              ))}
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full transition-all duration-300 ${darkMode ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 max-w-6xl mx-auto min-h-screen flex flex-col justify-center">
        <div className="space-y-4 sm:space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-tight">
              Building products<br />people love
            </h1>
            <div className="h-1 w-16 sm:w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>
          <p className={`text-lg sm:text-xl md:text-2xl max-w-2xl leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Product Manager crafting intuitive experiences at the intersection of technology and design
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
            <a href="#contact" className="px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg hover:scale-105 transition-all duration-200 font-medium text-center">
              Get in touch
            </a>
            <a href="#projects" className={`px-6 sm:px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-full transition-all duration-200 font-medium text-center ${darkMode ? 'hover:bg-blue-600/20' : 'hover:bg-blue-50'}`}>
              View work
            </a>
          </div>
        </div>
        
        <button 
          onClick={() => scrollToSection('about')}
          className="hidden sm:block absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className={`w-6 h-6 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className={`py-12 sm:py-20 px-4 sm:px-6 max-w-6xl mx-auto ${darkMode ? '' : ''}`}>
        <div className="grid md:grid-cols-5 gap-8 sm:gap-12 items-center">
          <div className="md:col-span-2 flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className={`relative w-64 h-64 sm:w-72 sm:h-72 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl overflow-hidden border-4 shadow-2xl ${darkMode ? 'border-gray-700' : 'border-white'}`}>
                {/* Placeholder for user's photo - Replace this div with: <img src="your-photo.jpg" alt="Aiden Wong" className="w-full h-full object-cover" /> */}
                <div className={`w-full h-full flex items-center justify-center ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                  <div className="text-center">
                    <svg className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                    <p className="text-sm font-medium">Your photo here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-3 space-y-4 sm:space-y-6">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">About Me</h2>
            <div className={`space-y-4 text-base sm:text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <p>
                I'm a 25-year-old Product Manager passionate about building technology that makes a meaningful impact. With an engineering background from the University of Waterloo, I bridge the gap between technical feasibility and user needs.
              </p>
              <p>
                Throughout my journey, I've had the privilege of working with 8 incredible companies, from early-stage startups to established tech firms. Each experience has shaped my approach to product management and deepened my understanding of what it takes to build exceptional products.
              </p>
              <p>
                When I'm not shipping features, you'll find me exploring new design tools, diving into user research, or tinkering with side projects.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className={`p-5 sm:p-6 rounded-2xl border ${darkMode ? 'bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border-blue-800' : 'bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-100'}`}>
                <h3 className="text-base sm:text-lg font-semibold mb-2">Education</h3>
                <div className="space-y-1">
                  <div className="font-medium text-sm sm:text-base">University of Waterloo</div>
                  <div className={`text-xs sm:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Bachelor of Engineering</div>
                  <div className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>2017 - 2022</div>
                </div>
              </div>
              
              <div className={`p-5 sm:p-6 rounded-2xl border ${darkMode ? 'bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-800' : 'bg-gradient-to-br from-purple-50 to-pink-50 border-purple-100'}`}>
                <h3 className="text-base sm:text-lg font-semibold mb-2">Currently</h3>
                <div className="space-y-1">
                  <div className="font-medium text-sm sm:text-base">Product Manager</div>
                  <div className={`text-xs sm:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Tech Industry</div>
                  <div className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>2022 - Present</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Timeline */}
      <section className={`py-12 sm:py-20 px-4 sm:px-6 max-w-6xl mx-auto ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">Experience</h2>
          <p className={`text-lg sm:text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>8 incredible companies, countless lessons learned</p>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {[
            { 
              company: "Tech Startup Co", 
              role: "Senior Product Manager", 
              period: "2024 - Present", 
              color: "from-blue-500 to-cyan-500",
              description: "Leading product strategy for B2B SaaS platform",
              bullets: ["Drove 40% revenue growth through feature prioritization", "Led team of 3 PMs and coordinated with 15+ engineers", "Launched 2 major product lines serving 500+ enterprise clients"]
            },
            { 
              company: "Innovation Labs", 
              role: "Product Manager", 
              period: "2023 - 2024", 
              color: "from-purple-500 to-pink-500",
              description: "Consumer mobile app with 1M+ downloads",
              bullets: ["Shipped 5 major features that increased retention by 25%", "Managed product roadmap and cross-functional teams", "Conducted user research with 200+ participants"]
            },
            { 
              company: "Digital Solutions Inc", 
              role: "Associate Product Manager", 
              period: "2022 - 2023", 
              color: "from-orange-500 to-red-500",
              description: "Enterprise workflow automation platform",
              bullets: ["Owned end-to-end feature development lifecycle", "Collaborated with sales team to define product-market fit", "Reduced customer churn by 15% through UX improvements"]
            },
            { 
              company: "Cloud Systems", 
              role: "Product Intern", 
              period: "2021 (Co-op)", 
              color: "from-green-500 to-emerald-500",
              description: "Cloud infrastructure and DevOps tools",
              bullets: ["Built analytics dashboard used by 100+ internal teams", "Conducted competitive analysis for new product line", "Presented roadmap recommendations to VP of Product"]
            },
            { 
              company: "Data Analytics Firm", 
              role: "Product Intern", 
              period: "2020 (Co-op)", 
              color: "from-indigo-500 to-blue-500",
              description: "Data visualization and business intelligence platform",
              bullets: ["Designed and tested new data exploration features", "Gathered customer feedback through 30+ user interviews", "Created product requirements docs for engineering team"]
            },
            { 
              company: "Mobile Dev Studio", 
              role: "Engineering Intern", 
              period: "2019 (Co-op)", 
              color: "from-yellow-500 to-orange-500",
              description: "iOS and Android app development agency",
              bullets: ["Developed features for 3 client mobile applications", "Implemented A/B testing framework in React Native", "Improved app performance reducing load time by 30%"]
            },
            { 
              company: "AI Research Lab", 
              role: "Research Intern", 
              period: "2019 (Co-op)", 
              color: "from-teal-500 to-cyan-500",
              description: "Machine learning and natural language processing",
              bullets: ["Built ML model achieving 85% accuracy on classification task", "Co-authored research paper on NLP applications", "Contributed to open-source ML toolkit with 1K+ stars"]
            },
            { 
              company: "E-commerce Platform", 
              role: "Software Intern", 
              period: "2018 (Co-op)", 
              color: "from-rose-500 to-pink-500",
              description: "Online marketplace connecting buyers and sellers",
              bullets: ["Developed search and filtering features for product catalog", "Optimized database queries reducing response time by 40%", "Collaborated with design team on checkout flow redesign"]
            }
          ].map((exp, idx) => (
            <div
              key={idx}
              onClick={() => setActiveSection(activeSection === `exp-${idx}` ? '' : `exp-${idx}`)}
              className={`group relative p-5 sm:p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 overflow-hidden cursor-pointer ${darkMode ? 'bg-gradient-to-br from-gray-800 to-gray-850 border-gray-700 hover:shadow-2xl hover:shadow-blue-500/10' : 'bg-gradient-to-br from-gray-50 to-white border-gray-100 hover:shadow-xl'}`}
            >
              <div className={`absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br ${exp.color} opacity-5 rounded-full -mr-12 sm:-mr-16 -mt-12 sm:-mt-16 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="relative">
                {/* Logo Placeholder - Replace with: <img src="company-logo.png" alt={exp.company} className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl object-cover shadow-lg mb-3 sm:mb-4" /> */}
                <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${exp.color} rounded-xl mb-3 sm:mb-4 flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg`}>
                  {exp.company.split(' ').map(word => word[0]).join('').slice(0, 2)}
                </div>
                
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold mb-1">{exp.company}</h3>
                    <p className={`text-xs sm:text-sm mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{exp.role}</p>
                    <p className={`text-xs font-medium mb-2 sm:mb-3 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>{exp.period}</p>
                    <p className={`text-xs sm:text-sm italic ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{exp.description}</p>
                  </div>
                  
                  <div className={`ml-3 sm:ml-4 transform transition-transform duration-300 ${activeSection === `exp-${idx}` ? 'rotate-180' : ''}`}>
                    <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} />
                  </div>
                </div>
                
                {/* Expandable Content */}
                <div className={`overflow-hidden transition-all duration-500 ${activeSection === `exp-${idx}` ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                  <div className={`pt-4 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                    <h4 className={`text-xs sm:text-sm font-semibold mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.bullets.map((bullet, i) => (
                        <li key={i} className={`text-xs sm:text-sm flex items-start ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          <span className={`inline-block w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.color} mt-1.5 sm:mt-2 mr-2 flex-shrink-0`}></span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="experience" className={`py-12 sm:py-20 px-4 sm:px-6 max-w-6xl mx-auto ${darkMode ? 'bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800' : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'}`}>
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-center">Skills & Expertise</h2>
        <p className={`text-lg sm:text-xl text-center mb-12 sm:mb-16 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Hover to see proficiency levels</p>
        
        <div className="space-y-6 sm:space-y-8">
          {skills.map((skillGroup, idx) => {
            const colors = [
              { bg: 'from-blue-500 to-cyan-500', light: darkMode ? 'from-blue-900/30 to-cyan-900/30' : 'from-blue-100 to-cyan-100', icon: '🎯' },
              { bg: 'from-purple-500 to-pink-500', light: darkMode ? 'from-purple-900/30 to-pink-900/30' : 'from-purple-100 to-pink-100', icon: '⚡' }, 
              { bg: 'from-orange-500 to-red-500', light: darkMode ? 'from-orange-900/30 to-red-900/30' : 'from-orange-100 to-red-100', icon: '🎨' },
              { bg: 'from-green-500 to-emerald-500', light: darkMode ? 'from-green-900/30 to-emerald-900/30' : 'from-green-100 to-emerald-100', icon: '💡' }
            ];
            const proficiencyLevels = [90, 85, 80, 75];
            
            return (
              <div key={idx} className={`p-6 sm:p-8 rounded-3xl shadow-sm border ${darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-100'}`}>
                <div className="flex items-center gap-3 mb-6">
                  <div className={`text-2xl sm:text-3xl bg-gradient-to-br ${colors[idx].light} w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center`}>
                    {colors[idx].icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold">{skillGroup.category}</h3>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  {skillGroup.items.map((skill, i) => {
                    const proficiency = proficiencyLevels[idx] - (i * 3);
                    return (
                      <div 
                        key={i}
                        className="group"
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className={`text-sm sm:text-base font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{skill}</span>
                          <span className={`text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                            {proficiency}%
                          </span>
                        </div>
                        <div className={`h-2 rounded-full overflow-hidden ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                          <div 
                            className={`h-full bg-gradient-to-r ${colors[idx].bg} rounded-full transition-all duration-1000 ease-out transform origin-left scale-x-0 group-hover:scale-x-100`}
                            style={{ width: `${proficiency}%` }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Visual Skill Cloud */}
        <div className={`mt-12 sm:mt-16 p-6 sm:p-8 rounded-3xl shadow-sm border ${darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-100'}`}>
          <h3 className="text-xl sm:text-2xl font-semibold text-center mb-6 sm:mb-8">Tech Stack & Tools</h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {[
              { name: 'Figma', color: 'from-purple-500 to-pink-500', size: 'text-sm sm:text-lg' },
              { name: 'SQL', color: 'from-blue-500 to-cyan-500', size: 'text-base sm:text-xl' },
              { name: 'Python', color: 'from-yellow-500 to-orange-500', size: 'text-sm sm:text-lg' },
              { name: 'Jira', color: 'from-blue-600 to-indigo-600', size: 'text-xs sm:text-base' },
              { name: 'Amplitude', color: 'from-indigo-500 to-purple-500', size: 'text-sm sm:text-lg' },
              { name: 'Mixpanel', color: 'from-pink-500 to-rose-500', size: 'text-xs sm:text-base' },
              { name: 'Git', color: 'from-orange-500 to-red-500', size: 'text-xs sm:text-base' },
              { name: 'Notion', color: 'from-gray-600 to-gray-800', size: 'text-sm sm:text-lg' },
              { name: 'Tableau', color: 'from-blue-500 to-teal-500', size: 'text-xs sm:text-base' },
              { name: 'React', color: 'from-cyan-500 to-blue-500', size: 'text-sm sm:text-lg' },
              { name: 'Postman', color: 'from-orange-500 to-red-500', size: 'text-xs sm:text-base' },
              { name: 'Miro', color: 'from-yellow-400 to-orange-400', size: 'text-xs sm:text-base' },
              { name: 'Slack', color: 'from-purple-600 to-pink-600', size: 'text-xs sm:text-base' },
              { name: 'Google Analytics', color: 'from-green-500 to-emerald-500', size: 'text-sm sm:text-lg' },
              { name: 'Sketch', color: 'from-yellow-500 to-amber-500', size: 'text-xs sm:text-base' },
            ].map((tool, i) => (
              <div
                key={i}
                className={`${tool.size} px-3 sm:px-5 py-2 sm:py-3 bg-gradient-to-r ${tool.color} text-white rounded-full font-medium shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 cursor-pointer`}
              >
                {tool.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-12 sm:py-20 px-4 sm:px-6 max-w-6xl mx-auto ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-12 sm:mb-16">Featured Projects</h2>
        <div className="space-y-6 sm:space-y-8">
          {projects.map((project, idx) => {
            const gradients = [
              'from-blue-500 to-cyan-500',
              'from-purple-500 to-pink-500',
              'from-orange-500 to-red-500'
            ];
            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredProject(idx)}
                onMouseLeave={() => setHoveredProject(null)}
                className={`group relative p-6 sm:p-8 rounded-3xl border transition-all duration-300 cursor-pointer overflow-hidden ${darkMode ? 'bg-gradient-to-br from-gray-800 to-gray-850 border-gray-700 hover:shadow-2xl hover:shadow-blue-500/10' : 'bg-gradient-to-br from-gray-50 to-white border-gray-100 hover:shadow-xl'}`}
              >
                <div className={`absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-gradient-to-br ${gradients[idx]} opacity-5 rounded-full -mr-24 sm:-mr-32 -mt-24 sm:-mt-32 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className="relative">
                  <div className="flex justify-between items-start mb-4">
                    <div className="space-y-1 flex-1">
                      <h3 className="text-xl sm:text-2xl font-semibold">{project.title}</h3>
                      <p className={`text-xs sm:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{project.role}</p>
                    </div>
                    <ExternalLink 
                      className={`w-4 h-4 sm:w-5 sm:h-5 transition-all duration-200 flex-shrink-0 ml-3 ${
                        hoveredProject === idx ? 'translate-x-1 -translate-y-1 text-blue-600' : darkMode ? 'text-gray-500' : 'text-gray-400'
                      }`} 
                    />
                  </div>
                  
                  <p className={`text-base sm:text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{project.description}</p>
                  
                  <div className="flex flex-wrap gap-3 sm:gap-6 mb-6">
                    {project.metrics.map((metric, i) => (
                      <div key={i} className={`px-3 sm:px-4 py-2 rounded-full border shadow-sm ${darkMode ? 'bg-gray-700/50 border-gray-600' : 'bg-white border-gray-200'}`}>
                        <span className="text-xs sm:text-sm font-medium">{metric}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map((tag, i) => (
                      <span key={i} className={`px-3 py-1 bg-gradient-to-r ${gradients[idx]} text-white text-xs font-medium rounded-full`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-12 sm:py-20 px-4 sm:px-6 max-w-6xl mx-auto ${darkMode ? 'bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800' : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'}`}>
        <div className="text-center space-y-6 sm:space-y-8">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Let's Connect</h2>
          <p className={`text-lg sm:text-xl max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Always open to discussing product ideas, collaboration opportunities, or just chatting about tech
          </p>
          
          <div className="flex justify-center gap-4 sm:gap-6 pt-6 sm:pt-8">
            <a 
              href="mailto:aiden.wong@email.com"
              className="p-3 sm:p-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full hover:shadow-lg hover:scale-110 transition-all duration-200"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a 
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 sm:p-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:shadow-lg hover:scale-110 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a 
              href="https://github.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 sm:p-4 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full hover:shadow-lg hover:scale-110 transition-all duration-200"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 sm:py-12 px-4 sm:px-6 border-t ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-100'}`}>
        <div className={`max-w-6xl mx-auto text-center text-xs sm:text-sm ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
          <p>© 2025 Aiden Wong. Designed & built with care.</p>
        </div>
      </footer>
    </div>
  );
}
