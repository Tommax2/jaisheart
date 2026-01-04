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

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-10"
      >
        <a
          href="https://drive.google.com/uc?export=download&id=1QmepoLEi8Ihnvu4OBCXOJL1uzyJJiNjL" 
          className="bg-[#915EFF] hover:bg-[#7a4cdb] text-white font-bold py-4 px-10 rounded-full text-xl transition-all shadow-lg shadow-purple-500/50"
        >
          Download Jaiscolorflow APK
        </a>
      </motion.div>

      <div className="mt-12 flex flex-col items-center">
        <p className="text-secondary text-sm mb-4">Also available for transfer to Google Drive</p>
        <div className="flex gap-4">
          <button 
            onClick={() => window.open('https://drive.google.com/file/d/1QmepoLEi8Ihnvu4OBCXOJL1uzyJJiNjL/view?usp=drivesdk', '_blank')}
            className="flex items-center gap-2 border border-secondary text-white py-2 px-6 rounded-lg hover:bg-white/10 transition-all"
          >
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/12/Google_Drive_icon_%282020%29.svg" alt="Drive" className="w-5 h-5" />
            Transfer to Drive
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
