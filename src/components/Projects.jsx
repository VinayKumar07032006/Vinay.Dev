import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { useState } from 'react';

// Live simulated CSS Mockups for premium "Product Showcase" appearance
const ChatbotMockup = () => (
  <div className="w-full h-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-900 rounded-xl p-3 flex flex-col justify-between font-mono text-[9px] relative overflow-hidden select-none transition-colors duration-300">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-brand-primary/5 rounded-full blur-2xl pointer-events-none"></div>
    <div className="flex items-center gap-1.5 border-b border-zinc-200 dark:border-zinc-900 pb-2 text-zinc-500 transition-colors">
      <span className="w-2 h-2 rounded-full bg-red-500/80"></span>
      <span className="w-2 h-2 rounded-full bg-yellow-500/80"></span>
      <span className="w-2 h-2 rounded-full bg-green-500/80"></span>
      <span className="ml-1 text-[8px] text-zinc-400 dark:text-zinc-500">chatbot_agent.py</span>
    </div>
    <div className="flex-grow space-y-2.5 py-3 overflow-hidden text-left">
      <div className="text-zinc-400 dark:text-zinc-500 transition-colors">&gt;&gt; initializing openai_client... OK</div>
      <div className="bg-slate-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-850 p-2 rounded-lg text-zinc-700 dark:text-zinc-350 transition-colors">
        <span className="text-brand-primary font-bold">User:</span> Optimize this database schema query.
      </div>
      <div className="bg-brand-primary/5 border border-brand-primary/10 dark:border-brand-primary/20 p-2 rounded-lg text-zinc-850 dark:text-zinc-200 ml-auto max-w-[85%] border-l-2 border-l-brand-primary transition-colors">
        <span className="text-purple-600 dark:text-purple-400 font-bold">AI Agent:</span> Query indexed. Added compound index to (user_id, status) reducing search latency from 240ms to 8ms.
      </div>
    </div>
    <div className="border-t border-zinc-200 dark:border-zinc-900 pt-2 flex items-center justify-between text-zinc-400 dark:text-zinc-650 text-[8px] transition-colors">
      <span>TOKENS: 421 / 16k</span>
      <span>latency: 140ms</span>
    </div>
  </div>
);

const TravelMockup = () => (
  <div className="w-full h-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-900 rounded-xl p-3.5 flex flex-col justify-between relative overflow-hidden select-none text-left transition-colors duration-300">
    <div className="flex items-center justify-between text-[9px] font-mono text-zinc-500 border-b border-zinc-200 dark:border-zinc-900 pb-2 transition-colors">
      <span>ROUTE EXPLORER</span>
      <span className="text-brand-primary">ACTIVE</span>
    </div>
    <div className="flex-grow flex flex-col justify-center space-y-3.5 py-2">
      {/* Route map path */}
      <div className="flex justify-between items-center px-4 relative">
        <div className="absolute left-6 right-6 top-1/2 h-[1px] border-t border-dashed border-zinc-200 dark:border-zinc-800 -translate-y-1/2 z-0 transition-colors"></div>
        <div className="z-10 bg-white dark:bg-zinc-950 border border-brand-primary/45 p-1.5 rounded-lg text-center transition-colors">
          <div className="text-[10px] font-bold text-zinc-900 dark:text-white font-display transition-colors">DEL</div>
          <div className="text-[7px] text-zinc-500 font-mono">India</div>
        </div>
        <div className="z-10 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 p-1.5 rounded-lg text-center transition-colors">
          <div className="text-[10px] font-bold text-zinc-700 dark:text-zinc-300 font-display transition-colors">SFO</div>
          <div className="text-[7px] text-zinc-500 font-mono">USA</div>
        </div>
      </div>
      <div className="bg-slate-50 dark:bg-zinc-900/20 border border-zinc-200 dark:border-zinc-850 p-2 rounded-lg transition-colors">
        <div className="text-[9px] font-bold text-zinc-750 dark:text-zinc-350 transition-colors">AI Recommended Itinerary</div>
        <div className="text-[8px] text-zinc-500 mt-1 font-mono">Day 1: Technical Meetup @ SF Tech Hub (9:00 AM)</div>
      </div>
    </div>
  </div>
);

