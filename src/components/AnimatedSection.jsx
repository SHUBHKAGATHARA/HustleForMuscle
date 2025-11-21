import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimatedSection = ({ 
  children, 
  className = '', 
  animation = 'fadeUp',
  delay = 0 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (ref.current) {
      gsap.fromTo(
        ref.current,
        { 
          opacity: 0, 
          y: animation === 'fadeUp' ? 50 : 0,
          x: animation === 'fadeLeft' ? 50 : animation === 'fadeRight' ? -50 : 0,
          scale: animation === 'scale' ? 0.8 : 1
        },
        {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          duration: 1,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );
    }
  }, [animation, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
