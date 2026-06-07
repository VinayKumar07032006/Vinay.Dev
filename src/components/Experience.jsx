import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: "Full Stack Developer Intern",
      company: "Tech Innovators Inc.",
      location: "Remote",
      period: "May 2025 - Present",
      description: [
        "Developed and maintained responsive web applications using React and Node.js.",
        "Collaborated with the design team to implement modern UI/UX principles.",
        "Optimized database queries resulting in a 20% reduction in load times."
      ]
    },
    {
      role: "Freelance Web Developer",
      company: "Self-Employed",
      location: "Global",
      period: "Jan 2024 - April 2025",
      description: [
        "Delivered custom portfolio websites for multiple clients.",
        "Integrated third-party APIs and payment gateways.",
        "Ensured cross-browser compatibility and mobile responsiveness."
      ]
    },
    {
      role: "Hackathon Participant",
      company: "Global Tech Hackathon",
      location: "San Francisco, CA",
      period: "October 2024",
      description: [
        "Built a working prototype of an AI-driven educational tool in 48 hours.",
        "Led a team of 4 to design the frontend architecture.",
        "Secured top 10 position out of 200+ competing teams."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-brand-dark transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white tracking-tight font-display mb-4 transition-colors duration-300">Professional History</h2>
            <div className="w-20 h-1 bg-brand-primary mx-auto rounded-full"></div>
          </motion.div>
        </div>

        {/* Timeline Stack */}
        <div className="relative border-l border-zinc-200 dark:border-zinc-850 ml-4 md:ml-6 space-y-12 transition-colors">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-10 group"
            >
              {/* Glowing circular node indicator */}
              <div className="absolute left-[-6px] top-1.5 w-3 h-3 rounded-full bg-white dark:bg-zinc-950 border-2 border-zinc-200 dark:border-zinc-800 group-hover:border-brand-primary group-hover:bg-brand-primary transition-all duration-300 shadow-xl shadow-brand-primary/10"></div>
              
              {/* Timeline Card */}
              <div className="bg-white dark:bg-zinc-950/20 border border-zinc-200 dark:border-zinc-900 group-hover:border-zinc-350 dark:group-hover:border-zinc-750/70 p-6 rounded-2xl transition-all duration-300 shadow-lg dark:shadow-xl text-left">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
                  <div>
                    <h3 className="font-bold text-lg text-zinc-900 dark:text-white font-display group-hover:text-brand-primary transition-colors duration-300">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-3 text-xs text-zinc-650 dark:text-zinc-400 mt-1 transition-colors">
                      <span className="font-semibold text-purple-600 dark:text-purple-400">{exp.company}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-zinc-450 dark:text-zinc-650 transition-colors" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-[10px] font-semibold text-zinc-600 dark:text-zinc-400 bg-slate-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 px-3 py-1 rounded-full w-fit transition-colors">
                    <Calendar className="w-3 h-3 text-brand-primary" />
                    {exp.period}
                  </div>
                </div>

                {/* Achievements descriptions */}
                <ul className="space-y-2 text-zinc-650 dark:text-zinc-400 text-xs sm:text-sm transition-colors">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex gap-2 items-start">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-brand-primary flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
