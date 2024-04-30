import { socials } from '@/data/social';
import SectionDescription from '../shared/SectionDescription';
import SectionTitle from '../shared/SectionTitle';
import Reveal from '../animation/Reveal';
import Link from 'next/link';
import RevealWithBackground from '../animation/RevealWithBackground';
const ContactTitle = () => {
  /* TODO: fix this shit later */
  return (
    <div>
      <SectionTitle>Let’s connect</SectionTitle>
      <div className='mt-4 text-paragraphTextColor md:text-lg manrope'>
        <RevealWithBackground>
          <div className='flex flex-col gap-2'>
            <div className='flex flex-wrap gap-2'>
              <p>Message me at</p>
              <a
                href='mailto:giorgikochuashvili2002@gmail.com'
                className='text-buttonGreenBackgroundColor manrope font-semibold border-b-2 border-b-buttonGreenBackgroundColor flex items-center text-sm md:text-base pb-1'
              >
                giorgikochuashvili2002@gmail.com
              </a>
            </div>
            <p>Or fill out the contact form</p>
          </div>
        </RevealWithBackground>
      </div>
      <div className='flex gap-8 mt-10'>
        {socials.map((social) => {
          return (
            <Reveal key={social.label}>
              <Link href={social.path} target='_blank'>
                <social.icon className='text-4xl text-buttonGreenBackgroundColor' />
              </Link>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
};
export default ContactTitle;
