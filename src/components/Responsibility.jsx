import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { responsibilities } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ResponsibilityCard = ({ index, role, org, date, points }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    className='bg-tertiary p-6 rounded-2xl sm:w-[360px] w-full'
  >
    <h3 className='text-white text-[22px] font-bold'>{role}</h3>
    <p className='text-secondary text-[14px] mt-1'>
      {org} • {date}
    </p>
    <ul className='mt-4 list-disc list-inside text-secondary text-[14px] leading-[26px] space-y-2'>
      {points.map((point) => (
        <li key={point}>{point}</li>
      ))}
    </ul>
  </motion.div>
);

const Responsibility = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Leadership</p>
        <h2 className={styles.sectionHeadText}>Position of Responsibility.</h2>
      </motion.div>

      <div className='mt-10 flex flex-wrap gap-7'>
        {responsibilities.map((item, index) => (
          <ResponsibilityCard key={item.role} index={index} {...item} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Responsibility, "responsibility");
