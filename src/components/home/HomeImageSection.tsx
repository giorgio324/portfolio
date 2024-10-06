import programming2 from '../../../public/proggraming2.svg';
import Reveal from '../animation/Reveal';
import Image from 'next/image';

const HomeImageSection = () => {
  return (
    <section className='my-16 px-8 md:my-0 md:px-0'>
      <Reveal>
        <Image
          src={programming2}
          alt='illustration of person writing code on computer'
          priority={true}
        />
      </Reveal>
    </section>
  );
};
export default HomeImageSection;
