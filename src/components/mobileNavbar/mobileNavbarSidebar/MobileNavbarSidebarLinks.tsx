'use client';
import { navLinks } from '@/data/navLinks';
import Link from 'next/link';
import { useActiveLinkContext } from '@/context/ActiveLinkContext';
import StaggerReveal from '@/components/animation/StaggerReveal';

type Props = {
  closeNavbar: () => void;
};

const MobileNavbarSidebarLinks = ({ closeNavbar }: Props) => {
  const { setTimeOfLastClick, setCurrentPath, currentPath } =
    useActiveLinkContext();
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    elementId: string
  ) => {
    e.preventDefault();
    const section = document.getElementById(elementId);
    section?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
    setTimeOfLastClick(Date.now());
    setCurrentPath(elementId);
    closeNavbar();
  };
  return (
    <div className='flex-grow flex flex-col gap-4'>
      {navLinks.map((link, index) => (
        <StaggerReveal
          key={link.label}
          delay={0.2}
          index={index}
          className='w-fit'
          directionX='right-to-left'
        >
          <Link
            href={`#${link.path}`}
            className={`text-2xl manrope ${
              currentPath === link.path ? 'font-bold' : 'font-medium'
            }`}
            onClick={(e) => handleClick(e, link.path)}
          >
            {link.label}
          </Link>
          {currentPath === link.path && (
            <StaggerReveal delay={0.2} index={index} directionX='right-to-left'>
              <div className='h-[2px] bg-black'></div>
            </StaggerReveal>
          )}
        </StaggerReveal>
      ))}
    </div>
  );
};
export default MobileNavbarSidebarLinks;
