import { motion } from 'framer-motion';
import { Code, BookOpen, Briefcase, Award } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Projects Completed', value: '15+', icon: <Code className="w-5 h-5 text-brand-primary" /> },
    { label: 'Technologies Learned', value: '20+', icon: <BookOpen className="w-5 h-5 text-purple-400" /> },
    { label: 'Internships Worked', value: '2', icon: <Briefcase className="w-5 h-5 text-brand-primary" /> },
    { label: 'Certifications Active', value: '5+', icon: <Award className="w-5 h-5 text-purple-400" /> },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-brand-dark transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white tracking-tight font-display mb-4 transition-colors duration-300">About Myself</h2>
            <div className="w-20 h-1 bg-brand-primary mx-auto rounded-full"></div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: Wireframe Visual Profile Frame */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative group"
          >
            <div className="w-full max-w-[400px] mx-auto aspect-square rounded-2xl border border-zinc-200 dark:border-zinc-850 bg-white/40 dark:bg-zinc-950/40 p-4 relative overflow-hidden flex flex-col justify-between transition-all duration-300">
              {/* Corner brackets */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-zinc-300 dark:border-zinc-700"></div>
              <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-zinc-300 dark:border-zinc-700"></div>
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-zinc-300 dark:border-zinc-700"></div>
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-zinc-300 dark:border-zinc-700"></div>
              
              {/* Header stats bar */}
              <div className="flex justify-between items-center text-[10px] font-mono text-zinc-450 dark:text-zinc-500 border-b border-zinc-200 dark:border-zinc-900 pb-2">
                <span>DEV_STAT: IDLE</span>
                <span>LOC: BAHADURGARH, IN</span>
              </div>

              {/* Central wireframe */}
              <div className="flex-grow flex flex-col items-center justify-center relative py-6">
                <div className="absolute inset-0 bg-dot opacity-40"></div>
                
                {/* Simulated blueprint vector */}
                <div className="w-36 h-36 rounded-full border border-dashed border-zinc-300 dark:border-zinc-800 flex items-center justify-center relative animate-[spin_40s_linear_infinite]">
                  <div className="w-28 h-28 rounded-full border border-zinc-300 dark:border-zinc-800 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full border-2 border-brand-primary/20 flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-primary"></span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <span className="mt-4 font-mono text-xs text-zinc-650 dark:text-zinc-400 font-semibold tracking-wider transition-colors duration-300">
                  SYSTEM_INTEGRATION.io
                </span>
              </div>

              {/* Footer specs bar */}
              <div className="flex justify-between items-center text-[10px] font-mono text-zinc-450 dark:text-zinc-500 border-t border-zinc-200 dark:border-zinc-900 pt-2">
                <span>W: 240px</span>
                <span>H: 240px</span>
                <span>FPS: 60.00</span>
              </div>
            </div>
            
            {/* Background ambient lighting */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none"></div>
          </motion.div>

          {/* Right: Bio and Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-8 text-left"
          >
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white font-display transition-colors duration-300">
                Engineering Custom Solutions with Code and AI
              </h3>
              <p className="text-zinc-655 dark:text-zinc-400 text-sm sm:text-base leading-relaxed transition-colors duration-300">
                I am a driven Computer Science student with a profound passion for Full Stack Web Development and Artificial Intelligence. My journey in tech started with a curiosity about how things work on the internet, which quickly evolved into a dedicated path of designing and engineering scalable, production-grade applications.
              </p>
              <p className="text-zinc-655 dark:text-zinc-400 text-sm sm:text-base leading-relaxed transition-colors duration-300">
                My career objective is to build highly efficient and visually stunning web systems while integrating AI capabilities to solve actual business and engineering bottlenecks. I thrive on challenges that force me to expand my engineering scope.
              </p>
            </div>

            {/* Dashboard Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-white/50 dark:bg-zinc-950/20 border border-zinc-200 dark:border-zinc-850 hover:border-zinc-300 dark:hover:border-zinc-700/60 p-4 rounded-xl flex items-center gap-4 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <div className="p-3 bg-slate-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-850 rounded-lg transition-colors duration-300">
                    {stat.icon}
                  </div>
                  <div>
                    <h4 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white font-display transition-colors duration-300">{stat.value}</h4>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 tracking-wide font-medium transition-colors duration-300">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
