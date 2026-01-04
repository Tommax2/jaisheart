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

      <div className="w-full flex flex-col">
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

        <div className="mt-8 flex flex-wrap items-center gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <a
              href="https://drive.google.com/uc?export=download&id=1QmepoLEi8Ihnvu4OBCXOJL1uzyJJiNjL" 
              className="bg-[#915EFF] hover:bg-[#7a4cdb] text-white font-bold py-3 px-6 sm:py-4 sm:px-10 rounded-full text-base sm:text-xl transition-all shadow-lg shadow-purple-500/50 inline-block"
            >
              Download Jaiscolorflow APK
            </a>
          </motion.div>

          <div className="flex flex-col items-start">
            <p className="text-secondary text-xs sm:text-sm mb-2">Also available for transfer to Google Drive</p>
            <button 
              onClick={() => window.open('https://drive.google.com/file/d/1QmepoLEi8Ihnvu4OBCXOJL1uzyJJiNjL/view?usp=drivesdk', '_blank')}
              className="flex items-center gap-2 border border-secondary text-white py-2 px-4 sm:px-6 rounded-lg hover:bg-white/10 transition-all text-sm sm:text-base"
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/1/12/Google_Drive_icon_%282020%29.svg" alt="Drive" className="w-4 h-4 sm:w-5 sm:h-5" />
              Transfer to Drive
            </button>
          </div>
        </div>
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
