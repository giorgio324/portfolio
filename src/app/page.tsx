import Contact from '@/components/contact/Contact';
import About from '@/components/home/About';
import Home from '@/components/home/Home';
import Projects from '@/components/projects/Projects';
import PageScrollDetectionWrapper from '@/components/shared/PageScrollDetectionWrapper';

const page = () => {
  return (
    <section>
      <PageScrollDetectionWrapper id='home'>
        <Home />
      </PageScrollDetectionWrapper>
      <PageScrollDetectionWrapper id='about'>
        <About />
      </PageScrollDetectionWrapper>
      <PageScrollDetectionWrapper id='projects'>
        <Projects />
      </PageScrollDetectionWrapper>
      <PageScrollDetectionWrapper id='contact'>
        <Contact />
      </PageScrollDetectionWrapper>
    </section>
  );
};
export default page;
