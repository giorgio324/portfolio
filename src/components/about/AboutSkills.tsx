'use client';
import RevealWithBackground from '../animation/RevealWithBackground';
import { skills } from '@/data/skills';
import { motion } from 'framer-motion';
const AboutSkills = () => {
  return (
    <section>
      <RevealWithBackground>
        <h1 className='text-4xl lg:text-5xl flex flex-col bebas-neue'>
          Technologies that i have worked with
        </h1>
      </RevealWithBackground>
      <div className='mt-3'>
        <RevealWithBackground>
          <p className='md:text-lg manrope text-paragraphTextColor'>
            I'm always eager to acquire new skills, but the ones I showcase are
            the ones I'm confident in utilizing effectively.
          </p>
        </RevealWithBackground>
      </div>
      {/* TODO: add skills here and map over them add stager animation so it looks cool and dont forget responsiveness */}
      <div className='flex gap-3 flex-wrap mt-6 mb-4'>
        {skills.map((skill, index) => {
          return (
            <motion.div
              key={skill}
              initial={{ opacity: 0, translateX: -50 }}
              animate={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 0.3, delay: (index + 1) * 0.1 }}
            >
              <p className='text-sm uppercase manrope font-medium border border-borderColor px-4 py-2 rounded-full'>
                {skill}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
export default AboutSkills;
