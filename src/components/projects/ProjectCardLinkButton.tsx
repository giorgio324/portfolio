import Link from 'next/link';
import Reveal from '../animation/Reveal';

type Props = {
  children: React.ReactNode;
  href: string;
};

const ProjectCardLinkButton = ({ children, href }: Props) => {
  return (
    <Reveal>
      <Link
        target='_blank'
        href={href}
        className='uppercase text-buttonGreenBackgroundColor manrope font-semibold border-b-2 border-b-buttonGreenBackgroundColor flex justify-center items-center gap-2 text-sm md:text-base py-1 hover:text-white hover:border-b-white transition-colors duration-300'
      >
        {children}
      </Link>
    </Reveal>
  );
};
export default ProjectCardLinkButton;
