import RevealWithBackground from '../animation/RevealWithBackground';
import note from '../../../public/note.svg';
import lightbulb from '../../../public/lightbulb.svg';
import Image from 'next/image';
import Reveal from '../animation/Reveal';
const AboutTitle = () => {
  return (
    <div className='text-center md:text-start flex flex-col items-center gap-4 md:p-4 md:items-start'>
      <div className='flex lg:justify-between lg:w-full lg:items-end'>
        <RevealWithBackground>
          <h1 className='font-bold text-2xl md:text-3xl lg:text-4xl'>
            About <span className='text-highlightedTextColor'>me</span>
          </h1>
        </RevealWithBackground>
        <Reveal>
          <Image
            alt='lightbulb'
            src={lightbulb}
            className='hidden lg:block mr-10 w-10'
            priority={false}
          />
        </Reveal>
      </div>
      <RevealWithBackground>
        <p className='font-normal text-lg max-w-[540px]'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          harum illo aspernatur numquam, expedita incidunt. Dolore quod illo
          aspernatur eius iure? Placeat vero voluptate laboriosam dolores itaque
          unde fuga iste. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Totam accusantium, pariatur facilis unde amet quasi tempora enim
          quas repellat qui fuga minima provident ea suscipit dolores ut quae
          dignissimos recusandae.
        </p>
      </RevealWithBackground>
    </div>
  );
};
export default AboutTitle;
