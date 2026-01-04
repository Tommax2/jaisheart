import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";

const About = () => {
  return (
    <section id="about" className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About the CEO.</h2>
      </motion.div>

      <div className="mt-10 flex flex-col md:flex-row items-center gap-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-[300px] h-[300px] rounded-2xl overflow-hidden shadow-card"
        >
          <img
            src="/ceo.jpeg"
            alt="Joseph Idowu Samuel"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1"
        >
          <h3 className="text-white text-[24px] font-bold mb-4">Joseph Idowu Samuel</h3>
          <p className="text-secondary text-[17px] leading-[30px] max-w-3xl">
            Born in Nigeria and deeply passionate about technology, Joseph Idowu Samuel is the visionary CEO behind JaisTechWorld. 
            His journey in the tech world is driven by a commitment to innovation and a desire to create impactful digital experiences. 
            With a focus on excellence and a forward-thinking approach, he leads the team in delivering cutting-edge solutions that resonate with users globally.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
