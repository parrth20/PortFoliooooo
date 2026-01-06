import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { competitiveProfiles } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const CompetitiveCodingCard = ({ index, platform, handle, solved, rating, link }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    className='bg-tertiary p-5 rounded-2xl sm:w-[300px] w-full'
  >
    <h3 className='text-white text-[22px] font-bold'>{platform}</h3>
    <p className='text-secondary text-[14px] mt-1'>@{handle}</p>
    <ul className='mt-4 text-secondary text-[14px] space-y-2'>
      <li>{solved}</li>
      <li>Rating: {rating}</li>
    </ul>
    <a
      href={link}
      target='_blank'
      rel='noreferrer'
      className='inline-block mt-4 text-[14px] text-white underline'
    >
      View profile
    </a>
  </motion.div>
);

const CompetitiveCoding = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Competitive programming</p>
        <h2 className={styles.sectionHeadText}>Competitive Coding.</h2>
      </motion.div>

      <div className='mt-10 flex flex-wrap gap-7'>
        {competitiveProfiles.map((profile, index) => (
          <CompetitiveCodingCard
            key={profile.platform}
            index={index}
            {...profile}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(CompetitiveCoding, "competitive");
