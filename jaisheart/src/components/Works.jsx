import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";

const FeatureCard = ({ title, description }) => (
  <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full shadow-card">
    <h3 className="text-white font-bold text-[20px]">{title}</h3>
    <p className="mt-2 text-secondary text-[14px] leading-[24px]">{description}</p>
  </div>
);

const Works = () => {
  const features = [
    {
      title: "Real-Time Color Customization",
      description: "Use intuitive sliders to adjust Brightness, Contrast, Saturation, Hue, and Exposure while the video is playing.",
    },
    {
      title: "Pro-Level Color Presets",
      description: "Choose from a library of handcrafted filters like 'Cinematic Teal & Orange' or 'Vintage Film' to change the vibe instantly.",
    },
    {
      title: "Advanced RGB Control",
      description: "Fine-tune specific color channels to correct color balance or create artistic, stylized visuals.",
    },
    {
      title: "Save Your Favorites",
      description: "Save your custom color settings as a personal preset to use again later for your favorite series.",
    },
    {
      title: "Smooth 4K Playback",
      description: "Optimized engine supports all major formats (MP4, MKV, AVI, etc.) with hardware acceleration for seamless viewing.",
    },
    {
      title: "Gesture-Based Interface",
      description: "Change brightness or seek through the video with easy-to-use swipes that don't get in the way of your content.",
    },
  ];

  return (
    <section id="work" className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className={styles.sectionSubText}>Our Featured App</p>
        <h2 className={styles.sectionHeadText}>Jais ColorFlow.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Experience Your Videos in a Whole New Light. Tired of dull, poorly lit, or washed-out videos? 
          Jais ColorFlow is the first mobile video player that gives you professional-grade color control 
          directly in the palm of your hand. Transform your visual experience in real-time.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <FeatureCard {...feature} />
          </motion.div>
        ))}
      </div>

      <div className="mt-20 bg-black-100 p-8 rounded-2xl">
        <h3 className="text-white font-bold text-[24px] mb-4">Perfect For:</h3>
        <ul className="list-disc list-inside text-secondary text-[17px] space-y-2">
          <li><span className="text-white font-semibold">Movie Buffs:</span> Re-grade your favorite films to suit your display’s specific panel.</li>
          <li><span className="text-white font-semibold">Content Creators:</span> Quickly preview how different color grades might look on your footage.</li>
          <li><span className="text-white font-semibold">Accessibility:</span> Increase contrast or shift hues to make videos easier to see for those with color vision deficiencies.</li>
        </ul>
        <p className="mt-6 text-white font-bold text-[18px]">
          Stop settling for the default look. Download Jais ColorFlow today and start watching videos your way.
        </p>
      </div>
    </section>
  );
};

export default Works;
