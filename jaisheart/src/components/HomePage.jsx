import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';

const HomePage = () => {
  return (
    <section className="relative w-full h-screen mx-auto flex flex-col items-center justify-center text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className={`${styles.heroHeadText} text-white`}>
          Download <span className="text-[#915EFF]">Jaiscolorflow</span> APK
        </h1>
        <p className={`${styles.heroSubText} mt-4 text-white-100 max-w-2xl mx-auto`}>
          Get the latest version of Jaiscolorflow directly. 
          Fast, secure, and easy to install on your devices.
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
          Download APK
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
