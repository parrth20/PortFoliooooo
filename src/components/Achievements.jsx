import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { achievements } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const Achievements = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Milestones</p>
        <h2 className={styles.sectionHeadText}>Achievements.</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("up", "spring", 0.1, 0.75)}
        className='mt-10 bg-tertiary rounded-2xl p-6'
      >
        <ul className='list-disc list-inside text-secondary text-[15px] leading-[28px] space-y-2'>
          {achievements.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Achievements, "achievements");