const MovieMockup = () => (
  <div className="w-full h-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-900 rounded-xl p-3 flex flex-col justify-between relative overflow-hidden select-none transition-colors duration-300">
    <div className="flex items-center justify-between text-[9px] font-mono text-zinc-500 border-b border-zinc-200 dark:border-zinc-900 pb-2 transition-colors">
      <span>SCREEN A - RESERVATIONS</span>
      <span>PRICE: $12.50</span>
    </div>
    <div className="flex-grow flex flex-col justify-center items-center py-2 space-y-2">
      {/* Screen projection bar */}
      <div className="w-4/5 h-1 bg-gradient-to-r from-transparent via-brand-primary/45 to-transparent rounded-full mb-1"></div>
      
      {/* Seat grid */}
      <div className="grid grid-cols-6 gap-1">
        {[...Array(18)].map((_, i) => {
          let seatStyle = "bg-slate-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300";
          if (i === 7 || i === 8) seatStyle = "bg-brand-primary/20 border border-brand-primary text-brand-primary";
          if (i === 3 || i === 12) seatStyle = "bg-zinc-200 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-750 opacity-40 cursor-not-allowed";
          return (
            <div key={i} className={`w-3.5 h-3 rounded ${seatStyle} flex items-center justify-center text-[5px] font-mono transition-colors`}>
              {i + 1}
            </div>
          );
        })}
      </div>
    </div>
    <div className="flex justify-center gap-4 text-[8px] text-zinc-450 dark:text-zinc-500 font-mono pt-1 transition-colors">
      <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 bg-slate-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded"></span> Available</span>
      <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 bg-brand-primary/25 border border-brand-primary rounded"></span> Selected</span>
    </div>
  </div>
);

const StudentMockup = () => (
  <div className="w-full h-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-900 rounded-xl p-3 flex flex-col justify-between relative overflow-hidden select-none text-left transition-colors duration-300">
    <div className="flex items-center justify-between text-[9px] font-mono text-zinc-500 border-b border-zinc-200 dark:border-zinc-900 pb-2 transition-colors">
      <span>DATABASE_RECORDS</span>
      <span className="text-purple-600 dark:text-purple-400 transition-colors">TABLE_ACTIVE</span>
    </div>
    <div className="flex-grow flex flex-col justify-center space-y-2 py-2 font-mono text-[8px]">
      <div className="flex justify-between border-b border-zinc-200 dark:border-zinc-900 pb-1 text-zinc-500 transition-colors">
        <span>STUDENT_NAME</span>
        <span>GPA</span>
        <span>STATUS</span>
      </div>
      <div className="flex justify-between text-zinc-700 dark:text-zinc-350 transition-colors">
        <span>Vinay Kumar</span>
        <span>9.80</span>
        <span className="text-emerald-500 font-bold">ENROLLED</span>
      </div>
      <div className="flex justify-between text-zinc-700 dark:text-zinc-350 transition-colors">
        <span>Aman Sharma</span>
        <span>8.50</span>
        <span className="text-emerald-500 font-bold">ENROLLED</span>
      </div>
      <div className="flex justify-between text-zinc-700 dark:text-zinc-350 transition-colors">
        <span>Rohan Verma</span>
        <span>9.10</span>
        <span className="text-amber-500 dark:text-amber-400 font-bold">PROBATION</span>
      </div>
    </div>
  </div>
);

const MLMockup = () => (
  <div className="w-full h-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-900 rounded-xl p-3.5 flex flex-col justify-between relative overflow-hidden select-none text-left transition-colors duration-300">
    <div className="flex items-center justify-between text-[9px] font-mono text-zinc-500 border-b border-zinc-200 dark:border-zinc-900 pb-2 transition-colors">
      <span>MODEL_METRICS</span>
      <span className="text-brand-primary">ACCURACY: 98.6%</span>
    </div>
    <div className="flex-grow flex items-center justify-center py-2">
      {/* Visual SVG graph represent */}
      <svg width="100%" height="45" viewBox="0 0 180 50" className="opacity-95">
        <path d="M10,40 Q40,15 80,30 T170,10" fill="none" stroke="#8b5cf6" strokeWidth="2" />
        <path d="M10,40 Q40,15 80,30 T170,10 L170,45 L10,45 Z" fill="url(#ml-grad)" opacity="0.08" />
        <defs>
          <linearGradient id="ml-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <circle cx="170" cy="10" r="3" fill="#8b5cf6" />
      </svg>
    </div>
  </div>
);

const PortfolioMockup = () => (
  <div className="w-full h-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-900 rounded-xl p-3 flex flex-col justify-between relative overflow-hidden select-none text-left transition-colors duration-300">
    <div className="flex justify-between items-center text-[9px] font-mono text-zinc-500 border-b border-zinc-200 dark:border-zinc-900 pb-2 transition-colors">
      <span>dev-portfolio-visual.jsx</span>
      <span>ACTIVE</span>
    </div>
    <div className="flex-grow flex flex-col justify-center space-y-2 py-2">
      <div className="flex gap-1.5">
        <div className="w-8 h-8 rounded-full border border-dashed border-zinc-300 dark:border-zinc-800 flex items-center justify-center transition-colors">
          <div className="w-4 h-4 rounded-full bg-brand-primary/10 border border-brand-primary/30"></div>
        </div>
        <div className="space-y-1 flex-grow justify-center flex flex-col">
          <div className="h-2 w-3/4 bg-slate-50 dark:bg-zinc-900 rounded border border-zinc-200 dark:border-zinc-850 transition-colors"></div>
          <div className="h-1.5 w-1/2 bg-slate-50 dark:bg-zinc-900 rounded border border-zinc-200 dark:border-zinc-850 transition-colors"></div>
        </div>
      </div>
    </div>
  </div>
);

