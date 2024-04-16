import sittingPerson from '../../../public/sittingPerson.svg';
import doodles from '../../../public/doodles.svg';
import shadow from '../../../public/shadow.svg';
import Reveal from '../animation/Reveal';
import Image from 'next/image';

const HeroImages = () => {
  return (
    <div className='flex flex-col justify-center items-center py-8 '>
      <div className='relative max-h-[240px] max-w-[280px] md:max-w-md'>
        <Reveal>
          <Image src={doodles} alt='doodles' placeholder='empty' />
        </Reveal>
        <div className='absolute top-1/3 '>
          <Reveal>
            <div className='relative z-10'>
              <Image
                src={sittingPerson}
                alt='person writing on laptop'
                placeholder='empty'
                priority
              />
            </div>
          </Reveal>
          <div className='absolute bottom-[20%]'>
            <Image src={shadow} alt='shadow of person writing on laptop' />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroImages;
