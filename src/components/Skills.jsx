import { motion } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, 
  FaNodeJs, FaPython, FaGitAlt, FaGithub, FaFigma 
} from 'react-icons/fa';
import { SiExpress, SiMongodb, SiCplusplus, SiTailwindcss, SiTypescript } from 'react-icons/si';

const Skills = () => {
  const allSkills = [
    { name: 'React', icon: <FaReact />, color: 'text-[#61DAFB]' },
    { name: 'JavaScript', icon: <FaJs />, color: 'text-[#F7DF1E]' },
    { name: 'TypeScript', icon: <SiTypescript />, color: 'text-[#3178C6]' },
    { name: 'HTML5', icon: <FaHtml5 />, color: 'text-[#E34F26]' },
    { name: 'CSS3', icon: <FaCss3Alt />, color: 'text-[#1572B6]' },
    { name: 'Tailwind', icon: <SiTailwindcss />, color: 'text-[#06B6D4]' },
    { name: 'Node.js', icon: <FaNodeJs />, color: 'text-[#339933]' },
    { name: 'Express', icon: <SiExpress />, color: 'dark:text-white text-zinc-800' },
    { name: 'MongoDB', icon: <SiMongodb />, color: 'text-[#47A248]' },
    { name: 'C++', icon: <SiCplusplus />, color: 'text-[#00599C]' },
    { name: 'Python', icon: <FaPython />, color: 'text-[#3776AB]' },
    { name: 'Git', icon: <FaGitAlt />, color: 'text-[#F05032]' },
    { name: 'GitHub', icon: <FaGithub />, color: 'dark:text-white text-zinc-800' },
    { name: 'Figma', icon: <FaFigma />, color: 'text-[#F24E1E]' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2">Technical Stack</h2>
          <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Icon Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-6"
        >
          {allSkills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex flex-col items-center justify-center p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 group"
            >
              <div className={`text-4xl mb-3 transition-transform duration-300 ${skill.color}`}>
                {skill.icon}
              </div>
              <span className="text-[10px] font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;