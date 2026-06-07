import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 40, stiffness: 450, mass: 0.35 };
  const cursorRingX = useSpring(cursorX, springConfig);
  const cursorRingY = useSpring(cursorY, springConfig);
  
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Check if device supports fine cursor actions (non-touch)
    const checkDevice = () => {
      const isTouch = window.matchMedia('(pointer: coarse)').matches || ('ontouchstart' in window) || navigator.maxTouchPoints > 0;
      setIsMobile(isTouch);
      if (isTouch) {
        document.documentElement.classList.remove('custom-cursor-active');
      } else {
        document.documentElement.classList.add('custom-cursor-active');
      }
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.onclick || 
        target.closest('a') || 
        target.closest('button') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.getAttribute('role') === 'button';
      setIsHovered(!!isInteractive);
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('resize', checkDevice);
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseover', handleMouseOver);
      document.documentElement.classList.remove('custom-cursor-active');
    };
  }, [cursorX, cursorY, isVisible]);

  if (isMobile || !isVisible) return null;

  return (
    <>
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-brand-primary rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-7 h-7 border border-brand-primary/40 rounded-full pointer-events-none z-50"
        style={{
          x: cursorRingX,
          y: cursorRingY,
          translateX: '-50%',
          translateY: '-50%',
          scale: isHovered ? 1.4 : 1,
          backgroundColor: isHovered ? 'rgba(139, 92, 246, 0.08)' : 'rgba(0, 0, 0, 0)',
        }}
        transition={{ type: 'keyframes', duration: 0.15 }}
      />
    </>
  );
};

export default CustomCursor;
