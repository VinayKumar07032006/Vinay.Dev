import { motion } from 'framer-motion';
import { Award, Star, CheckCircle } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "August 2025",
      icon: <Award className="w-6 h-6 text-[#FF9900]" />
    },
    {
      title: "1st Place - Smart City Hackathon",
      issuer: "Tech University",
      date: "March 2025",
      icon: <Star className="w-6 h-6 text-yellow-500" />
    },
    {
      title: "Meta Front-End Developer Certificate",
      issuer: "Coursera",
      date: "December 2024",
      icon: <CheckCircle className="w-6 h-6 text-brand-primary" />
    },
    {
      title: "Top 50 - National Coding Olympiad",
      issuer: "Code Foundation",
      date: "July 2024",
      icon: <Star className="w-6 h-6 text-purple-400" />
    }
  ];

  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-slate-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight font-display mb-4">Certifications & Awards</h2>
            <div className="w-20 h-1 bg-brand-primary mx-auto rounded-full"></div>
          </motion.div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-zinc-950/20 border border-zinc-900 hover:border-zinc-750/70 p-5 rounded-2xl flex items-center gap-5 group transition-all duration-300 text-left"
            >
              {/* Icon Container */}
              <div className="p-3 bg-zinc-950 border border-zinc-850 rounded-xl group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
                {item.icon}
              </div>
              
              {/* Content */}
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-1 group-hover:text-brand-primary transition-colors font-display">
                  {item.title}
                </h3>
                <div className="flex items-center gap-2.5 text-xs text-zinc-500 font-mono">
                  <span className="text-zinc-400 font-medium">{item.issuer}</span>
                  <span>•</span>
                  <span>{item.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Achievements;
