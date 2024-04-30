import { socials } from '@/data/social';
import SectionDescription from '../shared/SectionDescription';
import SectionTitle from '../shared/SectionTitle';
import Reveal from '../animation/Reveal';
import Link from 'next/link';
const ContactTitle = () => {
  /* TODO: fix this shit later */
  return (
    <div>
      <SectionTitle>Let’s connect</SectionTitle>
      <div className='mt-4'>
        <SectionDescription>
          send me a message from form
          <br />
          or contact me at
          <br />
          <a
            href='mailto:giorgikochuashvili2002@gmail.com'
            className='border-b-2 border-b-buttonGreenBackgroundColor'
          >
            giorgikochuashvili2002@gmail.com
          </a>
        </SectionDescription>
      </div>
      <div className='flex gap-8 mt-10'>
        {socials.map((social) => {
          return (
            <Reveal key={social.label}>
              <Link href={social.path} target='_blank'>
                <social.icon className='text-4xl' />
              </Link>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
};
export default ContactTitle;
