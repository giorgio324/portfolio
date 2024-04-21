import Image from 'next/image';
import Reveal from '../animation/Reveal';
import sleepingPerson from '../../../public/sleep.svg';
import doodles from '../../../public/doodles2.svg';
import shadow from '../../../public/shadow.svg';
const AboutImages = () => {
  return (
    <div className='flex flex-col justify-center items-center py-8'>
      <div className='relative max-h-[240px] max-w-[280px] md:max-w-md'>
        <Reveal>
          <Image src={doodles} alt='doodles' placeholder='empty' priority />
        </Reveal>
        <div className='absolute top-0 '>
          <Reveal>
            <div className='relative z-10'>
              <Image
                src={sleepingPerson}
                alt='person leaning on chair while looking at a laptop'
                placeholder='empty'
                priority
              />
            </div>
          </Reveal>
          <div className='absolute -bottom-2'>
            <Image
              src={shadow}
              alt='shadow of person leaning on chair while looking at a laptop'
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutImages;
