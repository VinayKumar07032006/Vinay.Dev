import { motion } from 'framer-motion';
import { Mail, ArrowRight, Download } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { useEffect, useState, useRef } from 'react';

// Performant HTML5 Canvas Particle System React-optimized
const ParticleCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let animationFrameId;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const particles = [];
    const particleCount = 40;
    const mouse = { x: -1000, y: -1000, radius: 120 };

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 1.5 + 0.5;
        this.speedX = Math.random() * 0.15 - 0.075;
        this.speedY = -Math.random() * 0.35 - 0.1; // Drift upwards
        this.opacity = Math.random() * 0.4 + 0.15;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.y < 0) {
          this.y = height;
          this.x = Math.random() * width;
        }
        if (this.x < 0 || this.x > width) {
          this.speedX = -this.speedX;
        }

        // Repel from cursor
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < mouse.radius) {
          const force = (mouse.radius - distance) / mouse.radius;
          const angle = Math.atan2(dy, dx);
          this.x += Math.cos(angle) * force * 1.8;
          this.y += Math.sin(angle) * force * 1.8;
        }
      }

      draw() {
        ctx.fillStyle = `rgba(139, 92, 246, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    init();
    animate();

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />;
};

// Physics-based Magnetic Button wrapper
const MagneticButton = ({ children, className }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    setPosition({ x: x * 0.3, y: y * 0.3 }); // Attraction strength
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', damping: 15, stiffness: 180, mass: 0.2 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "Full Stack & AI Developer";
  
  // Custom Tilt state for Hero Image card
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleCardMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = -(y - centerY) / 18; // Max tilt rotation
    const rotateY = (x - centerX) / 18;
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleCardMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
      }
    }, 90);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-28 pb-16 bg-slate-50 dark:bg-brand-dark transition-colors duration-300">
      {/* Background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary/10 dark:bg-brand-primary/15 rounded-full blur-[140px] pointer-events-none transition-colors duration-300"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-[140px] pointer-events-none transition-colors duration-300"></div>
      
      {/* Interactive particle canvas */}
      <ParticleCanvas />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Intro */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-brand-primary font-bold tracking-widest uppercase text-xs sm:text-sm mb-4 font-display flex items-center justify-center lg:justify-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-ping"></span>
                Available for Projects
              </h2>
              
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-zinc-900 dark:text-white mb-6 tracking-tight font-display leading-[1.05] transition-colors duration-300">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-purple-400">Vinay</span>
              </h1>

              <div className="h-10 sm:h-12 mb-6">
                <h3 className="text-xl sm:text-3xl text-zinc-700 dark:text-zinc-300 font-medium font-display transition-colors duration-300">
                  {text}
                  <span className="text-brand-primary animate-pulse ml-0.5">|</span>
                </h3>
              </div>

              <p className="max-w-xl mx-auto lg:mx-0 text-zinc-650 dark:text-zinc-400 text-sm sm:text-base mb-10 leading-relaxed transition-colors duration-300">
                Computer Science student dedicated to building robust full-stack applications and integrating machine learning solutions that solve complex, real-world problems.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12"
            >
              <MagneticButton className="w-full sm:w-auto">
                <a
                  href="#projects"
                  className="w-full sm:w-auto px-8 py-3 rounded-full bg-brand-primary text-white font-semibold hover:bg-brand-secondary transition-all duration-300 flex items-center justify-center gap-2 group text-sm"
                >
                  View Projects
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </MagneticButton>

              <MagneticButton className="w-full sm:w-auto">
                <a
                  href="/Vinay_Kumar_Resume.pdf"
                  download="Vinay_Kumar_Resume.pdf"
                  className="w-full sm:w-auto px-8 py-3 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-200 font-semibold hover:bg-slate-50 dark:hover:bg-zinc-800 hover:text-zinc-950 dark:hover:text-white transition-all duration-300 flex items-center justify-center gap-2 text-sm shadow-sm"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </MagneticButton>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex items-center justify-center lg:justify-start gap-5"
            >
              <SocialLink href="https://github.com/VinayKumar07032006" icon={<FaGithub />} />
              <SocialLink href="https://www.linkedin.com/in/vinay-kumar-mait/" icon={<FaLinkedin />} />
              <SocialLink href="https://leetcode.com/u/VinayKumar2006/" icon={<SiLeetcode />} />
              <SocialLink href="mailto:vipvinaytanwar@gmail.com" icon={<Mail />} />
            </motion.div>
          </div>

          {/* Right Hero Image Card (Tilt and depth parallax) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center relative"
          >
            <div
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              style={{
                transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transformStyle: 'preserve-3d',
                transition: 'transform 0.15s ease-out',
              }}
              className="w-full max-w-[380px] aspect-[4/5] rounded-[24px] bg-white/40 dark:bg-zinc-950/40 border border-zinc-200 dark:border-zinc-800/80 p-4 relative shadow-xl dark:shadow-2xl overflow-hidden group hover:border-zinc-350 dark:hover:border-zinc-700/60 transition-all duration-300"
            >
              {/* Inner card glow overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-100 dark:from-zinc-950 via-transparent to-transparent opacity-60 z-10"></div>
              
              <div 
                style={{ transform: 'translateZ(30px)' }}
                className="w-full h-full rounded-[18px] overflow-hidden bg-slate-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-850 flex items-center justify-center relative select-none"
              >
                <img 
                  src="/hero_visual.png" 
                  alt="Vinay Workspace Visual" 
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" 
                  draggable="false"
                />
              </div>

              {/* Float tag element */}
              <div 
                style={{ transform: 'translateZ(50px)' }}
                className="absolute bottom-8 left-8 right-8 glass p-4 rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 shadow-2xl backdrop-blur-md z-20 flex items-center gap-3 transition-colors"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-brand-primary animate-pulse"></div>
                <div className="text-left">
                  <div className="text-[10px] uppercase font-bold text-brand-primary tracking-widest">Core Area</div>
                  <div className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">Machine Learning & APIs</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

const SocialLink = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 rounded-full border border-zinc-200 dark:border-zinc-850 bg-white/40 dark:bg-zinc-950/40 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 hover:border-zinc-350 dark:hover:text-white dark:hover:border-zinc-700 transition-all duration-300 hover:scale-110 shadow-md dark:shadow-lg"
  >
    <span className="w-5 h-5 block flex items-center justify-center">{icon}</span>
  </a>
);

export default Hero;
