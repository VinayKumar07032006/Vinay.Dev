import { Mail, ArrowUp } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-900 py-12 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Brand & Copyright */}
          <div className="text-center md:text-left">
            <a href="#home" className="text-xl font-bold text-zinc-900 dark:text-white tracking-tighter block mb-2 font-display transition-colors">
              Vinay<span className="text-brand-primary">.dev</span>
            </a>
            <p className="text-zinc-500 text-xs font-semibold transition-colors">
              &copy; {new Date().getFullYear()} Designed & Developed by Vinay. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/VinayKumar07032006" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2.5 rounded-full border border-zinc-200 dark:border-zinc-850 bg-slate-50 dark:bg-zinc-950 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:border-zinc-350 dark:hover:border-zinc-700 transition-all duration-300 shadow-sm"
            >
              <FaGithub className="w-4 h-4" />
            </a>
            <a 
              href="https://www.linkedin.com/in/vinay-kumar-mait/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2.5 rounded-full border border-zinc-200 dark:border-zinc-850 bg-slate-50 dark:bg-zinc-950 text-zinc-500 dark:text-zinc-400 hover:text-[#0077b5] hover:border-zinc-350 dark:hover:border-zinc-700 transition-all duration-300 shadow-sm"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>
            <a 
              href="https://leetcode.com/u/VinayKumar2006/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2.5 rounded-full border border-zinc-200 dark:border-zinc-850 bg-slate-50 dark:bg-zinc-950 text-zinc-500 dark:text-zinc-400 hover:text-[#FFA116] hover:border-zinc-350 dark:hover:border-zinc-700 transition-all duration-300 shadow-sm"
            >
              <SiLeetcode className="w-4 h-4" />
            </a>
            <a 
              href="mailto:vipvinaytanwar@gmail.com" 
              className="p-2.5 rounded-full border border-zinc-200 dark:border-zinc-850 bg-slate-50 dark:bg-zinc-950 text-zinc-500 dark:text-zinc-400 hover:text-brand-primary hover:border-zinc-350 dark:hover:border-zinc-700 transition-all duration-300 shadow-sm"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Back to top */}
          <button 
            onClick={scrollToTop}
            className="p-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 rounded-full hover:bg-slate-50 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-white transition-all duration-300 shadow-sm"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
