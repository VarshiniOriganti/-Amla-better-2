import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import gsap from 'gsap';

const Hero = () => {
  const heroRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(headingRef.current, 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 0.8 }
    )
    .fromTo(textRef.current, 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 0.8 }, 
      "-=0.4"
    )
    .fromTo(ctaRef.current, 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 0.8 }, 
      "-=0.4"
    );
  }, []);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="show"
      variants={container}
      className="relative min-h-screen flex items-center pt-24 overflow-hidden"
    >
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img 
          src="https://media-exp1.licdn.com/dms/image/D4D12AQGK9sHcodmjQw/article-cover_image-shrink_720_1280/0/1661758860439?e=2147483647&v=beta&t=TgieQGeT9vhey9ps4Ew06Ws3mJx8oJ7nc5OCqQmPgTE" 
          alt="Tech Career" 
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-alma-black/80 to-alma-dark-red/60"></div>
      </motion.div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <motion.h1 
            variants={item}
            className="text-5xl md:text-6xl font-bold mb-6 text-white"
          >
            Launch Your <motion.span 
              className="text-alma-red inline-block"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, type: 'spring', stiffness: 100 }}
            >
              Tech Career
            </motion.span> With AlmaBetter
          </motion.h1>
          
          <motion.p 
            variants={item}
            className="text-xl mb-8 text-gray-200"
          >
            Leading tech education platform with guaranteed job opportunities. Learn from industry experts and become job-ready with our comprehensive programs.
          </motion.p>
          
          <motion.div 
            variants={item}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link to="/apply-now">
                <Button className="bg-alma-red hover:bg-alma-dark-red text-white px-8 py-6 text-lg group flex items-center">
                  Apply Now
                  <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link to="/courses">
                <Button variant="outline" className="border-alma-red text-alma-red hover:bg-alma-red hover:text-white px-8 py-6 text-lg group flex items-center">
                  Explore Courses
                  <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
