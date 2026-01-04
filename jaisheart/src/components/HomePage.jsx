import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';

const HomePage = () => {
  return (
    <section id="home" className="relative w-full min-h-screen mx-auto flex flex-col items-center justify-center text-center px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className={`${styles.heroHeadText} text-white`}>
          Welcome to <span className="text-[#915EFF]">JaisTechWorld</span>
        </h1>
        <p className={`${styles.heroSubText} mt-4 text-white-100 max-w-4xl mx-auto`}>
          JaisTechWorld aims in bridging the gap between utility and play. 
          We are a dedicated Mobile App and Video Game Developer company focused on creating seamless digital experiences.
        </p>
        <p className="text-secondary text-[17px] mt-6 max-w-3xl mx-auto leading-[30px]">
          From building intuitive, high-performance mobile applications to designing immersive gameplay mechanics, 
          we thrive on turning complex code into user-friendly products. Whether it’s an essential utility tool 
          or a captivating mobile game, we build with a focus on performance, polish, and the end-user experience.
        </p>
      </motion.div>

      

     
    </section>
  );
};

export default HomePage;
