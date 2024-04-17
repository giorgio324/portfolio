import About from '@/components/home/About';
import Home from '@/components/home/Home';
import Projects from '@/components/projects/Projects';
import PageScrollDetectionWrapper from '@/components/shared/PageScrollDetectionWrapper';
import { Poppins } from 'next/font/google';

const popins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });

const page = () => {
  return (
    <section className={`${popins.className} `}>
      <PageScrollDetectionWrapper id='home'>
        <Home />
      </PageScrollDetectionWrapper>
      <PageScrollDetectionWrapper id='about'>
        <About />
      </PageScrollDetectionWrapper>
      <PageScrollDetectionWrapper id='projects'>
        <Projects />
      </PageScrollDetectionWrapper>
    </section>
  );
};
export default page;
