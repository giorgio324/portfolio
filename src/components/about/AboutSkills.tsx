import RevealWithBackground from '../animation/RevealWithBackground';
import { skills } from '@/data/skills';
import StaggerReveal from '../animation/StaggerReveal';
const AboutSkills = () => {
  return (
    <section className='md:my-20 md:flex justify-between gap-10'>
      <div className='flex-grow'>
        <RevealWithBackground>
          <h1 className='text-4xl lg:text-5xl flex flex-col bebas-neue w-max'>
            Tech Skills
          </h1>
        </RevealWithBackground>
      </div>
      <div className='mt-3 md:mt-0 md:max-w-lg'>
        <div>
          <RevealWithBackground>
            <p className='md:text-lg manrope text-paragraphTextColor'>
              While I'm constantly seeking to expand my skillset, these are the
              technologies where I possess expertise.
            </p>
          </RevealWithBackground>
        </div>
        <div className='flex gap-3 flex-wrap mt-6 mb-4'>
          {skills.map((skill, index) => {
            return (
              <StaggerReveal key={skill} index={index} delay={0.1}>
                <p className='text-sm md:text-base uppercase manrope font-medium border border-borderColor px-4 py-2 md:px-6 md:py-3 rounded-full'>
                  {skill}
                </p>
              </StaggerReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default AboutSkills;
