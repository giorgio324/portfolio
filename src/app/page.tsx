import Contact from '@/components/contact/Contact';
import About from '@/components/about/About';
import Home from '@/components/home/Home';
import PageDivider from '@/components/shared/PageDivider';
import Projects from '@/components/projects/Projects';
import PageScrollDetectionWrapper from '@/components/shared/PageScrollDetectionWrapper';

const page = () => {
  return (
    <>
      <PageScrollDetectionWrapper id='home'>
        <Home />
        <PageDivider />
      </PageScrollDetectionWrapper>
      <PageScrollDetectionWrapper id='about'>
        <About />
        <PageDivider />
      </PageScrollDetectionWrapper>
      <PageScrollDetectionWrapper id='projects'>
        <Projects />
        <PageDivider />
      </PageScrollDetectionWrapper>
      <PageScrollDetectionWrapper id='contact'>
        <Contact />
      </PageScrollDetectionWrapper>
    </>
  );
};
export default page;
