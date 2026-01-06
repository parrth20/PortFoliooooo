import { motion } from "framer-motion";

import { styles } from "../styles";
import { socialLinks } from "../constants";

const Hero = () => {
  return (
    <section className='relative w-full min-h-screen flex items-center'>
      <div
        className={`max-w-7xl mx-auto ${styles.paddingX} flex flex-col gap-6 py-24`}
      >
        <div className='flex flex-col justify-center items-start gap-4'>
          <p className='text-secondary uppercase tracking-wider'>Hello, I'm</p>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Parth Bandwal
          </h1>
          <p className={`${styles.heroSubText} text-white-100 max-w-3xl`}>
            B.Tech IT @ IIIT Lucknow • Full-Stack + Web3 + GenAI • Competitive Programmer
          </p>
        </div>

        <p className='text-secondary text-[17px] max-w-3xl leading-[30px]'>
          I build responsive web experiences, Web3 dashboards, and GenAI tools. I
          also compete regularly in programming contests and love solving
          algorithmic challenges.
        </p>

        <div className='flex flex-wrap gap-4'>
          <a
            href='#project'
            className='bg-tertiary px-6 py-3 rounded-xl text-white font-semibold'
          >
            View Projects
          </a>
          <a
            href='#contact'
            className='border border-secondary px-6 py-3 rounded-xl text-white font-semibold'
          >
            Contact Me
          </a>
        </div>

        <div className='flex flex-wrap gap-4 pt-4'>
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target='_blank'
              rel='noreferrer'
              className='text-white underline'
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className='pt-10'>
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
            className='w-6 h-10 rounded-full border-2 border-secondary flex items-start justify-center p-1'
          >
            <div className='w-2 h-2 rounded-full bg-secondary' />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
