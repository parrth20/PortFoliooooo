import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import {Model} from './Model'; /* highlight-line */

const Hero = () => {



  return (
    <section className={`relative w-full h-screen`}>
      
      <div
      style={{zIndex:'1'}}
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`
      }
      
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div
        >
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Parag</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop AI apps, user <br className='sm:block hidden' />
            interfaces and web applications
          </p>
        </div>
      </div>
      <div style={{display:'flex', justifyContent:'flex-end',
      alignItems: 'center', marginLeft:'80px',zIndex:'9999'}}>
      <Canvas
         camera={{  fov: 30 }}
         style={{
            backgroundColor: 'transparent',
            width: '400px',
            height: '600px',
            marginRight:'60px',
            marginTop:'30px'
            
            
         }}
      >
         <ambientLight intensity={1.25} />
         <ambientLight intensity={0.1} />
         <directionalLight intensity={0.4} />
         <Suspense fallback={null}>
            <Model position={[0.025, -0.9, 0]} /> 
         </Suspense>
         <OrbitControls />
      </Canvas>
      </div>
      

      {/* <ComputersCanvas /> */}

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