const Projects = () => {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const projects = [
    {
      title: "AI Chatbot Assistant",
      description: "An intelligent conversational agent built using natural language processing to assist users with daily tasks and queries. Processes prompts and streams vector indexes in real-time.",
      mockup: <ChatbotMockup />,
      tags: ["React", "Node.js", "OpenAI API", "Tailwind"],
      github: "https://github.com/VinayKumar07032006",
      demo: "#",
      featured: true // Takes larger grid footprint
    },
    {
      title: "Smart Travel Planner",
      description: "A comprehensive travel application that generates optimized itineraries based on user preferences, geographical coordinates, and budget.",
      mockup: <TravelMockup />,
      tags: ["React", "Express", "MongoDB", "Google Maps API"],
      github: "https://github.com/VinayKumar07032006",
      demo: "#",
      featured: false
    },
    {
      title: "Movie Ticket Booking",
      description: "A full-stack movie reservation system with real-time seat selection, concurrent state locks, and secure payment gateway integration.",
      mockup: <MovieMockup />,
      tags: ["MERN Stack", "Stripe", "Redux"],
      github: "https://github.com/VinayKumar07032006",
      demo: "#",
      featured: false
    },
    {
      title: "Machine Learning Dashboard",
      description: "A comprehensive data visualization platform for monitoring, benchmarking, and tracking weights and biases of active ML models.",
      mockup: <MLMockup />,
      tags: ["Python", "Flask", "React", "Chart.js"],
      github: "https://github.com/VinayKumar07032006",
      demo: "#",
      featured: true
    },
    {
      title: "Student Management System",
      description: "A robust dashboard for educational institutions to manage student records, relational database structures, and attendance metrics.",
      mockup: <StudentMockup />,
      tags: ["C++", "MySQL", "Qt Framework"],
      github: "https://github.com/VinayKumar07032006",
      demo: "#",
      featured: false
    },
    {
      title: "Personal Portfolio",
      description: "A premium, handcrafted portfolio featuring smooth custom cursors, spotlight card overlays, and dynamic visual pipeline diagram assets.",
      mockup: <PortfolioMockup />,
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/VinayKumar07032006",
      demo: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-brand-dark border-t border-zinc-200 dark:border-zinc-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white tracking-tight font-display mb-4 transition-colors duration-300">Featured Projects</h2>
            <div className="w-20 h-1 bg-brand-primary mx-auto rounded-full"></div>
          </motion.div>
        </div>

        {/* Staggered Asymmetrical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              onMouseEnter={() => setHoveredIdx(index)}
              onMouseLeave={() => setHoveredIdx(null)}
              className={`bg-white/40 dark:bg-zinc-950/20 border border-zinc-200 dark:border-zinc-900 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-zinc-300 dark:hover:border-zinc-750/70 transition-all duration-300 shadow-lg dark:shadow-xl ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              {/* Product Screenshot / Mockup wrapper */}
              <div className="p-4 bg-slate-50/50 dark:bg-zinc-950/50 aspect-[16/9] flex items-center justify-center border-b border-zinc-200 dark:border-zinc-900 relative group/mock transition-colors">
                <div className="w-full h-full transform group-hover/mock:scale-[1.01] transition-transform duration-300">
                  {project.mockup}
                </div>
                
                {/* Floating links overlay */}
                <div className="absolute inset-0 bg-white/90 dark:bg-zinc-950/80 backdrop-blur-sm opacity-0 group-hover/mock:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-20">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-white dark:bg-zinc-900 hover:bg-slate-100 dark:hover:bg-zinc-800 text-zinc-900 dark:text-white rounded-full border border-zinc-200 dark:border-zinc-800 transition-all shadow-md flex items-center justify-center"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                  <a 
                    href={project.demo}
                    className="p-3 bg-brand-primary hover:bg-brand-secondary text-white rounded-full transition-colors shadow-2xl flex items-center justify-center"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-6 flex flex-col justify-between flex-grow text-left">
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2 font-display flex items-center justify-between group transition-colors duration-300">
                    <span>{project.title}</span>
                    <ArrowRight className="w-4 h-4 text-zinc-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </h3>
                  <p className="text-zinc-650 dark:text-zinc-400 text-xs sm:text-sm mb-6 leading-relaxed font-medium transition-colors duration-300">
                    {project.description}
                  </p>
                </div>

                {/* Tech Badges List */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-2.5 py-1 text-[10px] font-mono font-semibold text-brand-primary bg-brand-primary/5 border border-brand-primary/10 rounded transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
