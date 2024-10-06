import Image from 'next/image';
import Reveal from '../animation/Reveal';
import proggraming from '../../../public/proggraming4.svg';

const AboutImages = () => {
  return (
    <section className='px-8 md:px-0'>
      <Reveal>
        <Image
          src={proggraming}
          alt='illustration of person looking at website'
          className='my-16 md:hidden'
          priority={false}
        />
      </Reveal>
    </section>
  );
};
export default AboutImages;
