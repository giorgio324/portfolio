import { skills } from '@/data/skills';
import StaggerReveal from '../animation/StaggerReveal';
import SectionTitle from '../shared/SectionTitle';
import SectionDescription from '../shared/SectionDescription';
const AboutSkills = () => {
  return (
    <section className='md:my-20 md:flex justify-between gap-10'>
      <div className='flex-grow'>
        <SectionTitle>Tech Skills</SectionTitle>
      </div>
      <div className='mt-3 md:mt-0 md:max-w-lg'>
        <SectionDescription>
          While I'm constantly seeking to expand my skillset, these are the
          technologies where I possess expertise.
        </SectionDescription>

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
